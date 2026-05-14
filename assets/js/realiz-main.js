/**
 * Realiz - Core Logic & Modules
 *
 * @author: ThemeWisdom
 * @version: 1.0.0
 * 
 */

document.addEventListener('DOMContentLoaded', function () {
    var current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#menu-panel a[href]').forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === current) {
            link.classList.add('is-current-page');
            link.setAttribute('aria-current', 'page');
        }
    });
    document.querySelectorAll('[data-current-year]').forEach(function (el) {
        el.textContent = new Date().getFullYear();
    });
});
(function () {
    var params = new URLSearchParams(window.location.search);
    var status = params.get('status');
    var form = document.getElementById('contact-form');
    var successMsg = document.getElementById('form-success');
    if (!form || !successMsg || !status) return;
    if (status === 'success') {
        form.classList.add('hidden');
        successMsg.classList.remove('hidden');
        successMsg.classList.add('active');
    } else if (status === 'invalid') {
        alert('Please complete all required fields with a valid email address.');
    } else if (status === 'error') {
        alert('Your hosting server could not send the message. Please verify PHP mail settings or use a third-party form service.');
    }
})();



(function () {
    function init() {
        if (window.lucide && lucide.createIcons) { lucide.createIcons(); }
        if (!document.getElementById('realiz-global-enhancements')) {
            var style = document.createElement('style');
            style.id = 'realiz-global-enhancements';
            style.textContent = '' +
                '' +
                '#menu-panel{transition:transform .82s cubic-bezier(.22,1,.36,1),opacity .45s ease !important;will-change:transform;}' +
                '#menu-panel>div>ul>li>div{position:relative;overflow:hidden;transition:transform .35s ease,padding-left .35s ease;}' +
                '#menu-panel>div>ul>li>div::before{content:"";position:absolute;inset:10px -24px;background:linear-gradient(90deg,rgba(212,245,76,.14),transparent 72%);opacity:0;transform:translateX(-26px);transition:transform .35s ease,opacity .35s ease;pointer-events:none;}' +
                '#menu-panel>div>ul>li>div:hover{transform:translateX(8px);padding-left:10px;}' +
                '#menu-panel>div>ul>li>div:hover::before{opacity:1;transform:translateX(0);}' +
                '#menu-panel ul[id$="-submenu"]{transition:max-height .52s cubic-bezier(.22,1,.36,1),opacity .32s ease !important;}' +
                '#menu-panel ul[id$="-submenu"] a{display:inline-flex;align-items:center;gap:.8rem;transition:color .28s ease,transform .28s ease,letter-spacing .28s ease;}' +
                '#menu-panel ul[id$="-submenu"] a::before{content:"";width:18px;height:1px;background:rgba(212,245,76,.35);transform:scaleX(0);transform-origin:left;transition:transform .28s ease;}' +
                '#menu-panel ul[id$="-submenu"] a:hover{color:#fff;transform:translateX(-6px);letter-spacing:.02em;}' +
                '#menu-panel ul[id$="-submenu"] a:hover::before{transform:scaleX(1);}' +
                '.realiz-social-wrap{position:relative;padding-top:10px;}' +
                '.realiz-social-wrap::after{content:"";position:absolute;left:50%;transform:translateX(-50%);bottom:54px;width:132px;height:200px;pointer-events:auto;background:transparent;}' +
                '.realiz-social-stack{bottom:92px !important;padding-bottom:10px !important;gap:12px !important;opacity:0;transform:translateY(30px) scale(0.9);transition:opacity .45s cubic-bezier(.19,1,.22,1),transform .55s cubic-bezier(.19,1,.22,1) !important;pointer-events:auto !important;}' +
                '.realiz-social-wrap:hover .realiz-social-stack,.realiz-social-wrap:focus-within .realiz-social-stack,.realiz-social-wrap.is-social-open .realiz-social-stack{opacity:1;transform:translateY(0) scale(1);}' +
                '.realiz-social-stack .social-item{opacity:1 !important;transition:all .45s cubic-bezier(.19,1,.22,1) !important;position:relative;display:flex;justify-content:center;transform:translateY(20px);opacity:0 !important;}' +
                '.realiz-social-wrap:hover .social-item,.realiz-social-wrap:focus-within .social-item,.realiz-social-wrap.is-social-open .social-item{transform:translateY(0);opacity:1 !important;}' +
                '.realiz-social-stack .social-item:nth-child(1){transition-delay:0s !important;}' +
                '.realiz-social-stack .social-item:nth-child(2){transition-delay:.05s !important;}' +
                '.realiz-social-stack .social-item:nth-child(3){transition-delay:.1s !important;}' +
                '.realiz-social-stack .social-item:nth-child(4){transition-delay:.15s !important;}' +
                '.realiz-social-stack .social-item:nth-child(5){transition-delay:.2s !important;}' +
                '.realiz-social-stack .social-item a{display:inline-flex;align-items:center;justify-content:center;min-width:48px;height:32px;padding:0 14px;border-radius:999px;background:rgba(244,247,243,.9);backdrop-filter:blur(8px);border:1px solid rgba(9,64,48,.08);box-shadow:0 8px 15px rgba(9,64,48,.05);color:#094030;letter-spacing:.08em;transition:all .3s cubic-bezier(.19,1,.22,1);will-change:transform,background-color;}' +
                '.realiz-social-stack .social-item a:hover{transform:translateY(-5px) scale(1.1);background:#c3ff06;color:#094030;border-color:#c3ff06;box-shadow:0 15px 30px rgba(212,245,76,.25);}' +
                '.realiz-social-trigger{position:relative;overflow:hidden;transition:transform .45s cubic-bezier(.19,1,.22,1),background-color .32s ease,color .32s ease !important;}' +
                '.realiz-social-trigger::before{content:"";position:absolute;inset:7px;border-radius:999px;border:1px dashed rgba(212,245,76,.3);opacity:0;transform:scale(.8);transition:opacity .35s ease,transform .35s cubic-bezier(.19,1,.22,1);}' +
                '.realiz-social-wrap:hover .realiz-social-trigger,.realiz-social-wrap:focus-within .realiz-social-trigger,.realiz-social-wrap.is-social-open .realiz-social-trigger{transform:translateY(-6px) rotate(8deg);box-shadow:0 20px 40px rgba(9,64,48,.2);}' +
                '.realiz-social-wrap:hover .realiz-social-trigger::before,.realiz-social-wrap:focus-within .realiz-social-trigger::before,.realiz-social-wrap.is-social-open .realiz-social-trigger::before{opacity:1;transform:scale(1);}' +
                '.realiz-social-caption{letter-spacing:.18em !important;}' +
                '.realiz-wordmark{display:block;line-height:1;margin:0;padding:0 0 0 .18em;}' +
                '.realiz-wordmark-vertical{display:block;font-size:4rem !important;line-height:1;margin:0;padding:0 0 0 .12em;}';
            document.head.appendChild(style);
        }
        var menuPanel = document.getElementById('menu-panel');
        var toggles = document.querySelectorAll('.menu-toggle');
        if (menuPanel && toggles.length) {
            var open = false;
            window.toggleMenu = function () {
                open = !open;
                if (open) {
                    menuPanel.style.transform = 'translateX(0)';
                    document.body.classList.add('menu-active');
                    menuPanel.classList.add('menu-open');
                } else {
                    menuPanel.style.transform = 'translateX(-100%)';
                    document.body.classList.remove('menu-active');
                    menuPanel.classList.remove('menu-open');
                }
                toggles.forEach(function (btn) { btn.classList.toggle('menu-open', open); });
            };
            toggles.forEach(function (btn) {
                btn.onclick = function (e) { e.preventDefault(); window.toggleMenu(); };
            });
        }
        var ids = ['home', 'work', 'about', 'journal'];
        window.toggleAccordion = function (activeId) {
            ids.forEach(function (id) {
                var submenu = document.getElementById(id + '-submenu');
                var icon = document.getElementById(id + '-icon');
                if (!submenu) return;
                var shouldOpen = id === activeId && (submenu.style.maxHeight === '' || submenu.style.maxHeight === '0px');
                submenu.style.maxHeight = shouldOpen ? (submenu.scrollHeight + 'px') : '0px';
                submenu.style.opacity = shouldOpen ? '1' : '0';
                if (icon) icon.style.transform = shouldOpen ? 'rotate(180deg)' : 'rotate(0deg)';
            });
        };
        var current = (location.pathname.split('/').pop() || 'index.html');
        var group = 'home';
        if (/works|services|project-detail/.test(current)) group = 'work';
        else if (/about|contact/.test(current)) group = 'about';
        else if (/blog|single-post/.test(current)) group = 'journal';


        [].slice.call(document.querySelectorAll('aside .relative.group')).forEach(function (wrap) {
            if (!wrap.querySelector('.social-item')) return;
            wrap.classList.add('realiz-social-wrap');
            var stack = wrap.querySelector('.absolute');
            var trigger = wrap.querySelector('div[class*="w-[58px]"][class*="h-[58px]"]');
            if (stack) { stack.classList.add('realiz-social-stack'); }
            if (trigger) { trigger.classList.add('realiz-social-trigger'); }
            var closeTimer = null;
            function openSocial() {
                clearTimeout(closeTimer);
                wrap.classList.add('is-social-open');
            }
            function scheduleClose() {
                clearTimeout(closeTimer);
                closeTimer = setTimeout(function () { wrap.classList.remove('is-social-open'); }, 260);
            }
            wrap.addEventListener('mouseenter', openSocial);
            wrap.addEventListener('mouseleave', scheduleClose);
            if (stack) {
                stack.addEventListener('mouseenter', openSocial);
                stack.addEventListener('mouseleave', scheduleClose);
            }
            if (trigger) {
                trigger.addEventListener('focusin', openSocial);
            }
        });
        document.querySelectorAll('aside .social-item a').forEach(function (link) {
            var txt = link.textContent.trim();
            var titleMap = { 'In.': 'Instagram', 'Be.': 'Behance', 'Li.': 'LinkedIn', 'Gh.': 'Github', 'Dr.': 'Dribbble' };
            if (titleMap[txt]) link.setAttribute('title', titleMap[txt]);
        });
        document.querySelectorAll('aside span.text-vertical').forEach(function (el) {
            if (/Archive/i.test(el.textContent)) { el.innerHTML = '&copy; 2026 Realiz'; el.classList.add('realiz-social-caption'); }
        });
        document.querySelectorAll('header span.font-serif.text-3xl.leading-none').forEach(function (el) {
            if (el.textContent.trim().toLowerCase() === 'realiz') { el.classList.add('realiz-wordmark'); }
        });
        document.querySelectorAll('aside span.text-vertical.font-serif.text-7xl.leading-none').forEach(function (el) {
            if (el.textContent.trim().toLowerCase() === 'realiz') { el.classList.add('realiz-wordmark-vertical'); }
        });
        window.realizScrollTop = function () {
            var seen = [];
            var nodes = [document.scrollingElement, document.documentElement, document.body, document.getElementById('main-scroll-container')].concat([].slice.call(document.querySelectorAll('.overflow-y-auto, .no-scrollbar, main, [style*="overflow-y:auto"], [style*="overflow-y: auto"]')));
            nodes.forEach(function (sc) {
                if (!sc || seen.indexOf(sc) !== -1) return;
                seen.push(sc);
                try {
                    if (typeof sc.scrollTo === 'function') {
                        sc.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                } catch (e) { }
            });
            try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { }
        };
        document.querySelectorAll('button, a').forEach(function (el) {
            var txt = (el.textContent || '').trim();
            var icon = el.querySelector('[data-lucide="arrow-up"]');
            var isBackToTop = el.classList.contains('tft-back-to-top') || icon || /back to top/i.test(txt);

            if (isBackToTop) {
                el.addEventListener('click', function (e) {
                    e.preventDefault();
                    window.realizScrollTop();
                    return false;
                });
            }
        });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();


(function () {
    function finalPolish() {
        // Fix: Properly escape square brackets in selectors for JS querySelectorAll
        document.querySelectorAll('.rlz-brand-logo-box, .w-\\[70px\\].h-full.bg-brand-lime, .w-\\[50px\\].h-\\[50px\\].bg-brand-lime').forEach(function (box) {
            if (box.querySelector('.realiz-logo-mark')) return;
            if ((box.textContent || '').trim().length === 0 && !box.querySelector('img,svg,i,span')) {
                var mark = document.createElement('span');
                mark.className = 'realiz-logo-mark';
                mark.textContent = 'r';
                box.appendChild(mark);
            }
        });
        document.querySelectorAll('a').forEach(function (a) {
            var c = window.getComputedStyle(a).color;
            if (c === 'rgb(0, 0, 238)' || c === 'rgb(0, 0, 255)') a.style.color = 'inherit';
        });
        document.querySelectorAll('#menu-panel ul, #menu-panel li').forEach(function (el) { el.style.listStyle = 'none'; });


        var img = document.getElementById('tab-img');
        var home2IconWrap = img && img.parentElement.querySelector('.absolute.-bottom-8.-right-8');
        if (home2IconWrap && !home2IconWrap.querySelector('i,svg')) {
            home2IconWrap.innerHTML = '<i class="w-10 h-10 text-brand-sidebar" data-lucide="arrow-up-right"></i>';
            if (window.lucide && lucide.createIcons) { lucide.createIcons(); }
        }
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', finalPolish); else finalPolish();
})();



/**
 * Template Module: ABOUT-ALT
 */
if (document.body.classList.contains('tft-page-about-alt')) {
    (function () {
        // Initialize Lucide Icons
        lucide.createIcons();

        // --- MENU LOGIC ---
        const menuToggleBtns = document.querySelectorAll('.menu-toggle');
        const menuPanel = document.getElementById('menu-panel');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
            menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
        }
        menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

        // --- ACCORDION (Menu) ---
        const accordionItems = ['home', 'work', 'about', 'journal'];
        function toggleAccordion(activeId) {
            accordionItems.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosed = submenu.style.maxHeight === "0px" || submenu.style.maxHeight === "";
                    submenu.style.maxHeight = isClosed ? submenu.scrollHeight + "px" : "0px";
                    submenu.style.opacity = isClosed ? "1" : "0";
                    if (icon) icon.style.transform = isClosed ? "rotate(180deg)" : "rotate(0deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        }


        // --- REVEAL ANIMATIONS ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

        // --- PARALLAX & PROGRESS ---
        const contentArea = document.querySelector('.absolute.overflow-y-auto');
        if (contentArea) {
            const bg = document.querySelector('.parallax-bg');
            const fills = ['fill-1', 'fill-2'];

            contentArea.addEventListener('scroll', () => {
                const scrolled = contentArea.scrollTop;

                // Parallax
                if (bg) bg.style.transform = `translateY(${scrolled * 0.4}px) scale(1.1)`;

                // Step Progress
                fills.forEach(id => {
                    const fill = document.getElementById(id);
                    if (!fill) return;
                    const parent = fill.closest('.relative');
                    const rect = parent.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    if (rect.top < windowHeight && rect.bottom > 0) {
                        const progress = Math.min(100, Math.max(0, (windowHeight - rect.top) / (windowHeight / 2) * 100));
                        fill.style.height = `${progress}%`;
                    }
                });
            });
        }

    })();
}


/**
 * Template Module: ABOUT-V2
 */
if (document.body.classList.contains('tft-page-about-v2')) {
    (function () {
        "use strict";

        const TFT_Theme = {
            init: () => {
                lucide.createIcons();
                TFT_Theme.setupReveal();
                TFT_Theme.setupParallax();
            },

            setupReveal: () => {
                const scrollContainer = document.getElementById('main-scroll-container');
                const observerOptions = {
                    threshold: 0.1,
                    root: scrollContainer
                };
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('active');
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);
                document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
            },

            setupParallax: () => {
                const scrollContainer = document.getElementById('main-scroll-container');
                scrollContainer.addEventListener('scroll', () => {
                    const scrolled = scrollContainer.scrollTop;
                    const parallax = document.querySelector('.parallax-bg');
                    if (parallax) {
                        parallax.style.transform = `translateY(${scrolled * 0.4}px)`;
                    }
                });
            }
        };

        const menuToggleBtns = document.querySelectorAll('.menu-toggle');
        const menuPanel = document.getElementById('menu-panel');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
            menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
        }
        menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

        // --- ACCORDION (Menu) ---
        const accordionItems = ['home', 'work', 'about', 'journal'];
        function toggleAccordion(activeId) {
            accordionItems.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosed = submenu.style.maxHeight === "0px" || submenu.style.maxHeight === "";
                    submenu.style.maxHeight = isClosed ? submenu.scrollHeight + "px" : "0px";
                    submenu.style.opacity = isClosed ? "1" : "0";
                    if (icon) icon.style.transform = isClosed ? "rotate(180deg)" : "rotate(0deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        }


        document.addEventListener('DOMContentLoaded', TFT_Theme.init);

    })();
}


/**
 * Template Module: ABOUT
 */
if (document.body.classList.contains('tft-page-about')) {
    (function () {
        // Initialize Lucide Icons
        lucide.createIcons();

        // --- MENU LOGIC ---
        const menuToggleBtns = document.querySelectorAll('.menu-toggle');
        const menuPanel = document.getElementById('menu-panel');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
            menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
        }
        menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

        // --- ACCORDION ---
        const accordionItems = ['home', 'work', 'about', 'journal'];
        function toggleAccordion(activeId) {
            accordionItems.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosed = submenu.style.maxHeight === "0px" || submenu.style.maxHeight === "";
                    submenu.style.maxHeight = isClosed ? submenu.scrollHeight + "px" : "0px";
                    submenu.style.opacity = isClosed ? "1" : "0";
                    if (icon) icon.style.transform = isClosed ? "rotate(180deg)" : "rotate(0deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        }


    })();
}


/**
 * Template Module: BLOG
 */
if (document.body.classList.contains('tft-page-blog')) {
    (function () {
        "use strict";

        const TFT_Theme = {
            init: () => {
                lucide.createIcons();
                TFT_Theme.setupReveal();
            },

            setupReveal: () => {
                const scrollContainer = document.getElementById('main-scroll-container');
                const observerOptions = {
                    threshold: 0.1,
                    root: scrollContainer
                };
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('active');
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);
                document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
            }
        };

        const menuToggleBtns = document.querySelectorAll('.menu-toggle');
        const menuPanel = document.getElementById('menu-panel');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
            menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
        }
        menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

        // --- ACCORDION (Menu) ---
        const accordionItems = ['home', 'work', 'about', 'journal'];
        function toggleAccordion(activeId) {
            accordionItems.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosed = submenu.style.maxHeight === "0px" || submenu.style.maxHeight === "";
                    submenu.style.maxHeight = isClosed ? submenu.scrollHeight + "px" : "0px";
                    submenu.style.opacity = isClosed ? "1" : "0";
                    if (icon) icon.style.transform = isClosed ? "rotate(180deg)" : "rotate(0deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        }

        document.addEventListener('DOMContentLoaded', TFT_Theme.init);

    })();
}


/**
 * Template Module: CONTACT
 */
if (document.body.classList.contains('tft-page-contact')) {
    (function () {
        // Initialize Lucide Icons
        lucide.createIcons();

        // --- MENU LOGIC ---
        const menuToggleBtns = document.querySelectorAll('.menu-toggle');
        const menuPanel = document.getElementById('menu-panel');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
            menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
        }
        menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

        // --- ACCORDION ---
        const accordionItems = ['home', 'work', 'about', 'journal'];
        function toggleAccordion(activeId) {
            accordionItems.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosed = submenu.style.maxHeight === "0px" || submenu.style.maxHeight === "";
                    submenu.style.maxHeight = isClosed ? submenu.scrollHeight + "px" : "0px";
                    submenu.style.opacity = isClosed ? "1" : "0";
                    if (icon) icon.style.transform = isClosed ? "rotate(180deg)" : "rotate(0deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        }

        // --- REVEAL ANIMATIONS ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

        // --- BERLIN CLOCK ---
        const clockVal = document.getElementById('time-val');
        if (clockVal) {
            setInterval(() => {
                const now = new Date();
                const options = { timeZone: 'Europe/Berlin', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
                clockVal.innerText = now.toLocaleTimeString('en-GB', options);
            }, 1000);
        }

    })();
}


/**
 * Template Module: HOME-7
 */
if (document.body.classList.contains('tft-page-home-7')) {
    (function () {
        lucide.createIcons();

        // --- MENU LOGIC ---
        const menuToggleBtns = document.querySelectorAll('.menu-toggle');
        const menuPanel = document.getElementById('menu-panel');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
            menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
        }
        menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

        // --- ACCORDION (Menu) ---
        const menuAccordions = ['home', 'work', 'about'];
        function toggleAccordion(activeId) {
            menuAccordions.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosed = submenu.style.maxHeight === "0px" || submenu.style.maxHeight === "";
                    submenu.style.maxHeight = isClosed ? submenu.scrollHeight + "px" : "0px";
                    submenu.style.opacity = isClosed ? "1" : "0";
                    if (icon) icon.style.transform = isClosed ? "rotate(180deg)" : "rotate(0deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        }


        // --- SLIDER LOGIC ---
        const slides = [
            {
                title: 'Innovate<br><i class="font-light italic text-brand-lime">Don\'t</i> imitate',
                img: 'assets/img/s4.png'
            },
            {
                title: 'Design<br><i class="font-light italic text-brand-lime">With</i> intent',
                img: 'assets/img/s6.jpg'
            },
            {
                title: 'Vision<br><i class="font-light italic text-brand-lime">Beyond</i> limits',
                img: 'assets/img/s7.png'
            },
            {
                title: 'Archive<br><i class="font-light italic text-brand-lime">Of</i> creativity',
                img: 'assets/img/s4.png'
            }
        ];

        let currentIdx = 0;
        let isAnimating = false;

        const img = document.getElementById('slide-img');
        const title = document.getElementById('slide-title');
        const avPrev = document.getElementById('avatar-prev');
        const avNext = document.getElementById('avatar-next');

        function updateSlide(dir = 0) {
            if (isAnimating && dir !== 0) return;
            isAnimating = true;

            currentIdx = (currentIdx + dir + slides.length) % slides.length;
            const data = slides[currentIdx];

            // Indices for thumbnails
            const pIdx = (currentIdx - 1 + slides.length) % slides.length;
            const nIdx = (currentIdx + 1) % slides.length;

            if (dir !== 0) {
                img.style.opacity = '0';
                img.style.transform = dir > 0 ? 'translateX(30px) scale(1.1)' : 'translateX(-30px) scale(1.1)';
                title.style.opacity = '0';
                title.style.transform = 'translateY(40px) skewX(-10deg)';
                title.style.filter = 'blur(10px)';
            }

            setTimeout(() => {
                img.style.backgroundImage = `url('${data.img}')`;
                title.innerHTML = data.title;
                avPrev.src = slides[pIdx].img;
                avNext.src = slides[nIdx].img;

                img.style.opacity = '1';
                img.style.transform = 'translateX(0) scale(1)';
                title.style.opacity = '1';
                title.style.transform = 'translateY(0) skewX(0)';
                title.style.filter = 'blur(0)';

                setTimeout(() => { isAnimating = false; }, 1000);
            }, dir === 0 ? 0 : 800);
        }

        // Initialize
        updateSlide(0);

        const nextBtn = document.querySelector('.btn-next');
        const prevBtn = document.querySelector('.btn-prev');

        if (nextBtn) nextBtn.addEventListener('click', () => updateSlide(1));
        if (prevBtn) prevBtn.addEventListener('click', () => updateSlide(-1));

        window.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaY) < 50) return;
            if (e.deltaY > 0) updateSlide(1);
            else updateSlide(-1);
        });

        // Click on arch to next
        const archContainer = document.querySelector('.tft-arch-container');
        if (archContainer) archContainer.addEventListener('click', () => updateSlide(1));

        updateSlide(0);

    })();
}


