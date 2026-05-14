/**
 * ========================================================================
 * PORTFOLIO ENGINE V1.0 — DYNAMIC GRID + INFINITE SCROLL
 * Mood Designz (2026 Elite Spec)
 * 
 * Features:
 *   - Loads project data from /data/projects.json
 *   - Renders cards dynamically with staggered entrance animation
 *   - Category filtering with animated transitions
 *   - Infinite scroll: loads 10 projects at a time via IntersectionObserver
 *   - Premium skeleton loading states
 *   - Dynamic filter tab generation from categories in data
 * ========================================================================
 */
(function () {
    "use strict";

    const BATCH_SIZE = 10;
    const DATA_URL = "data/projects.json";

    // --- STATE ---
    let allProjects = [];
    let filteredProjects = [];
    let displayedCount = 0;
    let currentFilter = "all";
    let isLoading = false;
    let allLoaded = false;

    // --- DOM REFS ---
    const grid = document.getElementById("portfolio-grid");
    const pageLoader = document.getElementById("portfolio-loader");
    const bottomLoader = document.getElementById("bottom-loader");
    const sentinel = document.getElementById("load-more-sentinel");
    const endOfList = document.getElementById("end-of-list");
    const filterNav = document.getElementById("filter-nav");
    const mobileFilterList = document.getElementById("mobile-filter-list");
    const countEl = document.getElementById("portfolio-count");

    if (!grid) return; // Not on the portfolio page

    // =====================================================================
    // 1. DATA FETCHING
    // =====================================================================
    async function fetchProjects() {
        try {
            const response = await fetch(DATA_URL);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            allProjects = await response.json();
            return allProjects;
        } catch (err) {
            console.error("[PortfolioEngine] Failed to load projects:", err);
            grid.innerHTML = `
                <div class="portfolio-empty">
                    <div class="portfolio-empty__icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    </div>
                    <div class="portfolio-empty__text">Unable to load projects</div>
                </div>`;
            return [];
        }
    }

    // =====================================================================
    // 2. SKELETON RENDERING
    // =====================================================================
    function renderSkeletons(count = 6) {
        let html = "";
        for (let i = 0; i < count; i++) {
            html += `
                <div class="skeleton-card" style="animation-delay: ${i * 100}ms">
                    <div class="skeleton-card__bar">
                        <div class="skeleton-card__bar-line"></div>
                        <div class="skeleton-card__bar-line"></div>
                    </div>
                </div>`;
        }
        grid.innerHTML = html;
    }

    // =====================================================================
    // 3. CARD RENDERING
    // =====================================================================
    function createCardHTML(project, index) {
        return `
            <article class="tft-card aspect-[4/5] card-enter" 
                     data-category="${project.category}" 
                     data-index="${index}"
                     style="transition-delay: ${(index % BATCH_SIZE) * 80}ms">
                <div class="tft-card__media-wrap">
                    <img alt="${project.name}" 
                         class="tft-card__media" 
                         src="${project.coverImage}" 
                         loading="lazy"/>
                </div>
                <div class="tft-card__overlay"></div>
                <div class="tft-card__content">
                    <div class="tft-card__meta">${project.meta}</div>
                    <div class="tft-card__title-mask">
                        <h3 class="tft-card__title font-display">${project.name}</h3>
                    </div>
                </div>
                <a class="tft-card__link" href="casestudy.html?project=${project.id}"></a>
            </article>`;
    }

    function renderBatch(projects, startIndex) {
        const fragment = document.createDocumentFragment();
        const tempContainer = document.createElement("div");

        projects.forEach((project, i) => {
            tempContainer.innerHTML = createCardHTML(project, startIndex + i);
            const card = tempContainer.firstElementChild;
            fragment.appendChild(card);
        });

        grid.appendChild(fragment);

        // Trigger entrance animation with a micro-delay for paint
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                const newCards = grid.querySelectorAll(".card-enter");
                newCards.forEach((card) => {
                    card.classList.add("card-enter-active");
                    card.addEventListener("transitionend", () => {
                        card.classList.remove("card-enter", "card-enter-active");
                        card.classList.add("active");
                    }, { once: true });
                });
            });
        });

        // Re-attach cursor hover behavior for new cards
        setupCursorForNewCards();
    }

    // =====================================================================
    // 4. INFINITE SCROLL ENGINE
    // =====================================================================
    function loadNextBatch() {
        if (isLoading || allLoaded) return;

        const remaining = filteredProjects.slice(displayedCount, displayedCount + BATCH_SIZE);
        if (remaining.length === 0) {
            allLoaded = true;
            bottomLoader.classList.remove("is-visible");
            endOfList.classList.add("is-visible");
            return;
        }

        isLoading = true;
        bottomLoader.classList.add("is-visible");

        // Simulate a minimal network delay for perceived smoothness
        setTimeout(() => {
            renderBatch(remaining, displayedCount);
            displayedCount += remaining.length;
            isLoading = false;
            bottomLoader.classList.remove("is-visible");
            updateCount();

            // Check if we've loaded everything
            if (displayedCount >= filteredProjects.length) {
                allLoaded = true;
                endOfList.classList.add("is-visible");
            }
        }, 400);
    }

    function setupInfiniteScroll() {
        const scrollContainer = document.getElementById("main-scroll-container");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isLoading && !allLoaded) {
                        loadNextBatch();
                    }
                });
            },
            {
                root: scrollContainer,
                rootMargin: "300px",
                threshold: 0,
            }
        );

        observer.observe(sentinel);
    }

    // =====================================================================
    // 5. CATEGORY FILTERING
    // =====================================================================
    function getUniqueCategories() {
        const cats = new Set(allProjects.map((p) => p.category));
        return ["all", ...Array.from(cats)];
    }

    function buildFilterTabs() {
        const categories = getUniqueCategories();
        const categoryLabels = {
            all: "All",
            identity: "Identity",
            concept: "Concept",
            spatial: "Spatial",
        };

        // Desktop filter nav
        let navHTML = '<ul class="rlz-filter__list">';
        categories.forEach((cat, i) => {
            const label = categoryLabels[cat] || cat.charAt(0).toUpperCase() + cat.slice(1);
            const idx = String(i + 1).padStart(2, "0");
            const activeClass = cat === "all" ? " active" : "";
            navHTML += `
                <li class="rlz-filter__item">
                    <button class="filter-tab rlz-filter__btn${activeClass}" data-filter="${cat}">
                        <span class="rlz-filter__index">${idx}</span>
                        <span class="rlz-filter__label">${label}</span>
                    </button>
                </li>`;
        });
        navHTML += "</ul>";
        filterNav.innerHTML = navHTML;

        // Mobile drawer filter
        let mobileHTML = "";
        categories.forEach((cat) => {
            const label = categoryLabels[cat] || cat.charAt(0).toUpperCase() + cat.slice(1);
            if (cat === "all") {
                mobileHTML += `<button class="filter-tab rlz-filter-drawer__btn active" data-filter="all">All Archive</button>`;
            } else {
                mobileHTML += `<button class="filter-tab rlz-filter-drawer__btn" data-filter="${cat}">${label}</button>`;
            }
        });
        mobileFilterList.innerHTML = mobileHTML;
    }

    function applyFilter(filter) {
        currentFilter = filter;
        displayedCount = 0;
        allLoaded = false;
        endOfList.classList.remove("is-visible");

        // Update active states on all filter triggers
        document.querySelectorAll(".filter-tab").forEach((t) => t.classList.remove("active"));
        document.querySelectorAll(`[data-filter="${filter}"]`).forEach((t) => t.classList.add("active"));

        // Phase 1: Staggered exit
        const existingCards = grid.querySelectorAll(".tft-card");
        existingCards.forEach((card) => card.classList.add("is-filtering"));

        setTimeout(() => {
            // Clear grid
            grid.innerHTML = "";

            // Apply filter
            filteredProjects =
                filter === "all"
                    ? [...allProjects]
                    : allProjects.filter((p) => p.category === filter);

            // Load first batch
            loadNextBatch();
        }, 450);
    }

    function setupFilterListeners() {
        // Use event delegation on the document for dynamically created tabs
        document.addEventListener("click", (e) => {
            const tab = e.target.closest(".filter-tab");
            if (!tab) return;

            const filter = tab.getAttribute("data-filter");
            if (filter && filter !== currentFilter) {
                applyFilter(filter);
            }
        });
    }

    // =====================================================================
    // 6. COUNT DISPLAY
    // =====================================================================
    function updateCount() {
        if (!countEl) return;
        countEl.innerHTML = `
            Showing <span class="portfolio-count__num">${displayedCount}</span> 
            of <span class="portfolio-count__num">${filteredProjects.length}</span> Projects`;
    }

    // =====================================================================
    // 7. CURSOR RE-ATTACH (for dynamically added cards)
    // =====================================================================
    function setupCursorForNewCards() {
        const cursor = document.getElementById("tft-cursor");
        if (!cursor) return;

        document.querySelectorAll(".tft-card:not([data-cursor-bound])").forEach((card) => {
            card.setAttribute("data-cursor-bound", "true");
            card.addEventListener("mouseenter", () => {
                cursor.classList.add("is-viewing");
                cursor.textContent = "VIEW";
            });
            card.addEventListener("mouseleave", () => {
                cursor.classList.remove("is-viewing");
                cursor.textContent = "EXPLORE";
            });
        });
    }

    // =====================================================================
    // 8. INITIALIZATION
    // =====================================================================
    async function init() {
        // Show skeletons while fetching
        renderSkeletons(6);

        const projects = await fetchProjects();
        if (projects.length === 0) {
            pageLoader.classList.add("is-hidden");
            return;
        }

        filteredProjects = [...projects];

        // Build dynamic filter tabs
        buildFilterTabs();

        // Clear skeletons and load first batch
        grid.innerHTML = "";
        loadNextBatch();

        // Setup infinite scroll
        setupInfiniteScroll();

        // Setup filter click listeners
        setupFilterListeners();

        // Hide the page loader
        setTimeout(() => {
            pageLoader.classList.add("is-hidden");
        }, 600);
    }

    // --- BOOT ---
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
