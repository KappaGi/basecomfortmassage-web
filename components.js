// components.js - Shared HTML components for all pages
// Performance: Zero network requests, synchronous rendering, browser-cacheable

/**
 * Get Footer Component
 * Returns the complete footer HTML
 * No parameters needed - footer is identical across all pages
 */
function getFooter() {
    return `
    <footer class="footer bg-base-gray py-[60px] md:py-16 xl:py-20 2xl:py-24 px-5 md:px-12 xl:px-16 2xl:px-20 border-t border-base-gold text-base-text">
        <div class="footer-content max-w-7xl xl:max-w-[90rem] 2xl:max-w-[110rem] mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-20 xl:gap-24 2xl:gap-28">
            <div class="footer-main">
                <div class="flex items-start justify-between md:block">
                    <a href="index.html" class="footer-logo mb-0 md:mb-2 xl:mb-3 2xl:mb-4 inline-block">
                        <img src="assets/logo_base_new.png" alt="Base Comfort" class="h-16 md:h-20 xl:h-24 2xl:h-28 w-auto cursor-pointer">
                    </a>
                    <div class="md:hidden flex flex-col items-end justify-start gap-1">
                        <p class="footer-contact text-sm font-sans m-0">info@basecomfort.nl</p>
                        <p class="footer-contact text-sm font-sans m-0">+31 30 123 4567</p>
                    </div>
                </div>
                <p class="footer-contact hidden md:block text-sm xl:text-sm 2xl:text-base mb-2.5 xl:mb-3 2xl:mb-4 font-sans">info@basecomfort.nl</p>
                <p class="footer-contact hidden md:block text-sm xl:text-sm 2xl:text-base mb-2.5 xl:mb-3 2xl:mb-4 font-sans">+31 30 123 4567</p>
                <div class="newsletter mt-7 xl:mt-9 2xl:mt-10 flex gap-2.5 xl:gap-3 2xl:gap-4">
                    <input type="email" placeholder="Your email" class="newsletter-input flex-1 py-3 xl:py-4 2xl:py-5 px-5 xl:px-6 2xl:px-7 border border-base-text rounded-full text-sm xl:text-sm 2xl:text-base bg-transparent font-sans text-base-text placeholder:text-base-text/70">
                    <button class="btn-newsletter bg-base-olive border border-base-olive text-white py-[14px] px-8 text-[15px] rounded-[40px] md:py-3 md:px-7 md:text-sm md:rounded-full xl:py-4 xl:px-9 2xl:py-5 2xl:px-11 xl:text-sm 2xl:text-base font-serif cursor-pointer transition-all duration-300 hover:bg-base-gold hover:border-base-gold">Subscribe</button>
                </div>
            </div>

            <div class="footer-columns grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 xl:gap-8 2xl:gap-10">
                <div class="footer-column footer-accordion">
                    <h4 class="footer-accordion-header text-lg xl:text-lg 2xl:text-xl mb-2 xl:mb-3 2xl:mb-4 cursor-pointer md:cursor-default flex justify-between items-center">
                        Location
                        <span class="footer-accordion-icon md:hidden">+</span>
                    </h4>
                    <div class="footer-accordion-content md:block">
                        <p class="text-sm xl:text-sm 2xl:text-base leading-relaxed font-sans">Oudegracht 123<br>3511 AB Utrecht<br>The Netherlands</p>
                    </div>
                </div>

                <div class="footer-column footer-accordion">
                    <h4 class="footer-accordion-header text-lg xl:text-lg 2xl:text-xl mb-2 xl:mb-3 2xl:mb-4 cursor-pointer md:cursor-default flex justify-between items-center">
                        Info
                        <span class="footer-accordion-icon md:hidden">+</span>
                    </h4>
                    <div class="footer-accordion-content md:block">
                        <a href="#contact" class="block text-base-text no-underline text-sm xl:text-sm 2xl:text-base mb-2.5 xl:mb-3 2xl:mb-4 font-sans transition-opacity duration-300 hover:opacity-60">Contact</a>
                        <a href="#terms" class="block text-base-text no-underline text-sm xl:text-sm 2xl:text-base mb-2.5 xl:mb-3 2xl:mb-4 font-sans transition-opacity duration-300 hover:opacity-60">Terms & Conditions</a>
                    </div>
                </div>

                <div class="footer-column footer-accordion">
                    <h4 class="footer-accordion-header text-lg xl:text-lg 2xl:text-xl mb-2 xl:mb-3 2xl:mb-4 cursor-pointer md:cursor-default flex justify-between items-center">
                        Follow us
                        <span class="footer-accordion-icon md:hidden">+</span>
                    </h4>
                    <div class="footer-accordion-content md:block">
                        <a href="#facebook" class="block text-base-text no-underline text-sm xl:text-sm 2xl:text-base mb-2.5 xl:mb-3 2xl:mb-4 font-sans transition-opacity duration-300 hover:opacity-60">Facebook</a>
                        <a href="#instagram" class="block text-base-text no-underline text-sm xl:text-sm 2xl:text-base mb-2.5 xl:mb-3 2xl:mb-4 font-sans transition-opacity duration-300 hover:opacity-60">Instagram</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom border-t border-base-text/20 pt-5 xl:pt-6 2xl:pt-8 mt-7 xl:mt-9 2xl:mt-10 text-center">
            <p class="copyright text-sm xl:text-sm 2xl:text-base m-0 mb-2 xl:mb-3 2xl:mb-4 font-sans">All rights reserved - Base Comfort 2025</p>
            <div class="footer-legal flex justify-center gap-4 xl:gap-5 2xl:gap-6 m-0 p-0">
                <a href="#privacy" class="text-base-text no-underline text-sm xl:text-sm 2xl:text-base font-sans transition-opacity duration-300 hover:opacity-60">Privacy policy</a>
                <a href="#terms" class="text-base-text no-underline text-sm xl:text-sm 2xl:text-base font-sans transition-opacity duration-300 hover:opacity-60">Terms & Conditions</a>
            </div>
        </div>
    </footer>`;
}