/**
 * Template Module: HOME-2
 */
if (document.body.classList.contains('tft-page-home-2')) {
    (function () {


        lucide.createIcons();

        // --- MENU LOGIC ---
        const menuToggleBtns = document.querySelectorAll('.menu-toggle');
        const menuPanel = document.getElementById('menu-panel');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
            menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
        }
        menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

        // --- ACCORDION ---
        const accordionItems = ['home', 'work', 'about', 'journal'];
        function toggleAccordion(activeId) {
            accordionItems.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosed = submenu.style.maxHeight === "0px" || submenu.style.maxHeight === "";
                    submenu.style.maxHeight = isClosed ? submenu.scrollHeight + "px" : "0px";
                    submenu.style.opacity = isClosed ? "1" : "0";
                    if (icon) icon.style.transform = isClosed ? "rotate(180deg)" : "rotate(0deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        }


        // Slider 9.0: Vanguard Refined HUD (Fluid Transition + Lime Glow)
        const slides = [
            { titleTop: "Vision.", titleBottom: "Beyond Limits.", img: "assets/img/project_vision.png", kicker: "Innovative Perspective" },
            { titleTop: "Editorial.", titleBottom: "Mastery Flow.", img: "assets/img/project_editorial.png", kicker: "Strategic Narrative" },
            { titleTop: "Digital.", titleBottom: "Core Systems.", img: "assets/img/project_digital.png", kicker: "Vanguard Tech" },
            { titleTop: "Kinetic.", titleBottom: "Energy Shift.", img: "assets/img/project_kinetic.png", kicker: "Motion Excellence" }
        ];
        let cur = 0;
        const hTitle = document.getElementById('hero-title');
        const hImg = document.getElementById('hero-img');
        const hKicker = document.querySelector('.tft-h2-vanguard__kicker-text');
        const hHero = document.querySelector('.tft-h2-vanguard');

        function updateSlider(idx) {
            if (!hTitle || !hImg || !hHero) return;

            const shutter = hImg.parentElement;
            shutter.classList.add('is-wiping');

            // Kill global reveal state to reset all children
            hHero.classList.remove('on-reveal');
            void hHero.offsetHeight; // Force reflow

            setTimeout(() => {
                cur = (idx + slides.length) % slides.length;
                const s = slides[cur];

                hTitle.innerHTML = `
                    <span class="tft-h2-vanguard__title-line"><span class="reveal-inner">${s.titleTop}</span></span>
                    <span class="tft-h2-vanguard__title-line tft-h2-vanguard__title-line--serif"><span class="reveal-inner tft-delay-100">${s.titleBottom}</span></span>
                `;
                hImg.src = s.img;
                if (hKicker) hKicker.innerText = s.kicker;

                shutter.classList.remove('is-wiping');

                // Re-trigger global reveal with absolute clean state
                setTimeout(() => {
                    hHero.classList.add('on-reveal');
                }, 100);
            }, 600);
        }

        // Sub-Parallax
        const hTopo = document.querySelector('.tft-h2-vanguard__topo');
        window.addEventListener('mousemove', (e) => {
            if (!hHero || !hTopo) return;
            const x = (e.clientX / window.innerWidth - 0.5) * 40;
            const y = (e.clientY / window.innerHeight - 0.5) * 40;
            hTopo.style.transform = `translate(${x}px, ${y}px)`;
        });

        // Trigger Reveal
        setTimeout(() => {
            if (hHero) hHero.classList.add('on-reveal');
        }, 300);

        document.getElementById('slider-prev')?.addEventListener('click', () => updateSlider(cur - 1));
        document.getElementById('slider-next')?.addEventListener('click', () => updateSlider(cur + 1));

        // Tabs Logic - Enhanced with Digits
        const tabBtns = document.querySelectorAll('.tft-tab');
        const tabContent = document.getElementById('tab-content');
        const tabImg = document.getElementById('tab-img');
        const tabDigit = document.getElementById('tab-digit');
        const tabData = [
            { digit: "01", text: "We believe in a non-linear approach to creative problems. Our process is a dance between precision and intuition.", img: "assets/img/s6.jpg" },
            { digit: "02", text: "Our culture is rooted in radical collaboration. We don't just work for you, we work with you as partners in creation.", img: "assets/img/s7.png" },
            { digit: "03", text: "Legacy isn't about the past, it's about what we build today that will stand the test of time and influence tomorrow.", img: "assets/img/s8.png" }
        ];

        tabBtns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('tft-tab-active'));
                btn.classList.add('tft-tab-active');
                tabContent.style.opacity = 0;
                tabImg.style.opacity = 0;
                tabDigit.style.opacity = 0;
                tabDigit.style.transform = "translateX(50px)";

                setTimeout(() => {
                    tabContent.innerHTML = tabData[i].text;
                    tabImg.src = tabData[i].img;
                    tabDigit.innerText = tabData[i].digit;

                    tabContent.style.opacity = 1;
                    tabContent.style.transform = "translateY(0)";

                    tabImg.style.opacity = 1;
                    tabImg.style.transform = "scale(1)";

                    tabDigit.style.opacity = 0.03;
                    tabDigit.style.transform = "translateX(0)";
                }, 400);
            });
        });

        // --- STATS COUNTER ---
        function animateCounter(el) {
            const target = parseInt(el.getAttribute('data-target'), 10);
            let count = 0;
            const duration = 2000;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out expo
                const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

                el.innerText = Math.floor(easedProgress * target);

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    el.innerText = target;
                }
            }
            requestAnimationFrame(update);
        }

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    animateCounter(entry.target);
                }
            });
        }, { threshold: 0.5 });
        document.querySelectorAll('.tft-counter').forEach(el => counterObserver.observe(el));

        // Accordion Logic - Phase 4 Grid
        document.querySelectorAll('.tft-acc-trigger').forEach(trigger => {
            trigger.addEventListener('click', () => {
                const parent = trigger.closest('.tft-acc-item');
                const isActive = parent.classList.contains('tft-acc-active');

                // Close others in BOTH columns
                document.querySelectorAll('.tft-acc-item').forEach(item => {
                    item.classList.remove('tft-acc-active');
                });

                if (!isActive) {
                    parent.classList.add('tft-acc-active');
                }
            });
        });

        // Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('tft-reveal--active');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.tft-reveal').forEach(el => observer.observe(el));

    })();
}


