/**
 * ========================================================================
 * CASE STUDY ENGINE V2.0 — DYNAMIC PROJECT DETAIL + PARTICLE SYSTEM
 * Mood Designz (2026 Elite Spec)
 * 
 * Features:
 *   - Reads `?project=<id>` from the URL
 *   - Fetches project data from /data/projects.json
 *   - Populates hero, description, single centered image, and next project
 *   - Premium loading state with project name reveal
 *   - Scroll-triggered content reveal animations
 *   - Dynamic <title> and meta description
 *   - Particle system on the Next Masterpiece section
 * ========================================================================
 */
(function () {
    "use strict";

    const DATA_URL = "data/projects.json";

    // --- DOM REFS ---
    const loader = document.getElementById("casestudy-loader");
    const loaderName = document.getElementById("loader-project-name");

    // Hero
    const heroBg = document.getElementById("cs-hero-bg");
    const heroMeta = document.getElementById("cs-hero-meta");
    const heroCategory = document.getElementById("cs-hero-category");
    const heroName = document.getElementById("cs-hero-name");

    // Brief
    const briefCategory = document.getElementById("cs-brief-category");
    const briefTitle = document.getElementById("cs-brief-title");
    const briefDesc = document.getElementById("cs-brief-desc");

    // Gallery (single image)
    const galleryMain = document.getElementById("cs-gallery-main");

    // Next Project
    const nextLink = document.getElementById("cs-next-link");

    // Safety check: only run on the case study page
    if (!heroName) return;

    // =====================================================================
    // 1. URL PARAMETER PARSING
    // =====================================================================
    function getProjectIdFromURL() {
        const params = new URLSearchParams(window.location.search);
        return params.get("project");
    }

    // =====================================================================
    // 2. DATA FETCHING
    // =====================================================================
    async function fetchProjects() {
        try {
            const response = await fetch(DATA_URL);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        } catch (err) {
            console.error("[CaseStudyEngine] Failed to load projects:", err);
            return [];
        }
    }

    // =====================================================================
    // 3. CONTENT POPULATION
    // =====================================================================
    function populatePage(project, allProjects) {
        const categoryLabel = project.category.charAt(0).toUpperCase() + project.category.slice(1);

        // --- Update page title & meta ---
        document.title = `${project.name} — Case Study | Mood Designz`;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", `${project.name}: ${project.description.substring(0, 155)}...`);
        }

        // --- Hero ---
        heroBg.style.backgroundImage = `url('${project.coverImage}')`;
        heroMeta.textContent = project.meta;
        heroCategory.textContent = categoryLabel;
        heroName.textContent = project.name;

        // --- Brief ---
        briefCategory.textContent = categoryLabel;
        briefTitle.textContent = `${project.name} — A ${categoryLabel} Study`;
        briefDesc.innerHTML = project.description;

        // --- Single Case Study Image ---
        galleryMain.src = project.caseStudyImage;
        galleryMain.alt = `${project.name} — Case Study`;

        // --- Next Project ---
        const currentIndex = allProjects.findIndex((p) => p.id === project.id);
        const nextIndex = (currentIndex + 1) % allProjects.length;
        const nextProject = allProjects[nextIndex];

        nextLink.textContent = nextProject.name;
        nextLink.href = `casestudy.html?project=${nextProject.id}`;
    }

    // =====================================================================
    // 4. SCROLL REVEAL FOR DYNAMIC CONTENT
    // =====================================================================
    function setupScrollReveal() {
        const scrollContainer = document.getElementById("main-scroll-container");
        const revealTargets = document.querySelectorAll(".cs-reveal, .cs-image-showcase img");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-revealed");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: scrollContainer,
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        revealTargets.forEach((el) => observer.observe(el));
    }

    // =====================================================================
    // 5. PARTICLE SYSTEM (Coming-Soon Style)
    // =====================================================================
    function initParticleSystem() {
        const canvas = document.getElementById("cs-particle-canvas");
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        const section = document.getElementById("cs-next-section");
        let particles = [];
        const particleCount = 60;
        const mouse = { x: null, y: null, radius: 150 };

        function resizeCanvas() {
            const rect = section.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        }

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Mouse interaction
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        const directionX = dx / distance;
                        const directionY = dy / distance;
                        this.x -= directionX * force * 2;
                        this.y -= directionY * force * 2;
                    }
                }

                // Boundary check
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = "#c3ff06";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            resizeCanvas();
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(195, 255, 6, ${0.15 - distance / 1000})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
                particles[i].update();
                particles[i].draw();
            }

            requestAnimationFrame(animate);
        }

        // Track mouse relative to the section
        section.addEventListener("mousemove", (e) => {
            const rect = section.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        section.addEventListener("mouseleave", () => {
            mouse.x = null;
            mouse.y = null;
        });

        window.addEventListener("resize", () => {
            resizeCanvas();
            // Reset particles on resize to avoid clustering
            particles.forEach((p) => p.reset());
        });

        initParticles();
        animate();
    }

    // =====================================================================
    // 6. ERROR STATE
    // =====================================================================
    function showError(message) {
        const app = document.getElementById("project-app");
        app.innerHTML = `
            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;gap:2rem;padding:2rem;text-align:center;">
                <div style="width:80px;height:80px;border:2px solid rgba(255,255,255,0.08);border-radius:50%;display:flex;align-items:center;justify-content:center;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="12"/>
                        <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                </div>
                <p style="font-family:'Poppins',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.4em;text-transform:uppercase;color:rgba(255,255,255,0.3);">${message}</p>
                <a href="portfolio.html" style="font-family:'Poppins',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.4em;text-transform:uppercase;color:#c3ff06;border:1px solid rgba(195,255,6,0.3);padding:1rem 2rem;text-decoration:none;transition:all 0.3s ease;"
                   onmouseover="this.style.background='#c3ff06';this.style.color='#000'" 
                   onmouseout="this.style.background='transparent';this.style.color='#c3ff06'">
                    Back to Portfolio
                </a>
            </div>`;
    }

    // =====================================================================
    // 7. INITIALIZATION
    // =====================================================================
    async function init() {
        const projectId = getProjectIdFromURL();

        // If no project ID, redirect to portfolio
        if (!projectId) {
            showError("No project specified");
            loader.classList.add("is-hidden");
            return;
        }

        // Show the project name in the loader
        if (loaderName) {
            loaderName.textContent = projectId.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
        }

        const allProjects = await fetchProjects();
        if (allProjects.length === 0) {
            showError("Unable to load project data");
            loader.classList.add("is-hidden");
            return;
        }

        const project = allProjects.find((p) => p.id === projectId);
        if (!project) {
            showError("Project not found");
            loader.classList.add("is-hidden");
            return;
        }

        // Populate the page
        populatePage(project, allProjects);

        // Wait for the hero image to load for a seamless reveal
        const heroImg = new Image();
        heroImg.src = project.coverImage;

        const onReady = () => {
            // Setup reveal animations
            setupScrollReveal();

            // Initialize particle system
            initParticleSystem();

            // Hide the loader
            setTimeout(() => {
                loader.classList.add("is-hidden");
            }, 800);
        };

        heroImg.onload = onReady;
        heroImg.onerror = onReady; // Still show the page even if image fails

        // Fallback timeout in case the image takes too long
        setTimeout(onReady, 4000);
    }

    // --- BOOT ---
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