/**
 * Get Opening Hours Component
 * Returns the opening hours section HTML
 * Standardized to massages.html version (card style with rounded top)
 */
function getOpeningHours() {
    return `
    <section class="opening-hours bg-base-tan py-16 md:py-20 xl:py-24 2xl:py-28 px-5 md:px-12 xl:px-16 2xl:px-20 border-t border-base-gold">
        <div class="hours-card max-w-5xl mx-auto h-[400px] md:h-[450px] xl:h-[500px] 2xl:h-[550px] bg-cover bg-center rounded-t-[200px] md:rounded-t-[225px] xl:rounded-t-[250px] 2xl:rounded-t-[275px] border border-base-gold flex flex-col items-center justify-center text-center text-white p-12 md:p-16 xl:p-20 2xl:p-24" style="background-image: url('assets/open.png');">
            <p class="hours-subtitle text-xs md:text-sm xl:text-sm 2xl:text-base tracking-widest mb-4 md:mb-5 font-sans">MON – SUN</p>
            <h2 class="hours-title text-3xl md:text-4xl xl:text-[3.5rem] 2xl:text-6xl italic mb-8 md:mb-10">Open from Monday to Sunday</h2>
            <button class="btn-primary bg-base-olive border border-base-olive text-white py-3 md:py-4 px-8 md:px-11 rounded-full text-sm md:text-base xl:text-sm 2xl:text-base italic font-serif cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-base-gold hover:border-base-gold">Book your Massage</button>
        </div>
    </section>`;
}

/**
 * Get Mobile Menu Component
 * Returns the mobile menu HTML
 * @param {string} activePage - Current page identifier ('home' or 'massages')
 */
function getMobileMenu(activePage) {
    // Determine active state for massages link
    const massagesActive = activePage === 'massages' ? 'active' : '';

    // Determine link hrefs based on current page
    const giftHref = activePage === 'home' ? '#gift' : 'index.html#gift';
    const aboutHref = activePage === 'home' ? '#about' : 'index.html#about';

    return `
    <div class="mobile-menu fixed inset-0 z-[999] pointer-events-none opacity-0 transition-opacity duration-500" id="mobileMenu">
        <div class="mobile-menu-overlay absolute inset-0 bg-black/50" id="menuOverlay"></div>
        <div class="mobile-menu-content absolute top-0 left-0 w-4/5 max-w-sm h-full bg-base-cream transform -translate-x-full transition-transform duration-500 ease-in-out shadow-2xl overflow-y-auto">
            <ul class="mobile-menu-list pt-24 pb-8">
                <li class="mobile-menu-item border-b border-base-gold/20"><a href="massages.html" class="${massagesActive} block py-5 px-8 text-base-text no-underline text-lg transition-colors duration-300 hover:bg-base-gray/30">Massages</a></li>
                <li class="mobile-menu-item border-b border-base-gold/20"><a href="${giftHref}" class="block py-5 px-8 text-base-text no-underline text-lg transition-colors duration-300 hover:bg-base-gray/30">Gift cards</a></li>
                <li class="mobile-menu-item border-b border-base-gold/20"><a href="${aboutHref}" class="block py-5 px-8 text-base-text no-underline text-lg transition-colors duration-300 hover:bg-base-gray/30">About us</a></li>
                <li class="mobile-menu-item border-b border-base-gold/20"><a href="#contact" class="block py-5 px-8 text-base-text no-underline text-lg transition-colors duration-300 hover:bg-base-gray/30">Contact</a></li>
                <li class="mobile-menu-item mobile-menu-cta"><a href="https://basecomfortmassage.setmore.com" target="_blank" class="block mt-8 mx-8 py-4 text-center bg-base-olive text-white no-underline text-lg font-bold rounded-full transition-colors duration-300 hover:bg-base-gold">Book Now</a></li>
            </ul>
        </div>
    </div>`;
}