/**
 * Template Module: HOME-3
 */
if (document.body.classList.contains('tft-page-home-3')) {
    (function () {


        // Initialize Lucide Icons
        lucide.createIcons();

        // --- MENU LOGIC ---
        const menuToggleBtns = document.querySelectorAll('.menu-toggle');
        const menuPanel = document.getElementById('menu-panel');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
            menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
        }
        menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

        // --- ACCORDION (Menu) ---
        const accordionItems = ['home', 'work', 'about', 'journal'];
        function toggleAccordion(activeId) {
            accordionItems.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosed = submenu.style.maxHeight === "0px" || submenu.style.maxHeight === "";
                    submenu.style.maxHeight = isClosed ? submenu.scrollHeight + "px" : "0px";
                    submenu.style.opacity = isClosed ? "1" : "0";
                    if (icon) icon.style.transform = isClosed ? "rotate(180deg)" : "rotate(0deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        }


        // --- VIEW SWITCHING LOGIC (SPA) ---
        let currentView = document.querySelector('main').id;
        function switchView(viewId) {
            if (currentView === viewId) return;
            if (isMenuOpen) toggleMenu();
            const oldEl = document.getElementById(currentView);
            oldEl.classList.replace('opacity-100', 'opacity-0');
            oldEl.classList.replace('scale-100', 'scale-95');
            oldEl.classList.replace('pointer-events-auto', 'pointer-events-none');
            oldEl.style.zIndex = '10';

            currentView = viewId;
            const newEl = document.getElementById(currentView);
            newEl.classList.replace('opacity-0', 'opacity-100');
            newEl.classList.replace('scale-95', 'scale-100');
            newEl.classList.replace('pointer-events-none', 'pointer-events-auto');
            newEl.style.zIndex = '20';
        }

        // --- HOME 8 SLIDER LOGIC ---
        function updateH8Slide(el, imgUrl) {
            const items = document.querySelectorAll('.h8-nav-item');
            items.forEach(i => i.classList.remove('active'));
            el.classList.add('active');

            const bg = document.getElementById('h8-bg');
            bg.style.opacity = 0;
            bg.style.transform = 'scale(1.1)';
            setTimeout(() => {
                bg.style.backgroundImage = `url('${imgUrl}')`;
                bg.style.opacity = 1;
                bg.style.transform = 'scale(1.05)';
            }, 500);
        }

        // --- HOME 6 CURSOR LOGIC RE-CONSOLIDATED IN HOME-6 MODULE ---

        // --- HOME 4 COLUMNS LOGIC ---
        const h4Cols = document.querySelectorAll('.h4-col');
        h4Cols.forEach(col => {
            col.addEventListener('mouseenter', () => {
                h4Cols.forEach(c => c.classList.remove('pre-active'));
            });
        });

        // --- SLIDER LOGIC (HOME 1) ---
        const slides = [
            {
                titleTop: "Creative", titleBottom: "Process",
                category: "Branding",
                imgLeft: "assets/img/cover-2.png",
                imgRight: "assets/img/cover-3.png"
            },
            {
                titleTop: "Design", titleBottom: "Matrix",
                category: "Web App",
                imgLeft: "assets/img/cover-2.png",
                imgRight: "assets/img/clean-thumb-6.png"
            },
            {
                titleTop: "Innovate", titleBottom: "Boldly",
                category: "App Design",
                imgLeft: "assets/img/about_hero.png",
                imgRight: "assets/img/cover-1.png"
            },
            {
                titleTop: "Winter", titleBottom: "Frost",
                category: "Photography",
                imgLeft: "assets/img/clean-thumb-5.png",
                imgRight: "assets/img/cover-4.png"
            }
        ];

        let currentSlide = 0;
        const totalSlides = slides.length;
        let isAnimating = false;

        const fadeOverlay = document.getElementById('fade-overlay');
        const imgLeft = document.getElementById('img-left');
        const imgRight = document.getElementById('img-right');
        const titleTop = document.getElementById('title-top');
        const titleBottom = document.getElementById('title-bottom');
        const sliderIndex = document.getElementById('slider-index');
        const sliderCategory = document.getElementById('slider-category');
        const sliderAction = document.querySelector('.tft-slider-action');
        const badgeCurrent = document.getElementById('badge-current');
        const progCurrent = document.getElementById('prog-current');
        const progTotal = document.getElementById('prog-total');
        const progBar = document.getElementById('prog-bar');
        const dotsContainer = document.getElementById('pagination-dots');
        const sliderContainer = document.getElementById('slider-container');

        if (progTotal) progTotal.innerText = `0${totalSlides}`;

        function renderDots() {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                if (i === currentSlide) {
                    dot.className = "w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-brand-sidebar ring-[1.5px] ring-offset-[1.5px] ring-brand-sidebar transition-all duration-300";
                } else {
                    dot.className = "w-2 md:w-2.5 h-2 md:h-2.5 rounded-full border border-gray-400 cursor-pointer transition-all duration-300 hover:border-brand-sidebar";
                    if (typeof goToSlide !== 'undefined') dot.onclick = () => goToSlide(i);
                }
                dotsContainer.appendChild(dot);
            }
        }

        function updateSlideUI() {
            const data = slides[currentSlide];
            const displayNum = `0${currentSlide + 1}`;

            if (titleTop) titleTop.innerText = data.titleTop;
            if (titleBottom) titleBottom.innerText = data.titleBottom;
            if (sliderIndex) sliderIndex.innerText = displayNum;
            if (sliderCategory) sliderCategory.innerText = data.category;
            if (badgeCurrent) badgeCurrent.innerText = displayNum;
            if (progCurrent) progCurrent.innerText = displayNum;

            if (sliderAction) {
                sliderAction.classList.remove('is-visible');
                setTimeout(() => sliderAction.classList.add('is-visible'), 100);
            }

            if (imgLeft) imgLeft.style.backgroundImage = `url('${data.imgLeft}')`;
            if (imgRight) imgRight.style.backgroundImage = `url('${data.imgRight}')`;

            if (imgLeft) imgLeft.classList.remove('zoomed');
            if (imgRight) imgRight.classList.remove('zoomed');
            if (imgLeft) void imgLeft.offsetWidth;
            if (imgLeft) imgLeft.classList.add('zoomed');
            if (imgRight) imgRight.classList.add('zoomed');

            if (progBar) {
                const percent = ((currentSlide + 1) / totalSlides) * 100;
                progBar.style.width = `${percent}%`;
            }
            renderDots();
        }

        function goToSlide(index) {
            if (isAnimating || index === currentSlide || currentView !== 'view-home-1') return;
            isAnimating = true;
            fadeOverlay.classList.replace('opacity-0', 'opacity-100');
            if (titleTop) titleTop.classList.add('text-hidden');
            if (titleBottom) titleBottom.classList.add('text-hidden');
            if (sliderIndex) sliderIndex.classList.add('text-hidden');
            if (sliderCategory) sliderCategory.classList.add('text-hidden');
            if (sliderAction) sliderAction.classList.remove('is-visible');

            setTimeout(() => {
                currentSlide = index;
                if (currentSlide >= totalSlides) currentSlide = 0;
                if (currentSlide < 0) currentSlide = totalSlides - 1;
                updateSlideUI();
                setTimeout(() => {
                    fadeOverlay.classList.replace('opacity-100', 'opacity-0');
                    if (titleTop) titleTop.classList.remove('text-hidden');
                    if (titleBottom) titleBottom.classList.remove('text-hidden');
                    if (sliderIndex) sliderIndex.classList.remove('text-hidden');
                    if (sliderCategory) sliderCategory.classList.remove('text-hidden');
                    if (sliderAction) sliderAction.classList.add('is-visible');
                    setTimeout(() => { isAnimating = false; }, 800);
                }, 100);
            }, 400);
        }

        document.addEventListener('mousemove', (e) => {
            if (isMenuOpen || currentView !== 'view-home-1' || window.innerWidth < 768) return;
            const xAxis = (e.pageX - window.innerWidth / 2) / 40;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
            if (sliderContainer) sliderContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        const btnNext = document.getElementById('btn-next');
        const btnPrev = document.getElementById('btn-prev');
        if (btnNext) btnNext.addEventListener('click', () => goToSlide(currentSlide + 1));
        if (btnPrev) btnPrev.addEventListener('click', () => goToSlide(currentSlide - 1));

        if (sliderContainer) {
            sliderContainer.addEventListener('wheel', (e) => {
                if (currentView === 'view-home-1') {
                    if (e.deltaY > 0) goToSlide(currentSlide + 1);
                    else goToSlide(currentSlide - 1);
                }
            }, { passive: true });

            let touchStartX = 0;
            sliderContainer.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
            sliderContainer.addEventListener('touchend', e => {
                if (currentView === 'view-home-1') {
                    let touchEndX = e.changedTouches[0].screenX;
                    if (touchStartX - touchEndX > 50) goToSlide(currentSlide + 1);
                    if (touchEndX - touchStartX > 50) goToSlide(currentSlide - 1);
                }
            }, { passive: true });
        }

        renderDots();
        updateSlideUI();

        // --- HOME 3 DRAG & PHYSICS SCROLL LOGIC ---
        const h3Track = document.getElementById('h3-slider-track');
        const h3ProgBar = document.getElementById('h3-prog-bar');
        const h3Cards = document.querySelectorAll('.h3-card');

        let isH3Down = false;
        let h3StartX;
        let h3ScrollLeft;

        if (h3Track) {
            h3Track.addEventListener('mousedown', (e) => {
                isH3Down = true;
                h3Track.classList.add('active');
                h3StartX = e.pageX - h3Track.offsetLeft;
                h3ScrollLeft = h3Track.scrollLeft;
                h3Track.style.scrollBehavior = 'auto';
            });
            h3Track.addEventListener('mouseleave', () => {
                isH3Down = false; h3Track.classList.remove('active'); h3Track.style.scrollBehavior = 'smooth';
            });
            h3Track.addEventListener('mouseup', () => {
                isH3Down = false; h3Track.classList.remove('active'); h3Track.style.scrollBehavior = 'smooth';
            });
            h3Track.addEventListener('mousemove', (e) => {
                if (!isH3Down) return;
                e.preventDefault();
                const x = e.pageX - h3Track.offsetLeft;
                const walk = (x - h3StartX) * 2;
                h3Track.scrollLeft = h3ScrollLeft - walk;
            });

            let scrollTimeout;
            h3Track.addEventListener('wheel', (e) => {
                if (currentView === 'view-home-3') {
                    e.preventDefault();
                    h3Track.scrollBy({ left: e.deltaY * 3, behavior: 'auto' });
                    let skewVal = e.deltaY * 0.08;
                    skewVal = Math.max(-10, Math.min(10, skewVal));
                    if (window.innerWidth >= 768) {
                        h3Cards.forEach(c => c.style.setProperty('--skew', `${skewVal}deg`));
                    }
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        h3Cards.forEach(c => c.style.setProperty('--skew', `0deg`));
                    }, 150);
                }
            }, { passive: false });

            // Tracking mouse for reflection
            h3Track.addEventListener('mousemove', (e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX;
                const y = e.clientY;

                h3Cards.forEach(card => {
                    const cardRect = card.getBoundingClientRect();
                    const rx = ((x - cardRect.left) / cardRect.width) * 100;
                    const ry = ((y - cardRect.top) / cardRect.height) * 100;
                    card.style.setProperty('--mx', `${rx}%`);
                    card.style.setProperty('--my', `${ry}%`);
                });
            });

            // Center tracking logic
            function updateH3Focus() {
                const trackRect = h3Track.getBoundingClientRect();
                const centerX = trackRect.left + trackRect.width / 2;

                let closestCard = null;
                let minDistance = Infinity;

                h3Cards.forEach((card, index) => {
                    const cardRect = card.getBoundingClientRect();
                    const cardCenter = cardRect.left + cardRect.width / 2;
                    const distance = Math.abs(centerX - cardCenter);

                    if (distance < minDistance) {
                        minDistance = distance;
                        closestCard = card;
                    }
                });

                h3Cards.forEach(c => c.classList.remove('is-active'));
                if (closestCard) closestCard.classList.add('is-active');
            }

            h3Track.addEventListener('scroll', () => {
                updateH3Focus();
                if (!h3Track || !h3ProgBar) return;
                const maxScrollLeft = h3Track.scrollWidth - h3Track.clientWidth;
                if (maxScrollLeft <= 0) return;
                const scrollPercent = h3Track.scrollLeft / maxScrollLeft;
                const maxTranslate = 300;
                h3ProgBar.style.transform = `translateX(${scrollPercent * maxTranslate}%)`;
            });

            // Initial focus
            setTimeout(() => {
                if (h3Cards.length > 0) {
                    h3Cards[0].scrollIntoView({ behavior: 'auto', inline: 'center' });
                    updateH3Focus();
                }
            }, 100);

            // Click to center
            h3Cards.forEach(card => {
                card.addEventListener('click', () => {
                    card.scrollIntoView({ behavior: 'smooth', inline: 'center' });
                });
            });
        }



    })();
}


