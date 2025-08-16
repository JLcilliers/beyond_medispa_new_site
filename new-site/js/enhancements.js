// Enhanced JavaScript for Sovous-style features

// Initialize Swiper for testimonials
document.addEventListener('DOMContentLoaded', function() {
    // Testimonials Swiper
    if (document.querySelector('.testimonials-swiper')) {
        new Swiper('.testimonials-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    }

    // Scroll Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optional: Stop observing after reveal
                // scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-scale');
    scrollElements.forEach(el => scrollObserver.observe(el));

    // Parallax Effect
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });

    // Enhanced Mega Menu Interactions
    const megaMenus = document.querySelectorAll('.mega-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        let timeoutId;

        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId);
            dropdown.classList.add('active');
        });

        dropdown.addEventListener('mouseleave', () => {
            timeoutId = setTimeout(() => {
                dropdown.classList.remove('active');
            }, 300);
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Image Gallery Lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            
            document.body.appendChild(lightbox);
            
            // Add active class after a brief delay for animation
            setTimeout(() => lightbox.classList.add('active'), 10);
            
            // Close lightbox
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
                    lightbox.classList.remove('active');
                    setTimeout(() => lightbox.remove(), 300);
                }
            });
        });
    });

    // Header Search Toggle
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        const searchInput = searchForm.querySelector('input');
        
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Implement search functionality
            console.log('Searching for:', searchInput.value);
        });
    }

    // Sticky Header Enhancement
    let lastScroll = 0;
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });

    // Counter Animation for Stats
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

    // Form Validation Enhancement
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
                // Show error message
                const errorMsg = document.createElement('div');
                errorMsg.className = 'form-error-message';
                errorMsg.textContent = 'Please fill in all required fields';
                form.prepend(errorMsg);
                
                setTimeout(() => errorMsg.remove(), 3000);
            }
        });
    });

    // Lazy Loading for Images
    const lazyImages = document.querySelectorAll('img[data-src]');
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
});

// Add CSS for lightbox
const style = document.createElement('style');
style.textContent = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .lightbox.active {
        opacity: 1;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .lightbox-content img {
        width: 100%;
        height: auto;
        display: block;
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 30px;
        cursor: pointer;
        transition: transform 0.3s;
    }
    
    .lightbox-close:hover {
        transform: scale(1.2);
    }
    
    .header-search {
        display: flex;
        align-items: center;
    }
    
    .search-form {
        display: flex;
        align-items: center;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        padding: 5px 15px;
    }
    
    .search-form input {
        background: none;
        border: none;
        color: white;
        padding: 5px;
        width: 150px;
        transition: width 0.3s;
    }
    
    .search-form input:focus {
        width: 200px;
        outline: none;
    }
    
    .search-form input::placeholder {
        color: rgba(255, 255, 255, 0.7);
    }
    
    .search-form button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 5px;
    }
    
    .main-header.scroll-down {
        transform: translateY(-100%);
        transition: transform 0.3s;
    }
    
    .main-header.scroll-up {
        transform: translateY(0);
        transition: transform 0.3s;
    }
    
    .form-error-message {
        background: #dc3545;
        color: white;
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 20px;
        animation: slideDown 0.3s;
    }
    
    @keyframes slideDown {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    input.error {
        border-color: #dc3545 !important;
        box-shadow: 0 0 5px rgba(220, 53, 69, 0.3);
    }
    
    .footer-ratings {
        display: flex;
        justify-content: center;
        gap: 40px;
        padding-bottom: 40px;
        margin-bottom: 40px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .rating-item {
        text-align: center;
        color: white;
    }
    
    .rating-item i {
        font-size: 2rem;
        color: var(--primary-color);
        margin-bottom: 10px;
        display: block;
    }
    
    .rating-score {
        font-size: 1.5rem;
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
    }
    
    .rating-platform {
        font-size: 0.9rem;
        opacity: 0.8;
    }
`;
document.head.appendChild(style);