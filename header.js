/**
 * header.js - Indestructible & Sticky Header for Mood Designz
 */

(function() {
    const headerHTML = `
    <div id="main-header">
        <div class="logo">
            <a href="index.html">
                <img src="logo.png" alt="Mood Designz Logo">
            </a>
        </div>
        <nav class="nav-links">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="portfolio.html">Portfolio</a>
        </nav>
        <div class="nav-actions">
            <a href="contact.html" class="primary-btn">Get in Touch</a>
            <button class="menu-toggle" aria-label="Open Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>

    <div id="menu-overlay" aria-hidden="true"></div>
    <nav id="menu-panel">
        <button class="close-btn" id="close-menu" aria-label="Close Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div class="menu-links">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="portfolio.html">Portfolio</a>
            <a href="contact.html">Contact</a>
        </div>
        <div class="menu-footer">
            <p>Mood Designz Agency</p>
            <div class="sidebar-socials">
                <a href="#">Instagram</a>
                <a href="#">Behance</a>
                <a href="#">LinkedIn</a>
            </div>
        </div>
    </nav>
    `;

    const inject = () => {
        if (document.getElementById('main-header')) return;

        // Inject at the VERY END of body to ensure it sits on top of all relative/absolute elements
        document.body.insertAdjacentHTML('beforeend', headerHTML);
        
        setupToggle();
    };

    const setupToggle = () => {
        const header = document.getElementById('main-header');
        if (!header) return;

        const menuBtn = header.querySelector('.menu-toggle');
        const closeBtn = document.getElementById('close-menu');
        const menuPanel = document.getElementById('menu-panel');
        const menuOverlay = document.getElementById('menu-overlay');

        if (menuBtn && menuPanel && closeBtn && menuOverlay) {
            const openMenu = (e) => {
                if(e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                menuPanel.classList.add('active');
                menuOverlay.classList.add('active');
                document.body.classList.add('menu-open');
                document.body.classList.remove('menu-active');
            };

            const closeMenu = (e) => {
                if(e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                menuPanel.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.classList.remove('menu-open');
                document.body.classList.remove('menu-active');
            };

            menuBtn.addEventListener('click', openMenu);
            closeBtn.addEventListener('click', closeMenu);
            menuOverlay.addEventListener('click', closeMenu);
        }
    };

    // Initial Injection
    inject();
    
    // Safety checks
    window.addEventListener('load', inject);
    document.addEventListener('DOMContentLoaded', inject);
    
    // Heartbeat check to ensure it stays there and stays sticky
    setInterval(() => {
        const h = document.getElementById('main-header');
        if (!h) {
            inject();
        } else {
            // Force it to be visible and fixed
            if (h.style.display === 'none') h.style.display = 'flex';
            if (window.getComputedStyle(h).position !== 'fixed') {
                h.style.setProperty('position', 'fixed', 'important');
            }
        }
    }, 500);

})();