/**
 * Template Module: HOME-4
 */
if (document.body.classList.contains('tft-page-home-4')) {
    (function () {
        // Initialize Lucide Icons
        lucide.createIcons();

        // --- MENU LOGIC ---
        const menuToggleBtns = document.querySelectorAll('.menu-toggle');
        const menuPanel = document.getElementById('menu-panel');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
            menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
        }
        menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

        // --- ACCORDION ---
        const accordionItems = ['home', 'about', 'work', 'blog'];
        function toggleAccordion(activeId) {
            accordionItems.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosed = submenu.style.maxHeight === "0px" || submenu.style.maxHeight === "";
                    submenu.style.maxHeight = isClosed ? submenu.scrollHeight + "px" : "0px";
                    submenu.style.opacity = isClosed ? "1" : "0";
                    if (icon) icon.style.transform = isClosed ? "rotate(180deg)" : "rotate(0deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        }


        // --- HOME 4 COLUMNS LOGIC ---
        const h4Cols = document.querySelectorAll('.h4-col');
        h4Cols.forEach(col => {
            col.addEventListener('mouseenter', () => {
                h4Cols.forEach(c => c.classList.remove('pre-active'));
            });
        });

    })();
}


/**
 * Template Module: HOME-5
 */
if (document.body.classList.contains('tft-page-home-5')) {
    (function () {
        // Initialize Lucide Icons
        lucide.createIcons();

        // --- MENU LOGIC ---
        const menuToggleBtns = document.querySelectorAll('.menu-toggle');
        const menuPanel = document.getElementById('menu-panel');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
            menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
        }
        menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

        // --- ACCORDION ---
        const accordionItems = ['home', 'work', 'about', 'journal'];
        function toggleAccordion(activeId) {
            accordionItems.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosed = submenu.style.maxHeight === "0px" || submenu.style.maxHeight === "";
                    submenu.style.maxHeight = isClosed ? submenu.scrollHeight + "px" : "0px";
                    submenu.style.opacity = isClosed ? "1" : "0";
                    if (icon) icon.style.transform = isClosed ? "rotate(180deg)" : "rotate(0deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        }


        // --- HOME 5 DYNAMIC LIST LOGIC ---
        const h5ListItems = document.querySelectorAll('.h5-list-item');
        const h5ImageCurrent = document.getElementById('h5-image-current');
        const h5ImageNext = document.getElementById('h5-image-next');
        const h5ImageWrap = document.getElementById('h5-image-wrap');
        const h5ImageIndex = document.getElementById('h5-image-index');
        const h5ImageTag = document.getElementById('h5-image-tag');
        const h5Counter = document.getElementById('h5-counter');
        const h5BtnPrev = document.getElementById('h5-btn-prev');
        const h5BtnNext = document.getElementById('h5-btn-next');
        const viewHome5 = document.getElementById('view-home-5');
        const h5CounterWrap = document.querySelector('.h5-counter-wrap');

        let h5CurrentIndex = 2;
        let h5OutTimer;
        let h5CounterTimer;
        let h5WheelLock = false;

        const h5Categories = [
            'Urban Living',
            'Brand Worlds',
            'Space Lab',
            'Exterior Flow',
            'Material Study'
        ];

        function updateH5Slide(index) {
            if (index === h5CurrentIndex) return;

            const previousIndex = h5CurrentIndex;
            if (index < 0) index = h5ListItems.length - 1;
            if (index >= h5ListItems.length) index = 0;
            const direction = index > previousIndex || (previousIndex === h5ListItems.length - 1 && index === 0) ? 'next' : 'prev';
            h5CurrentIndex = index;

            h5ListItems.forEach(li => li.classList.remove('active'));
            const activeItem = h5ListItems[h5CurrentIndex];
            activeItem.classList.add('active');

            const newBgUrl = activeItem.getAttribute('data-bg');

            clearTimeout(h5OutTimer);
            clearTimeout(h5CounterTimer);

            if (h5ImageWrap && h5ImageCurrent && h5ImageNext) {
                h5ImageWrap.classList.remove('is-transitioning');
                h5ImageWrap.classList.toggle('is-dir-prev', direction === 'prev');

                h5ImageNext.style.backgroundImage = `url('${newBgUrl}')`;
                void h5ImageWrap.offsetWidth; // Force reflow
                h5ImageWrap.classList.add('is-transitioning');

                if (h5CounterWrap) {
                    h5CounterWrap.classList.remove('is-updating');
                    void h5CounterWrap.offsetWidth;
                    h5CounterWrap.classList.add('is-updating');
                }

                h5CounterTimer = setTimeout(() => {
                    if (h5Counter) h5Counter.innerText = `0${h5CurrentIndex + 1}`;
                    if (h5ImageTag) h5ImageTag.innerText = h5Categories[h5CurrentIndex] || 'Featured Work';
                    if (h5CounterWrap) h5CounterWrap.classList.remove('is-updating');
                }, 160);

                h5OutTimer = setTimeout(() => {
                    h5ImageCurrent.style.backgroundImage = `url('${newBgUrl}')`;
                    h5ImageWrap.classList.remove('is-transitioning');
                    h5ImageNext.style.backgroundImage = '';
                }, 700);
            }

            activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        h5ListItems.forEach((item, index) => {
            item.addEventListener('click', () => updateH5Slide(index));
            item.addEventListener('mouseenter', () => {
                if (window.innerWidth >= 768) updateH5Slide(index);
            });
        });

        if (h5BtnPrev) h5BtnPrev.addEventListener('click', () => updateH5Slide(h5CurrentIndex - 1));
        if (h5BtnNext) h5BtnNext.addEventListener('click', () => updateH5Slide(h5CurrentIndex + 1));

        if (h5ImageWrap) {
            h5ImageWrap.addEventListener('mousemove', (e) => {
                if (window.innerWidth < 768) return;
                const rect = h5ImageWrap.getBoundingClientRect();
                const px = (e.clientX - rect.left) / rect.width;
                const py = (e.clientY - rect.top) / rect.height;
                const shiftX = (px - 0.5) * 16;
                const shiftY = (py - 0.5) * 16;
                h5ImageWrap.style.setProperty('--h5-shift-x', `${shiftX.toFixed(2)}px`);
                h5ImageWrap.style.setProperty('--h5-shift-y', `${shiftY.toFixed(2)}px`);
            });

            h5ImageWrap.addEventListener('mouseleave', () => {
                h5ImageWrap.style.setProperty('--h5-shift-x', '0px');
                h5ImageWrap.style.setProperty('--h5-shift-y', '0px');
            });
        }

        if (viewHome5) {
            viewHome5.addEventListener('wheel', (e) => {
                if (isMenuOpen) return;

                if (window.innerWidth >= 768) {
                    if (Math.abs(e.deltaY) < 30) return;
                    e.preventDefault();
                    if (h5WheelLock) return;
                    h5WheelLock = true;
                    if (e.deltaY > 0) updateH5Slide(h5CurrentIndex + 1);
                    else updateH5Slide(h5CurrentIndex - 1);
                    setTimeout(() => { h5WheelLock = false; }, 850);
                }
            }, { passive: false });

            let h5TouchStartY = 0;
            viewHome5.addEventListener('touchstart', e => { h5TouchStartY = e.changedTouches[0].screenY; }, { passive: true });
            viewHome5.addEventListener('touchend', e => {
                let touchEndY = e.changedTouches[0].screenY;
                if (h5TouchStartY - touchEndY > 50) updateH5Slide(h5CurrentIndex + 1);
                if (touchEndY - h5TouchStartY > 50) updateH5Slide(h5CurrentIndex - 1);
            }, { passive: true });
        }

    })();
}


/**
 * Template Module: HOME-6
 */
if (document.body.classList.contains('tft-page-home-6')) {
    (function () {
        // Initialize Lucide Icons
        lucide.createIcons();

        // --- MENU LOGIC ---
        const menuToggleBtns = document.querySelectorAll('.menu-toggle');
        const menuPanel = document.getElementById('menu-panel');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
            menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
        }
        menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

        // --- ACCORDION ---
        const accordionItems = ['home', 'work', 'about', 'journal'];
        function toggleAccordion(activeId) {
            accordionItems.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosed = submenu.style.maxHeight === "0px" || submenu.style.maxHeight === "";
                    submenu.style.maxHeight = isClosed ? submenu.scrollHeight + "px" : "0px";
                    submenu.style.opacity = isClosed ? "1" : "0";
                    if (icon) icon.style.transform = isClosed ? "rotate(180deg)" : "rotate(0deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        }


        // --- HOME 6 LIST LOGIC (Hyper-Precise Zero-Lag Cursor) ---
        const h6Cursor = document.getElementById('h6-cursor');

        window.addEventListener('mousemove', (e) => {
            if (h6Cursor && document.body.classList.contains('tft-page-home-6')) {
                // Instant 1:1 Viewport Alignment (Zero Damping/Lag)
                h6Cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%) scale(${h6Cursor.classList.contains('active') ? 1 : 0.4})`;
            }
        });

        const projectRows = document.querySelectorAll('.h6-row');
        projectRows.forEach(row => {
            row.addEventListener('mouseenter', () => {
                if (h6Cursor) h6Cursor.classList.add('active');
            });
            row.addEventListener('mouseleave', () => {
                if (h6Cursor) h6Cursor.classList.remove('active');
            });
        });




    })();
}


/**
 * Template Module: HOME-7
 */
if (document.body.classList.contains('tft-page-home-7') && !document.body.dataset.realizHome7Init) {
    document.body.dataset.realizHome7Init = '1';
    (function () {
        // Initialize Lucide Icons
        lucide.createIcons();

        // --- MENU LOGIC ---
        const menuToggleBtns = document.querySelectorAll('.menu-toggle');
        const menuPanel = document.getElementById('menu-panel');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
            menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
        }
        menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

        // --- ACCORDION ---
        const accordionItems = ['home', 'work', 'about', 'journal'];
        function toggleAccordion(activeId) {
            accordionItems.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosed = submenu.style.maxHeight === "0px" || submenu.style.maxHeight === "";
                    submenu.style.maxHeight = isClosed ? submenu.scrollHeight + "px" : "0px";
                    submenu.style.opacity = isClosed ? "1" : "0";
                    if (icon) icon.style.transform = isClosed ? "rotate(180deg)" : "rotate(0deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        }


    })();
}


/**
 * Template Module: INDEX
 */
if (document.body.classList.contains('tft-page-index')) {
    (function () {
        "use strict";
        lucide.createIcons();

        // --- MENU LOGIC ---
        const menuToggleBtns = document.querySelectorAll('.menu-toggle');
        const menuPanel = document.getElementById('menu-panel');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
            menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
        }
        menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

        // --- ACCORDION ---
        const menuAccordions = ['home', 'work', 'about', 'journal'];
        function toggleAccordion(activeId) {
            menuAccordions.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosed = submenu.style.maxHeight === "0px" || submenu.style.maxHeight === "";
                    submenu.style.maxHeight = isClosed ? submenu.scrollHeight + "px" : "0px";
                    submenu.style.opacity = isClosed ? "1" : "0";
                    if (icon) icon.style.transform = isClosed ? "rotate(180deg)" : "rotate(0deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        }


        // --- WEBGL SLIDER ENGINE (PREMIUM EDITION) ---
        const slides = [
            { top: "Visual", btm: "Lattice", src: "assets/img/s4.png", category: "Branding" },
            { top: "Digital", btm: "Core", src: "assets/img/s6.jpg", category: "Web Product" },
            { top: "Studio", btm: "Archive", src: "assets/img/s7.png", category: "Identity" },
            { top: "Motion", btm: "Dynamics", src: "assets/img/s5.jpg", category: "Animation" }
        ];


        let currentSlide = 0;
        let nextSlide = 0;
        let isAnimating = false;
        let transitionProgress = 0;
        let transitionType = 0;

        const canvas = document.getElementById('webgl-canvas');
        const fallbackImage = document.getElementById('slider-fallback-image');
        const gl = canvas.getContext('webgl', {
            antialias: true,
            alpha: true,
            premultipliedAlpha: false
        });


        if (!gl) {
            document.getElementById('slider-container').classList.add('no-webgl');
        } else {
            document.getElementById('slider-container').classList.remove('no-webgl');
            // Keep fallback img visible (z-index handles the layering)
            if (fallbackImage) {
                fallbackImage.style.opacity = '1';
                fallbackImage.style.visibility = 'visible';
            }
            // Ensure canvas is active but transparent
            canvas.style.opacity = '1';
        }

        const vs = `
            attribute vec2 position;
            varying vec2 vUv;
            void main() {
                vUv = position * 0.5 + 0.5;
                vUv.y = 1.0 - vUv.y;
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `;

        const fs = `
            precision mediump float;
            varying vec2 vUv;
            uniform sampler2D u_tex1;
            uniform sampler2D u_tex2;
            uniform float u_progress;
            uniform float u_time;

            void main() {
                vec2 uv = vUv;
                
                // --- CHROMATIC SHUTTER FX (LIQUID LENS) ---
                // Distortion peaks at 50% (sin(progress * PI))
                float distort = sin(u_progress * 3.14159);
                
                // Radial focus distortion
                float r = distance(uv, vec2(0.5));
                vec2 shift = (uv - 0.5) * distort * 0.15 * r;
                
                // Chromatic displacement on R & B channels
                vec4 c1r = texture2D(u_tex1, uv + shift * 1.1);
                vec4 c1g = texture2D(u_tex1, uv + shift);
                vec4 c1b = texture2D(u_tex1, uv + shift * 0.9);
                
                vec4 c2r = texture2D(u_tex2, uv - shift * 1.1);
                vec4 c2g = texture2D(u_tex2, uv - shift);
                vec4 c2b = texture2D(u_tex2, uv - shift * 0.9);
                
                vec4 c1 = vec4(c1r.r, c1g.g, c1b.b, 1.0);
                vec4 c2 = vec4(c2r.r, c2g.g, c2b.b, 1.0);
                
                // High-Intensity Blur Fade (Lens Swell)
                gl_FragColor = mix(c1, c2, u_progress);
            }

        `;

        function createShader(gl, type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            return shader;
        }

        let program, posAttr;
        if (gl) {
            program = gl.createProgram();
            gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vs));
            gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fs));
            gl.linkProgram(program);
            gl.useProgram(program);

            const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

            posAttr = gl.getAttribLocation(program, "position");
            gl.enableVertexAttribArray(posAttr);
            gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);
        }

        function uploadTexture(img, tex) {
            gl.bindTexture(gl.TEXTURE_2D, tex || gl.createTexture());
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            try {
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
            } catch (e) { console.warn(e); }
            return gl.getParameter(gl.TEXTURE_BINDING_2D);
        }

        let glTextures = [];

        let textures = [];
        const imgsToLoad = slides.map(s => {
            const img = new Image();
            img.src = s.src;
            return img;
        });

        let loaded = 0;
        imgsToLoad.forEach((img, i) => {
            img.onload = () => {
                textures[i] = img;
                if (gl) glTextures[i] = uploadTexture(img);
                loaded++;
                if (i === currentSlide && fallbackImage) {
                    fallbackImage.src = slides[currentSlide].src;
                }
            };
        });

        function updateSlideUI() {
            const s = slides[nextSlide];
            const num = `0${nextSlide + 1}`;
            const tTop = document.getElementById('title-top');
            const tBtm = document.getElementById('title-bottom');
            if (tTop) tTop.innerText = s.top;
            if (tBtm) tBtm.innerText = s.btm;
            const sliderCat = document.getElementById('slider-category');
            if (sliderCat) sliderCat.innerText = s.category;
            const badgeCurr = document.getElementById('badge-current');
            if (badgeCurr) badgeCurr.innerText = num;
            if (fallbackImage) {
                fallbackImage.src = s.src;
            }

            // PROGRESS BAR
            const pct = ((nextSlide + 1) / slides.length) * 100;
            const pBar = document.getElementById('prog-bar');
            if (pBar) pBar.style.width = pct + '%';

            // HUD DOTS (PAGINATION)
            const hudDots = document.getElementById('hud-dots');
            if (hudDots) {
                hudDots.innerHTML = slides.map((_, i) =>
                    `<div class="w-10 h-[2px] ${i === nextSlide ? 'bg-brand-lime shadow-[0_0_15px_rgba(212,245,76,0.6)]' : 'bg-white/10'} transition-all cursor-pointer" onclick="goTo(${i})"></div>`
                ).join('');
            }
        }

        function goTo(idx) {
            if (isAnimating || idx === currentSlide) return;
            nextSlide = idx;
            isAnimating = true;

            // HUD ANIMATION TRIGGERS
            const section = document.getElementById('view-home-1');
            const titleWrap = document.querySelector('.tft-slider-h1');
            if (section) section.classList.add('is-transitioning');
            if (titleWrap) titleWrap.classList.add('is-animating');

            const start = performance.now();
            const duration = 1200;
            let uiUpdated = false;

            function animate(time) {
                const elapsed = time - start;
                const p = Math.min(elapsed / duration, 1);

                // Damped Progress (EaseOutExpo)
                transitionProgress = 1 - Math.pow(2, -10 * p);

                // MIDPOINT SYNC (Texture Swap & Metadata Update)
                if (p > 0.4 && !uiUpdated) {
                    uiUpdated = true;
                    updateSlideUI();
                }

                if (p < 1) {
                    requestAnimationFrame(animate);
                } else {
                    currentSlide = nextSlide;
                    transitionProgress = 0;
                    isAnimating = false;
                    if (section) section.classList.remove('is-transitioning');
                    if (titleWrap) titleWrap.classList.remove('is-animating');
                }
            }
            requestAnimationFrame(animate);
        }


        const btnNext = document.getElementById('btn-next');
        const btnPrev = document.getElementById('btn-prev');
        if (btnNext) btnNext.addEventListener('click', () => goTo((currentSlide + 1) % slides.length));
        if (btnPrev) btnPrev.addEventListener('click', () => goTo((currentSlide - 1 + slides.length) % slides.length));

        // MOUSE WHEEL
        let lastWheelTime = 0;
        window.addEventListener('wheel', (e) => {
            if (isMenuOpen) return;
            const now = Date.now();
            if (now - lastWheelTime < 1200) return;
            if (Math.abs(e.deltaY) > 30) {
                lastWheelTime = now;
                if (e.deltaY > 0) goTo((currentSlide + 1) % slides.length);
                else goTo((currentSlide - 1 + slides.length) % slides.length);
            }
        }, { passive: true });

        updateSlideUI();

        // RENDER LOOP
        function render(time) {
            if (!gl) {
                requestAnimationFrame(render);
                return;
            }

            // Always clear to transparent first (Guarantees fallback visibility)
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            if (glTextures.length === 0) {
                requestAnimationFrame(render);
                return;
            }


            // Use pre-loaded textures
            if (glTextures[currentSlide]) {
                gl.activeTexture(gl.TEXTURE0);
                gl.bindTexture(gl.TEXTURE_2D, glTextures[currentSlide]);
                gl.uniform1i(gl.getUniformLocation(program, "u_tex1"), 0);
            }
            if (glTextures[nextSlide]) {
                gl.activeTexture(gl.TEXTURE1);
                gl.bindTexture(gl.TEXTURE_2D, glTextures[nextSlide]);
                gl.uniform1i(gl.getUniformLocation(program, "u_tex2"), 1);
            }

            gl.uniform1f(gl.getUniformLocation(program, "u_progress"), transitionProgress);
            gl.uniform1f(gl.getUniformLocation(program, "u_type"), transitionType);
            gl.uniform1f(gl.getUniformLocation(program, "u_time"), time * 0.001);

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(render);
        }
        requestAnimationFrame(render);

        /* 
        // LEGACY PARALLAX (NEUTRALIZED FOR SOVEREIGN ELITE V2)
        document.addEventListener('mousemove', (e) => {
            if (isMenuOpen) return;
            const xAxis = (e.pageX - window.innerWidth / 2) / 60;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 60;
            const container = document.getElementById('slider-container');
            if(container) container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        */


    })();
}


/**
 * Template Module: PROJECT-DETAIL
 */
if (document.body.classList.contains('tft-page-project-detail')) {
    (function () {
        "use strict";

        const TFT_Theme = {
            init: () => {
                lucide.createIcons();
                TFT_Theme.setupReveal();
                TFT_Theme.setupParallax();
                TFT_Theme.setupMenu();
                TFT_Theme.setupMagnetic();
            },

            setupReveal: () => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                        }
                    });
                }, { threshold: 0.1 });

                document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
            },

            setupParallax: () => {
                const heroBg = document.querySelector('.tft-hero__bg');
                window.addEventListener('scroll', () => {
                    const scroll = window.pageYOffset;
                    if (scroll < window.innerHeight) {
                        heroBg.style.transform = `translateY(${scroll * 0.4}px) scale(1.1)`;
                    }
                });
            },

            setupMenu: () => {
                const toggle = document.querySelector('.menu-toggle');
                const panel = document.getElementById('menu-panel');
                let isOpen = false;

                toggle.addEventListener('click', () => {
                    isOpen = !isOpen;
                    toggle.classList.toggle('menu-open', isOpen);
                    panel.style.transform = isOpen ? 'translateX(0)' : 'translateX(-100%)';
                });
            },

            setupMagnetic: () => {
                const container = document.querySelector('.tft-next-pjt');
                if (!container) return;

                container.addEventListener('mousemove', (e) => {
                    const bounds = container.getBoundingClientRect();
                    const centerX = bounds.left + bounds.width / 2;
                    const centerY = bounds.top + bounds.height / 2;
                    const moveX = (e.clientX - centerX) * 0.2;
                    const moveY = (e.clientY - centerY) * 0.2;
                    container.style.transform = `translate(${moveX}px, ${moveY}px)`;
                });

                container.addEventListener('mouseleave', () => {
                    container.style.transform = `translate(0, 0)`;
                });
            }
        };

        if (document.readyState === 'loading') {
            window.addEventListener('DOMContentLoaded', TFT_Theme.init);
        } else {
            TFT_Theme.init();
        }

    })();
}


/**
 * Template Module: SERVICES
 */
if (document.body.classList.contains('tft-page-services')) {
    (function () {
        "use strict";

        const init = () => {
            lucide.createIcons();
            setupMenu();
            setupReveal();
            setupParallax();
            setupSteps();
            setupFAQ();
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }

        // --- MENU LOGIC ---
        function setupMenu() {
            const menuToggleBtns = document.querySelectorAll('.menu-toggle');
            const menuPanel = document.getElementById('menu-panel');
            let isMenuOpen = false;

            function toggleMenu() {
                isMenuOpen = !isMenuOpen;
                menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
                menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
            }
            menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));
        }

        // --- ACCORDION (Menu) ---
        const menuAccordions = ['home', 'work', 'about', 'journal'];
        function toggleAccordion(activeId) {
            menuAccordions.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosing = submenu.style.maxHeight !== "0px" && submenu.style.maxHeight !== "";
                    submenu.style.maxHeight = isClosing ? "0px" : submenu.scrollHeight + "px";
                    submenu.style.opacity = isClosing ? "0" : "1";
                    if (icon) icon.style.transform = isClosing ? "rotate(0deg)" : "rotate(180deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        }

        // --- REVEAL ON SCROLL ---
        function setupReveal() {
            const scrollContainer = document.getElementById('main-scroll-container');
            const observerOptions = { threshold: 0.1, root: scrollContainer };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
        }

        // --- PARALLAX ---
        function setupParallax() {
            const scrollContainer = document.getElementById('main-scroll-container');
            scrollContainer.addEventListener('scroll', () => {
                const scrolled = scrollContainer.scrollTop;
                const parallax = document.querySelector('.parallax-bg');
                if (parallax) {
                    parallax.style.transform = `translateY(${scrolled * 0.4}px)`;
                }
            });
        }

        // --- PROCESS STEPS ---
        function setupSteps() {
            const scrollContainer = document.getElementById('main-scroll-container');
            scrollContainer.addEventListener('scroll', () => {
                const scrolled = scrollContainer.scrollTop;
                const steps = document.querySelectorAll('.step-item');
                steps.forEach((step, i) => {
                    const rect = step.getBoundingClientRect();
                    if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
                        step.classList.add('active');
                    }
                });
            });
        }

        // --- FAQ ---
        function setupFAQ() {
            const faqItems = document.querySelectorAll('[data-faq-item]');
            if (!faqItems.length) return;

            const closeItem = (item) => {
                item.classList.remove('is-open');
                const trigger = item.querySelector('.faq-trigger');
                const content = item.querySelector('.faq-content');
                if (trigger) trigger.setAttribute('aria-expanded', 'false');
                if (content) content.style.maxHeight = '0px';
            };

            const openItem = (item) => {
                item.classList.add('is-open');
                const trigger = item.querySelector('.faq-trigger');
                const content = item.querySelector('.faq-content');
                if (trigger) trigger.setAttribute('aria-expanded', 'true');
                if (content) content.style.maxHeight = content.scrollHeight + 'px';
            };

            faqItems.forEach((item, index) => {
                const trigger = item.querySelector('.faq-trigger');
                const content = item.querySelector('.faq-content');
                if (!trigger || !content) return;

                if (index === 0) {
                    openItem(item);
                } else {
                    closeItem(item);
                }

                trigger.addEventListener('click', () => {
                    const isOpen = item.classList.contains('is-open');
                    faqItems.forEach(panel => closeItem(panel));
                    if (!isOpen) openItem(item);
                });
            });

            window.addEventListener('resize', () => {
                faqItems.forEach(item => {
                    if (item.classList.contains('is-open')) {
                        const content = item.querySelector('.faq-content');
                        if (content) content.style.maxHeight = content.scrollHeight + 'px';
                    }
                });
            });
        }

    })();
}


/**
 * Template Module: ABOUT-ALT
 */
if (document.body.classList.contains('tft-page-about-alt') && !document.body.dataset.realizAboutAltInit) {
    document.body.dataset.realizAboutAltInit = '1';
    (function () {
        "use strict";

        const init = () => {
            lucide.createIcons();
            setupMenu();
            setupAboutReveal();
            setupTimelineProgress();
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }

        const menuToggleBtns = document.querySelectorAll('.menu-toggle');
        const menuPanel = document.getElementById('menu-panel');
        let isMenuOpen = false;

        function setupMenu() {
            function toggleMenu() {
                isMenuOpen = !isMenuOpen;
                menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
                menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
            }
            menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));
        }

        window.toggleAccordion = function (activeId) {
            const ids = ['home', 'work', 'about', 'journal'];
            ids.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosed = submenu.style.maxHeight === "0px" || submenu.style.maxHeight === "";
                    submenu.style.maxHeight = isClosed ? submenu.scrollHeight + "px" : "0px";
                    submenu.style.opacity = isClosed ? "1" : "0";
                    if (icon) icon.style.transform = isClosed ? "rotate(180deg)" : "rotate(0deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        };


        function setupAboutReveal() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
        }

        function setupTimelineProgress() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const fill = entry.target.querySelector('.step-progress-fill');
                        if (fill) {
                            fill.style.height = '100ndvh';
                        }
                    }
                });
            }, { threshold: 0.5 });

            document.querySelectorAll('.relative.flex.flex-col.md\\:flex-row').forEach(el => {
                if (el.querySelector('.step-progress-line')) observer.observe(el);
            });
        }

    })();
}


/**
 * Template Module: SINGLE-POST
 */
if (document.body.classList.contains('tft-page-single-post')) {
    (function () {
        "use strict";

        const TFT_Theme = {
            init: () => {
                lucide.createIcons();
                TFT_Theme.setupReveal();
                TFT_Theme.setupProgress();
                TFT_Theme.setupTOC();
            },

            setupReveal: () => {
                const scrollContainer = document.getElementById('main-scroll-container');
                const observerOptions = {
                    threshold: 0.1,
                    root: scrollContainer
                };
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('active');
                            observer.unobserve(entry.target);
                        }
                    });
                }, observerOptions);
                document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
            },

            setupProgress: () => {
                const scrollContainer = document.getElementById('main-scroll-container');
                scrollContainer.onscroll = () => {
                    const winScroll = scrollContainer.scrollTop;
                    const height = scrollContainer.scrollHeight - scrollContainer.clientHeight;
                    const scrolled = (winScroll / height) * 100;
                    document.getElementById("readingProgress").style.width = scrolled + "%";
                };
            },

            setupTOC: () => {
                const scrollContainer = document.getElementById('main-scroll-container');
                const sections = document.querySelectorAll('section[id]');
                const navLinks = document.querySelectorAll('.toc-link');

                scrollContainer.addEventListener('scroll', () => {
                    let current = '';
                    sections.forEach(section => {
                        const sectionTop = section.offsetTop;
                        if (scrollContainer.scrollTop >= sectionTop - 200) {
                            current = section.getAttribute('id');
                        }
                    });

                    navLinks.forEach(link => {
                        link.classList.remove('active', 'text-brand-lime');
                        link.classList.add('text-white/40');
                        if (link.getAttribute('href').includes(current)) {
                            link.classList.add('active', 'text-brand-lime');
                            link.classList.remove('text-white/40');
                        }
                    });
                });
            }
        };

        const menuToggleBtns = document.querySelectorAll('.menu-toggle');
        const menuPanel = document.getElementById('menu-panel');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
            menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
        }
        menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

        const accordionItems = ['home', 'work', 'about', 'journal'];
        function toggleAccordion(activeId) {
            accordionItems.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosed = submenu.style.maxHeight === "0px" || submenu.style.maxHeight === "";
                    submenu.style.maxHeight = isClosed ? submenu.scrollHeight + "px" : "0px";
                    submenu.style.opacity = isClosed ? "1" : "0";
                    if (icon) icon.style.transform = isClosed ? "rotate(180deg)" : "rotate(0deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        }


        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', TFT_Theme.init);
        } else {
            TFT_Theme.init();
        }

    })();
}


/**
 * Template Module: WORKS-ALT
 */
if (document.body.classList.contains('tft-page-works-alt')) {
    (function () {
        "use strict";

        const init = () => {
            lucide.createIcons();
            setupMenu();
            setupKineticSplit();
            setupCursor();
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }

        // --- MENU LOGIC (Index Sync) ---
        function setupMenu() {
            const menuToggleBtn = document.querySelectorAll('.menu-toggle');
            const menuPanel = document.getElementById('menu-panel');
            let isMenuOpen = false;

            function toggleMenu() {
                isMenuOpen = !isMenuOpen;
                menuToggleBtn.forEach(btn => btn.classList.toggle('menu-open', isMenuOpen));
                menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
            }
            menuToggleBtn.forEach(btn => btn.addEventListener('click', toggleMenu));
        }

        const menuAccordions = ['home', 'work', 'about', 'journal'];
        function toggleAccordion(activeId) {
            menuAccordions.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                if (!submenu) return;
                const isItemActive = id === activeId;
                if (isItemActive) {
                    const isClosing = submenu.style.maxHeight !== "0px" && submenu.style.maxHeight !== "";
                    submenu.style.maxHeight = isClosing ? "0px" : submenu.scrollHeight + "px";
                    submenu.style.opacity = isClosing ? "0" : "1";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                }
            });
        }

        // --- REFINED PROJECT DATA ---
        const projectData = [
            { scope: "Spatial Studio Workspace", sector: "Creative Hub", location: "Paris // FR", year: "2026" },
            { scope: "Crystalline Logic Core", sector: "Techno-Structure", location: "Tokyo // JP", year: "2025" },
            { scope: "Geometric Synthesis", sector: "Global Elite", location: "Berlin // DE", year: "2026" },
            { scope: "Optical Kinetic Flow", sector: "Motion Design", location: "London // UK", year: "2024" },
            { scope: "High-Performance Compute", sector: "Hardware Design", location: "Oslo // NO", year: "2026" },
            { scope: "Modular Kinetic Engine", sector: "Product Design", location: "New York // US", year: "2025" }
        ];

        function setupKineticSplit() {
            const items = document.querySelectorAll('.project-item');
            const images = document.querySelectorAll('.viewport-image');
            const body = document.body;
            let activeIdx = 0;

            function activateProject(idx) {
                if (idx === activeIdx) return;

                // Deactivate current
                items[activeIdx].classList.remove('active');
                images[activeIdx].classList.remove('active');

                // Activate new
                activeIdx = idx;
                items[activeIdx].classList.add('active');
                images[activeIdx].classList.add('active');

                // Background atmosphere locked to default
                // body.style.backgroundColor = items[activeIdx].getAttribute('data-bg'); // DISABLED as per User Request

                // Update Project Metadata
                const data = projectData[idx];
                document.getElementById('p-scope').innerText = data.scope;
                document.getElementById('p-lat').innerText = data.sector;
                document.getElementById('p-long').innerText = data.location;
                document.getElementById('p-year').innerText = data.year;
            }

            // Click activation
            items.forEach((item, index) => {
                item.addEventListener('click', () => activateProject(index));
                item.addEventListener('mouseenter', () => activateProject(index));
            });

            // Sync with Scroll
            const leftPanel = document.getElementById('left-panel');
            leftPanel.addEventListener('scroll', () => {
                items.forEach((item, index) => {
                    const rect = item.getBoundingClientRect();
                    const centerY = window.innerHeight / 3;
                    if (rect.top < centerY && rect.bottom > centerY) {
                        activateProject(index);
                    }
                });
            });
        }

        // --- CUSTOM CURSOR ---
        function setupCursor() {
            const cursor = document.getElementById('kinetic-cursor');
            window.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
            document.querySelectorAll('.project-item').forEach(item => {
                item.addEventListener('mouseenter', () => cursor.classList.add('on-item'));
                item.addEventListener('mouseleave', () => cursor.classList.remove('on-item'));
            });
        }

    })();
}


/**
 * Template Module: WORKS
 */
if (document.body.classList.contains('tft-page-works')) {
    (function () {
        "use strict";

        const init = () => {
            lucide.createIcons();
            setupMenu();
            setupReveal();
            setupCursor();
            setupFiltering();
            setupMagneticElements();
        };

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }

        // --- MENU LOGIC ---
        function setupMenu() {
            const menuToggleBtns = document.querySelectorAll('.menu-toggle');
            const menuPanel = document.getElementById('menu-panel');
            let isMenuOpen = false;

            function toggleMenu() {
                isMenuOpen = !isMenuOpen;
                menuToggleBtns.forEach(btn => isMenuOpen ? btn.classList.add('menu-open') : btn.classList.remove('menu-open'));
                menuPanel.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
            }
            menuToggleBtns.forEach(btn => btn.addEventListener('click', toggleMenu));
        }

        // --- ACCORDION (Menu) ---
        const menuAccordions = ['home', 'work', 'about', 'journal'];
        function toggleAccordion(activeId) {
            menuAccordions.forEach(id => {
                const submenu = document.getElementById(`${id}-submenu`);
                const icon = document.getElementById(`${id}-icon`);
                if (!submenu) return;
                if (id === activeId) {
                    const isClosing = submenu.style.maxHeight !== "0px" && submenu.style.maxHeight !== "";
                    submenu.style.maxHeight = isClosing ? "0px" : submenu.scrollHeight + "px";
                    submenu.style.opacity = isClosing ? "0" : "1";
                    if (icon) icon.style.transform = isClosing ? "rotate(0deg)" : "rotate(135deg)";
                } else {
                    submenu.style.maxHeight = "0px";
                    submenu.style.opacity = "0";
                    if (icon) icon.style.transform = "rotate(0deg)";
                }
            });
        }

        // --- REVEAL ON SCROLL ---
        function setupReveal() {
            const scrollContainer = document.getElementById('main-scroll-container');
            const observerOptions = {
                threshold: 0.05,
                root: scrollContainer || null // Use viewport if container is missing
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
        }

        // --- CUSTOM CURSOR ---
        function setupCursor() {
            const cursor = document.getElementById('tft-cursor');
            if (!cursor) return;

            window.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });

            // Expand cursor on Project Cards
            document.querySelectorAll('.tft-card').forEach(card => {
                card.addEventListener('mouseenter', () => {
                    cursor.classList.add('is-viewing');
                    cursor.textContent = 'VIEW';
                });
                card.addEventListener('mouseleave', () => {
                    cursor.classList.remove('is-viewing');
                    cursor.textContent = 'EXPLORE';
                });
            });
        }

        // --- MAGNETIC ELEMENTS ---
        function setupMagneticElements() {
            const magneticElements = document.querySelectorAll('.rlz-magnetic, .tft-card__title');
            magneticElements.forEach(el => {
                el.addEventListener('mousemove', (e) => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    // Subtle displacement factor (0.3)
                    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
                });
                el.addEventListener('mouseleave', () => {
                    el.style.transform = 'translate(0px, 0px)';
                });
            });
        }

        // --- CATEGORY FILTERING ---
        function setupFiltering() {
            const tabs = document.querySelectorAll('.filter-tab, .rlz-filter-drawer__btn');
            const cards = document.querySelectorAll('.tft-card');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const filter = tab.getAttribute('data-filter');

                    // Update Active State on all UI triggers (Horizontal list & Mobile Drawer)
                    tabs.forEach(t => t.classList.remove('active'));
                    document.querySelectorAll(`[data-filter="${filter}"]`).forEach(t => t.classList.add('active'));

                    // Phase 1: Staggered Exit
                    cards.forEach(card => card.classList.add('is-filtering'));

                    setTimeout(() => {
                        let visibleCount = 0;
                        cards.forEach(card => {
                            const cat = card.getAttribute('data-category');

                            if (filter === 'all' || cat === filter) {
                                card.style.display = 'block';

                                // Phase 2: Premium Staggered Entry
                                setTimeout(() => {
                                    card.classList.remove('is-filtering');
                                    card.classList.add('active');
                                }, 100 + (visibleCount * 80));
                                visibleCount++;
                            } else {
                                card.style.display = 'none';
                                card.classList.remove('active');
                            }
                        });
                    }, 450); // Matches CSS transition duration
                });
            });
        }

    })();
}

/**
 * RLZ-FILTER: CORE INTERACTION ENGINE (2026 ELITE SPEC)
 */
"use strict";

const TFT_Theme = {
    init: function () {
        this.setupMobileFilter();
    },

    /**
     * Handles the unique floating island mobile interface
     */
    setupMobileFilter: function () {
        const trigger = document.getElementById('rlz-mobile-filter-trigger');
        const drawer = document.getElementById('rlz-filter-drawer');
        const closeBtn = document.getElementById('rlz-filter-drawer-close');
        const drawerBtns = document.querySelectorAll('.rlz-filter-drawer__btn');

        if (!trigger || !drawer) return;

        const openDrawer = () => {
            drawer.classList.add('is-active');
            drawer.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        };

        const closeDrawer = () => {
            drawer.classList.remove('is-active');
            drawer.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        };

        trigger.addEventListener('click', openDrawer);
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeDrawer();
        });

        // Close on clicking the backdrop
        drawer.addEventListener('click', (e) => {
            if (e.target === drawer) closeDrawer();
        });

        // Sync and Close drawer after selection
        drawerBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // The actual filtering is handled by the existing .filter-tab listeners
                // We just need to handle the UI feedback and closing the drawer
                setTimeout(closeDrawer, 450);
            });
        });
    }
};

// Auto-initialize if on Works Page
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('tft-page-works')) {
        TFT_Theme.init();
    }
});



/* --- SINGLE POST MOTION ENGINE (TOC & MAGNETIC SHARE) --- */
document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('main-scroll-container');
    const tocLinks = document.querySelectorAll('.toc-link');
    const sections = document.querySelectorAll('.article-body section[id]');
    const shareItems = document.querySelectorAll('.tft-share-hub__item');

    if (!scrollContainer) return;

    // 1. Smooth Scroll Engine with Precise Offset
    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = targetElement.offsetTop - (window.innerHeight * 0.12);
                scrollContainer.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. ScrollSpy Engine (Active State Tracking)
    if (tocLinks.length > 0 && sections.length > 0) {
        const observerOptions = {
            root: scrollContainer,
            rootMargin: '-10% 0px -85% 0px', /* Permissive top-weighted detection */
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    tocLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(section => observer.observe(section));

        // 2.1 Fallback for the absolute bottom (Ensures 'Closing Thoughts' activates)
        scrollContainer.addEventListener('scroll', () => {
            const isAtBottom = scrollContainer.scrollHeight - scrollContainer.scrollTop <= scrollContainer.clientHeight + 50;
            if (isAtBottom) {
                const lastId = sections[sections.length - 1].getAttribute('id');
                tocLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${lastId}`);
                });
            }
        }, { passive: true });
    }

    // 3. High-Fidelity Magnetic Interaction for Share Hub
    shareItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Magnetic drift (30% intensity)
            item.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            item.style.boxShadow = `0 20px 40px rgba(186, 255, 65, 0.3)`;
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = `translate(0, 0)`;
            item.style.boxShadow = '';
        });
    });
});


