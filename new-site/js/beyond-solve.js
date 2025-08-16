/**
 * Beyond MediSpa - Solve Clinics Style JavaScript
 * Handles all interactions including mega menu, testimonial carousel, sticky elements
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. STICKY HEADER
    // ============================================
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class for styling changes
        if (currentScroll > 1) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ============================================
    // 2. STICKY BOOKING CTA
    // ============================================
    const stickyCTA = document.getElementById('stickyCTA');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            stickyCTA.classList.add('sticky-cta--visible');
        } else {
            stickyCTA.classList.remove('sticky-cta--visible');
        }
    });
    
    // ============================================
    // 3. TESTIMONIAL CAROUSEL
    // ============================================
    const testimonialTrack = document.getElementById('testimonialTrack');
    const testimonials = testimonialTrack ? testimonialTrack.querySelectorAll('.testimonial') : [];
    const dots = document.querySelectorAll('.carousel__dot');
    const prevBtn = document.querySelector('.carousel__btn--prev');
    const nextBtn = document.querySelector('.carousel__btn--next');
    
    let currentTestimonial = 0;
    const totalTestimonials = testimonials.length;
    
    function showTestimonial(index) {
        if (testimonialTrack) {
            // Update track position
            testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
            
            // Update dots
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('carousel__dot--active');
                } else {
                    dot.classList.remove('carousel__dot--active');
                }
            });
        }
    }
    
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }
    
    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }
    
    // Attach carousel controls
    if (nextBtn) {
        nextBtn.addEventListener('click', nextTestimonial);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', prevTestimonial);
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
        });
    });
    
    // Auto-rotate testimonials
    if (testimonials.length > 0) {
        setInterval(nextTestimonial, 5000);
    }
    
    // ============================================
    // 4. MOBILE MENU
    // ============================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav__menu');
    const body = document.body;
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav__menu--active');
            mobileMenuToggle.classList.toggle('mobile-menu-toggle--active');
            body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav') && !e.target.closest('.mobile-menu-toggle')) {
                navMenu.classList.remove('nav__menu--active');
                mobileMenuToggle.classList.remove('mobile-menu-toggle--active');
                body.classList.remove('menu-open');
            }
        });
    }
    
    // ============================================
    // 5. SCROLL ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Add stagger delay for grid items
                if (entry.target.classList.contains('stagger-item')) {
                    const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 60;
                    entry.target.style.animationDelay = `${delay}ms`;
                }
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .stagger-item');
    animatedElements.forEach(el => observer.observe(el));
    
    // ============================================
    // 6. SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // 7. FORM VALIDATION
    // ============================================
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    // Remove error class on input
                    field.addEventListener('input', function() {
                        this.classList.remove('error');
                    });
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                // You can add error message display here
            }
        });
    });
    
    // ============================================
    // 8. LAZY LOADING
    // ============================================
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
    
    // ============================================
    // 9. COUNTER ANIMATION
    // ============================================
    const counters = document.querySelectorAll('.counter');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
    
    // ============================================
    // 10. PHOREST BOOKING INTEGRATION
    // ============================================
    // Pre-select location based on user interaction
    const locationButtons = document.querySelectorAll('[data-location]');
    
    locationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const location = this.getAttribute('data-location');
            // Store location preference
            localStorage.setItem('beyondLocation', location);
            
            // Update Phorest booking links with location parameter
            const bookingLinks = document.querySelectorAll('a[href*="phorest.com"]');
            bookingLinks.forEach(link => {
                const href = link.getAttribute('href');
                // Add location parameter to Phorest URL
                link.setAttribute('href', `${href}?location=${location}`);
            });
        });
    });
    
    // ============================================
    // 11. MOBILE MENU STYLES
    // ============================================
    // Add mobile menu CSS dynamically
    const mobileMenuStyles = `
        @media (max-width: 1024px) {
            .nav__menu {
                position: fixed;
                top: 0;
                right: -100%;
                width: 80%;
                max-width: 400px;
                height: 100vh;
                background: var(--white);
                box-shadow: -2px 0 10px rgba(0,0,0,0.1);
                padding: 80px 30px;
                overflow-y: auto;
                transition: right var(--transition-normal);
                z-index: 999;
            }
            
            .nav__menu--active {
                right: 0;
            }
            
            .nav__menu ul {
                flex-direction: column;
                gap: 0;
            }
            
            .nav__item {
                border-bottom: 1px solid var(--light-gray);
            }
            
            .nav__link {
                padding: 15px 0;
                display: block;
            }
            
            .mega-menu {
                position: static;
                opacity: 1;
                visibility: visible;
                transform: none;
                box-shadow: none;
                padding: 0 0 15px 20px;
                margin: 0;
            }
            
            .mobile-menu-toggle--active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .mobile-menu-toggle--active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-toggle--active span:nth-child(3) {
                transform: rotate(-45deg) translate(5px, -5px);
            }
            
            body.menu-open {
                overflow: hidden;
            }
            
            body.menu-open::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 998;
            }
        }
        
        /* Additional responsive styles for diagnostic section */
        .diagnostic__wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-3xl);
            align-items: center;
        }
        
        .diagnostic__features {
            list-style: none;
            margin: var(--space-lg) 0;
        }
        
        .diagnostic__features li {
            padding: var(--space-sm) 0;
            display: flex;
            align-items: center;
            gap: var(--space-md);
        }
        
        .diagnostic__features i {
            color: var(--primary);
        }
        
        .diagnostic__image img {
            width: 100%;
            height: auto;
            border-radius: var(--radius-lg);
        }
        
        @media (max-width: 768px) {
            .diagnostic__wrapper {
                grid-template-columns: 1fr;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = mobileMenuStyles;
    document.head.appendChild(styleSheet);
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function to limit how often a function can fire
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}