/**
 * Get Navbar Component
 * Returns the complete navigation bar HTML
 * @param {string} activePage - Current page identifier ('home' or 'massages')
 */
function getNavbar(activePage) {
    // Determine active state for massages link
    const massagesActive = activePage === 'massages' ? 'active' : '';

    // Determine link hrefs based on current page
    const giftHref = activePage === 'home' ? '#gift' : 'index.html#gift';
    const aboutHref = activePage === 'home' ? '#about' : 'index.html#about';

    return `
    <nav class="navbar fixed top-0 left-0 right-0 z-[1001] py-1.5 px-5 md:px-12 xl:py-2 2xl:py-2.5 xl:px-16 2xl:px-20" id="navbar">
        <div class="relative flex justify-between items-center max-w-7xl xl:max-w-[90rem] 2xl:max-w-[110rem] mx-auto">
            <!-- Mobile: Hamburger only -->
            <div class="flex md:hidden items-center">
                <button class="hamburger flex flex-col justify-between w-7 h-[18px] bg-transparent border-0 cursor-pointer p-0 z-[1002] relative" id="hamburger">
                    <span class="hamburger-line w-full h-0.5 bg-base-tan transition-all duration-300"></span>
                    <span class="hamburger-line w-full h-0.5 bg-base-tan transition-all duration-300"></span>
                </button>
            </div>

            <!-- Desktop: Logo on the left -->
            <div class="hidden md:flex items-center">
                <a href="index.html">
                    <img src="assets/logo_base_new_round.png" alt="Base Comfort" class="logo h-[70px] xl:h-[85px] 2xl:h-[100px] w-auto transition-opacity duration-300 object-contain bg-transparent mix-blend-multiply block align-middle" id="logoImg">
                </a>
            </div>

            <!-- Mobile: Logo centered -->
            <div class="flex md:hidden justify-center flex-1">
                <a href="index.html">
                    <img src="assets/logo_base_new.png" alt="Base Comfort" class="logo h-[60px] w-auto transition-opacity duration-300 object-contain bg-transparent mix-blend-multiply block align-middle">
                </a>
            </div>

            <!-- Desktop: Navigation links centered absolutely -->
            <div class="hidden md:flex gap-7 xl:gap-9 2xl:gap-12 items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <a href="massages.html" class="desktop-nav ${massagesActive} text-base-tan no-underline text-sm xl:text-sm 2xl:text-base font-semibold transition-all duration-300 relative pb-1.5 font-sans hover:opacity-70">Massages</a>
                <a href="${giftHref}" class="desktop-nav text-base-tan no-underline text-sm xl:text-sm 2xl:text-base font-semibold transition-all duration-300 relative pb-1.5 font-sans hover:opacity-70">Gift cards</a>
                <a href="${aboutHref}" class="desktop-nav text-base-tan no-underline text-sm xl:text-sm 2xl:text-base font-semibold transition-all duration-300 relative pb-1.5 font-sans hover:opacity-70">About us</a>
            </div>

            <!-- Mobile: Book Now button only -->
            <div class="flex md:hidden items-center">
                <button class="btn-primary bg-base-olive border border-base-olive text-white py-2 px-4 text-[12px] rounded-[40px] italic font-serif cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-base-gold hover:border-base-gold">Book Now</button>
            </div>

            <!-- Desktop: Buttons on the right -->
            <div class="hidden md:flex gap-7 xl:gap-9 2xl:gap-12 items-center justify-end">
                <button class="btn-nav desktop-nav bg-transparent border border-base-tan text-base-tan py-3 px-7 xl:py-4 xl:px-9 2xl:py-5 2xl:px-11 rounded-full cursor-pointer text-sm xl:text-sm 2xl:text-base italic font-serif transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-base-olive hover:text-white hover:border-base-olive">Contact</button>
                <button class="btn-primary bg-base-olive border border-base-olive text-white py-3 px-7 md:rounded-full xl:py-4 xl:px-9 2xl:py-5 2xl:px-11 text-sm xl:text-sm 2xl:text-base italic font-serif cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-base-gold hover:border-base-gold">Book Now</button>
            </div>
        </div>
    </nav>`;
}