/**
 * === VANGUARD CREATIVE FOOTER V2 ENGINE ===
 * Author: Antigravity (2026 Elite)
 * Description: High-fidelity clock and mouse-proximity interaction.
 */
const Vanguard_Engine = {
    init: () => {
        Vanguard_Engine.initClock();
        Vanguard_Engine.initObserver();
    },

    initClock: () => {
        const timeEl = document.getElementById('tft-local-time');
        if (!timeEl) return;

        const update = () => {
            const now = new Date();
            const options = {
                timeZone: 'Europe/Berlin',
                hour12: false,
                hour: '2-digit',
                minute: '2-digit'
            };
            timeEl.innerText = now.toLocaleTimeString('en-GB', options);
        };

        update();
        setInterval(update, 1000);
    },


    initObserver: () => {
        // Double-check reveal elements within footer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.tft-vanguard-footer .reveal-up').forEach(el => observer.observe(el));
    }
};

document.addEventListener('DOMContentLoaded', Vanguard_Engine.init);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    Vanguard_Engine.init();
}


/**
 * Realiz Status Bar Logic
 * Handles dynamic local time for selective footer status bars.
 */
(function () {
    "use strict";

    const updateLocalTime = () => {
        const timeElement = document.getElementById('tft-local-time');
        if (!timeElement) return;

        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        timeElement.textContent = now.toLocaleTimeString('en-GB', options);
    };

    // Initialize logic
    const initStatusBar = () => {
        updateLocalTime();
        setInterval(updateLocalTime, 1000);

        // Ensure Lucide icons are initialized for dynamically added parts or restored sections
        if (window.lucide && lucide.createIcons) {
            lucide.createIcons();
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initStatusBar);
    } else {
        initStatusBar();
    }
})();

/**
 * TFT_Theme: Sovereign Elite Modules (2026)
 */
const TFT_Theme_Elite = {
    init: function () {
        this.initHUD();
        this.initMagneticHover();
    },
    initHUD: function () {
        const timer = document.getElementById("tft-h6-timer");
        if (timer) {
            setInterval(() => {
                const now = new Date();
                const timeStr = now.toLocaleTimeString("en-GB", { hour12: false });
                timer.innerText = timeStr;
            }, 1000);
        }
    },
    initMagneticHover: function () {
        const rows = document.querySelectorAll(".h6-row");
        rows.forEach(row => {
            const title = row.querySelector("h3");
            if (!title) return;
            row.addEventListener("mousemove", (e) => {
                const rect = row.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) * 0.1;
                const y = (e.clientY - rect.top - rect.height / 2) * 0.1;
                title.style.transform = "translate(" + x + "px, " + y + "px)";
            });
            row.addEventListener("mouseleave", () => {
                title.style.transform = "translate(0, 0)";
            });
        });
    }
};
document.addEventListener("DOMContentLoaded", () => TFT_Theme_Elite.init());

/* === HOME 4 POLISH === */
(function () {
    "use strict";

    const TFT_Home4 = {
        init: function () {
            if (!document.body.classList.contains('tft-page-home-4')) return;
            this.initParallax();
            this.initMagneticIcons();
            console.log('Realiz Home-4 Editorial Engine Active');
        },
        initParallax: function () {
            const cols = document.querySelectorAll('.tft-v4-col');
            cols.forEach(col => {
                const bg = col.querySelector('.tft-v4-col__bg');
                if (!bg) return;
                col.addEventListener('mousemove', (e) => {
                    const { left, top, width, height } = col.getBoundingClientRect();
                    const x = (e.clientX - left) / width;
                    const y = (e.clientY - top) / height;
                    const moveX = (x - 0.5) * 40;
                    const moveY = (y - 0.5) * 40;
                    bg.style.transform = `scale(1.15) translate(${moveX}px, ${moveY}px)`;
                });
                col.addEventListener('mouseleave', () => {
                    bg.style.transform = `scale(1) translate(0, 0)`;
                });
            });
        },
        initMagneticIcons: function () {
            const icon = document.querySelector('.tft-v4-aside__interactive-icon');
            if (!icon) return;
            icon.addEventListener('mousemove', (e) => {
                const { left, top, width, height } = icon.getBoundingClientRect();
                const centerX = left + width / 2;
                const centerY = top + height / 2;
                const moveX = (e.clientX - centerX) * 0.5;
                const moveY = (e.clientY - centerY) * 0.5;
                icon.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.15}deg)`;
            });
            icon.addEventListener('mouseleave', () => {
                icon.style.transform = `translate(0, 0) rotate(0deg)`;
            });
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => TFT_Home4.init());
    } else {
        TFT_Home4.init();
    }
})();


/**
 * MASTER MENU ENGINE V3 (2026 EDITION)
 * Synchronizes body.menu-active class and dynamic logo swapping (Logo1 -> Logo2).
 */
(function () {
    "use strict";

    const initMasterMenu = () => {
        const toggles = document.querySelectorAll('.menu-toggle');
        const panel = document.getElementById('menu-panel');
        if (!panel || !toggles.length) return;

        let isGlobalOpen = false;

        const updateState = (open) => {
            isGlobalOpen = open;
            document.body.classList.toggle('menu-active', isGlobalOpen);
            panel.classList.toggle('menu-open', isGlobalOpen);
            panel.style.transform = isGlobalOpen ? 'translateX(0)' : 'translateX(-100%)';
            toggles.forEach(btn => btn.classList.toggle('menu-open', isGlobalOpen));

            // DYNAMIC LOGO SWAP: Transition from logo1 (normal) to logo2 (active)
            const mobileLogo = document.querySelector('header.fixed img');
            if (mobileLogo) {
                mobileLogo.src = isGlobalOpen ? 'assets/img/logo2.png' : 'assets/img/logo1.png';
            }
        };

        toggles.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                updateState(!isGlobalOpen);
            });
        });

        if (window.lucide && lucide.createIcons) {
            lucide.createIcons();
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMasterMenu);
    } else {
        initMasterMenu();
    }
})();


/* ==========================================================================
   INDEX SLIDER EVOLUTION v2.0 (Optical Expansion & Pan)
   - Replaces 3D Tilt with Premium Lens-Style Movement
   - Implements Smooth Damping (ES2026 Core)
   ========================================================================== */
(function () {
    "use strict";

    function initOpticalFX() {
        const slider = document.getElementById('slider-container');
        const mediaLayer = document.getElementById('slider-media-layer');
        if (!slider || !mediaLayer || !document.body.classList.contains('tft-page-index')) return;

        let targetX = 0, targetY = 0;
        let currentX = 0, currentY = 0;
        const damping = 0.075; // Ultra-smooth fluid damping

        slider.addEventListener('mousemove', (e) => {
            const rect = slider.getBoundingClientRect();
            // Normalized offset from center (-0.5 to 0.5)
            const relX = ((e.clientX - rect.left) / rect.width) - 0.5;
            const relY = ((e.clientY - rect.top) / rect.height) - 0.5;

            // Inverse Pan (Image moves opposite to mouse for depth feel)
            targetX = relX * -40;
            targetY = relY * -40;
        });

        slider.addEventListener('mouseleave', () => {
            targetX = 0;
            targetY = 0;
        });

        function animate() {
            // Fluid Interpolation
            currentX += (targetX - currentX) * damping;
            currentY += (targetY - currentY) * damping;

            // Update CSS Variables for the transform
            mediaLayer.style.setProperty('--mx', `${currentX.toFixed(2)}px`);
            mediaLayer.style.setProperty('--my', `${currentY.toFixed(2)}px`);

            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initOpticalFX);
    } else {
        initOpticalFX();
    }
})();

/**
 * ==============================================
 * HOME 8: AURORA PULSE MOTION ENGINE
 * ==============================================
 */
(function () {
    "use strict";

    const AuroraEngine = {
        current: 0,
        total: 4,
        isTransitioning: false,
        snakes: [],
        mouse: { x: 0, y: 0, lx: 0, ly: 0 },

        init: function () {
            if (!document.body.classList.contains('tft-page-home-8')) return;

            this.cacheElements();
            this.bindEvents();
            this.initSnakes();
            this.updateUI();
            this.startLoop();
        },

        cacheElements: function () {
            this.stage = document.getElementById('aurora-stage');
            this.slides = document.querySelectorAll('.tft-aurora__slide');
            this.curtain = document.createElement('div');
            this.curtain.className = 'tft-aurora__curtain';
            this.stage.appendChild(this.curtain);

            this.prog = document.getElementById('aurora-prog');
            this.countCur = document.getElementById('aurora-count-cur');
            this.cursor = document.getElementById('aurora-cursor');
            this.svgPaths = document.querySelectorAll('.tft-aurora__path');
        },

        bindEvents: function () {
            document.getElementById('aurora-next').addEventListener('click', () => this.next());
            document.getElementById('aurora-prev').addEventListener('click', () => this.prev());

            window.addEventListener('mousemove', (e) => {
                this.mouse.x = e.clientX;
                this.mouse.y = e.clientY;
            });

            // Wheel support
            window.addEventListener('wheel', (e) => {
                if (this.isTransitioning) return;
                if (e.deltaY > 50) this.next();
                if (e.deltaY < -50) this.prev();
            }, { passive: true });
        },

        initSnakes: function () {
            this.svgPaths.forEach((path, i) => {
                this.snakes.push({
                    el: path,
                    offset: Math.random() * 4000,
                    speed: 0.3 + Math.random() * 1.0
                });
            });
        },

        pathSets: [
            [
                "M -100 500 C 100 200 400 800 700 500 S 1100 200 1300 500",
                "M -100 600 C 200 300 500 900 800 600 S 1200 300 1400 600",
                "M -100 400 C 0 100 300 700 600 400 S 1000 100 1200 400",
                "M -100 700 C 300 400 600 1000 900 700 S 1300 400 1500 700"
            ],
            [
                "M -100 400 C 200 700 500 200 800 400 S 1100 700 1300 400",
                "M -100 300 C 300 600 600 100 900 300 S 1200 600 1500 300",
                "M -100 500 C 100 800 400 300 700 500 S 1000 800 1200 500",
                "M -100 600 C 400 900 700 400 1000 600 S 1300 900 1600 600"
            ],
            [
                "M -100 200 C 300 200 300 800 700 800 S 1100 800 1300 200",
                "M -100 300 C 200 300 400 700 800 700 S 1200 700 1400 300",
                "M -100 100 C 400 100 200 900 600 900 S 1000 900 1200 100",
                "M -100 400 C 500 400 100 600 900 600 S 1300 600 1500 400"
            ],
            [
                "M -100 800 C 100 400 400 400 700 800 S 1100 400 1300 800",
                "M -100 700 C 200 500 500 500 800 700 S 1200 500 1400 700",
                "M -100 900 C 0 300 300 300 600 900 S 1000 300 1200 900",
                "M -100 600 C 300 200 600 200 900 600 S 1300 200 1500 600"
            ]
        ],

        next: function () {
            if (this.isTransitioning) return;
            this.goto((this.current + 1) % this.total);
        },

        prev: function () {
            if (this.isTransitioning) return;
            this.goto((this.current - 1 + this.total) % this.total);
        },

        updatePaths: function () {
            const randomSet = this.pathSets[Math.floor(Math.random() * this.pathSets.length)];
            const brandLime = '#c3ff06';

            this.svgPaths.forEach((path, i) => {
                if (randomSet[i]) {
                    path.setAttribute('d', randomSet[i]);
                    path.style.stroke = brandLime;
                    path.style.filter = `drop-shadow(0 0 20px ${brandLime})`;
                }
            });
        },

        goto: function (index) {
            if (this.isTransitioning) return;
            this.isTransitioning = true;

            const prevIndex = this.current;
            this.current = index;

            // 0. Trigger 'Mad' Glitch State for Lines
            this.svgPaths.forEach(p => p.classList.add('glitching'));

            // 1. Update Paths (Organic Morph)
            setTimeout(() => {
                this.updatePaths();
            }, 300); // Wait for blur peak

            // 2. Trigger Global Transition State (Lens Blur)
            this.stage.classList.add('tft-aurora--transitioning');

            // 3. Outgoing Slide Transformation
            const prevSlide = this.slides[prevIndex];
            if (prevSlide) prevSlide.classList.add('exiting');

            setTimeout(() => {
                // 4. Swap Active States
                this.slides.forEach(s => {
                    s.classList.remove('active');
                    s.classList.remove('exiting');
                });
                this.slides[this.current].classList.add('active');
                this.updateUI();
            }, 600); // 1:1 sync with CSS blur peak

            setTimeout(() => {
                this.stage.classList.remove('tft-aurora--transitioning');
                this.svgPaths.forEach(p => p.classList.remove('glitching'));
                this.isTransitioning = false;
            }, 1200);
        },

        updateUI: function () {
            if (this.prog) this.prog.style.width = `${((this.current + 1) / this.total) * 100}%`;
            if (this.countCur) this.countCur.innerText = `0${this.current + 1}`;
        },

        startLoop: function () {
            const loop = () => {
                // 1. Clean Stage: Mouse interaction removed per Studio spec
                // Mouse coordinates are only captured for potential hover effects, not stage translation

                // 2. Snake Organic Pulse (Always Running for Subtle Motion)
                this.snakes.forEach(snake => {
                    if (snake.el) {
                        snake.offset -= snake.speed;
                        snake.el.style.strokeDashoffset = snake.offset;
                    }
                });

                requestAnimationFrame(loop);
            };
            requestAnimationFrame(loop);
        }



    };

    document.addEventListener('DOMContentLoaded', () => AuroraEngine.init());
})();







/* ThemeForest packaging cleanup behaviors */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-accordion-toggle]').forEach(function (el) {
        var id = el.getAttribute('data-accordion-toggle');
        var handler = function (ev) {
            if (ev.type === 'keydown' && !(ev.key === 'Enter' || ev.key === ' ')) { return; }
            if (ev.type === 'keydown') { ev.preventDefault(); }
            if (typeof window.toggleAccordion === 'function') { window.toggleAccordion(id); }
        };
        el.addEventListener('click', handler);
        el.addEventListener('keydown', handler);
    });
    document.querySelectorAll('[data-scroll-top], .tft-back-to-top').forEach(function (el) {
        el.addEventListener('click', function (ev) {
            ev.preventDefault();
            if (typeof window.realizScrollTop === 'function') {
                window.realizScrollTop();
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            return false;
        });
    });
    document.querySelectorAll('[data-action="reload"]').forEach(function (el) {
        el.addEventListener('click', function () { window.location.reload(); });
    });
});
