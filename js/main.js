// Main JavaScript file for Beyond Medispa

// Location Management
class LocationManager {
    constructor() {
        this.currentLocation = localStorage.getItem('selectedLocation') || 'location1';
        this.locations = {
            location1: {
                name: 'Downtown',
                address: '123 Main Street, Suite 100',
                phone: '(555) 123-4567',
                prices: {
                    botox: '$12/unit',
                    fillers: 'From $650',
                    hydrafacial: 'From $199',
                    coolsculpting: 'From $750'
                }
            },
            location2: {
                name: 'Uptown',
                address: '456 Oak Avenue, Suite 200',
                phone: '(555) 987-6543',
                prices: {
                    botox: '$14/unit',
                    fillers: 'From $750',
                    hydrafacial: 'From $249',
                    coolsculpting: 'From $850'
                }
            }
        };
        this.init();
    }

    init() {
        // Check if user has selected a location before
        if (!localStorage.getItem('selectedLocation')) {
            this.showLocationModal();
        } else {
            this.updateLocationDisplay();
        }

        // Set up event listeners
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Location switcher button
        const locationSwitcher = document.getElementById('locationSwitcher');
        if (locationSwitcher) {
            locationSwitcher.addEventListener('click', () => this.showLocationModal());
        }

        // Location selection buttons
        const locationBtns = document.querySelectorAll('.location-btn');
        locationBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const location = e.currentTarget.dataset.location;
                this.selectLocation(location);
            });
        });

        // Close modal on outside click
        const modal = document.getElementById('locationModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideLocationModal();
                }
            });
        }
    }

    showLocationModal() {
        const modal = document.getElementById('locationModal');
        if (modal) {
            modal.classList.add('active');
        }
    }

    hideLocationModal() {
        const modal = document.getElementById('locationModal');
        if (modal) {
            modal.classList.remove('active');
        }
    }

    selectLocation(location) {
        this.currentLocation = location;
        localStorage.setItem('selectedLocation', location);
        this.updateLocationDisplay();
        this.hideLocationModal();
    }

    updateLocationDisplay() {
        const locationData = this.locations[this.currentLocation];
        
        // Update current location display
        const currentLocationElements = document.querySelectorAll('.current-location');
        currentLocationElements.forEach(el => {
            el.textContent = locationData.name;
        });

        // Update phone numbers
        const phoneElements = document.querySelectorAll('.location-phone');
        phoneElements.forEach(el => {
            el.textContent = locationData.phone;
        });

        // Update prices
        this.updatePrices();
    }

    updatePrices() {
        const priceElements = document.querySelectorAll('.location-price');
        priceElements.forEach(el => {
            const price1 = el.dataset.location1;
            const price2 = el.dataset.location2;
            
            if (this.currentLocation === 'location1' && price1) {
                el.textContent = price1;
            } else if (this.currentLocation === 'location2' && price2) {
                el.textContent = price2;
            }
        });
    }
}

// Mobile Menu
class MobileMenu {
    constructor() {
        this.menuToggle = document.querySelector('.mobile-menu-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        if (this.menuToggle && this.navMenu) {
            this.menuToggle.addEventListener('click', () => this.toggleMenu());
            
            // Close menu when clicking on a link
            const menuLinks = this.navMenu.querySelectorAll('a');
            menuLinks.forEach(link => {
                link.addEventListener('click', () => this.closeMenu());
            });
        }
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.menuToggle.classList.toggle('active');
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.menuToggle.classList.remove('active');
    }
}

// Smooth Scrolling
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Add smooth scrolling to all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Header Scroll Effect
class HeaderScroll {
    constructor() {
        this.header = document.querySelector('.main-header');
        this.lastScroll = 0;
        this.init();
    }

    init() {
        if (this.header) {
            window.addEventListener('scroll', () => this.handleScroll());
        }
    }

    handleScroll() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            this.header.classList.remove('scroll-up');
            this.header.classList.remove('scroll-down');
            return;
        }

        if (currentScroll > this.lastScroll && !this.header.classList.contains('scroll-down')) {
            // Scrolling down
            this.header.classList.remove('scroll-up');
            this.header.classList.add('scroll-down');
        } else if (currentScroll < this.lastScroll && this.header.classList.contains('scroll-down')) {
            // Scrolling up
            this.header.classList.remove('scroll-down');
            this.header.classList.add('scroll-up');
        }

        this.lastScroll = currentScroll;
    }
}

// Form Validation
class FormValidator {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        if (this.validateForm()) {
            // Form is valid, submit it
            console.log('Form submitted successfully');
            // You can add AJAX submission here
            this.showSuccessMessage();
        }
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        
        // Remove previous error
        this.removeError(field);
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            this.showError(field, 'This field is required');
            isValid = false;
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                this.showError(field, 'Please enter a valid email address');
                isValid = false;
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(value)) {
                this.showError(field, 'Please enter a valid phone number');
                isValid = false;
            }
        }
        
        return isValid;
    }

    showError(field, message) {
        const errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        
        field.classList.add('error');
        field.parentElement.appendChild(errorElement);
    }

    removeError(field) {
        field.classList.remove('error');
        const errorElement = field.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }

    showSuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Thank you for your submission! We'll get back to you soon.</p>
        `;
        
        this.form.appendChild(successMessage);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            this.form.reset();
            successMessage.remove();
        }, 3000);
    }
}

// Image Lazy Loading
class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            this.images.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    }
}

// Animation on Scroll
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.animate-on-scroll');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animated');
                        }
                    });
                },
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -100px 0px'
                }
            );

            this.elements.forEach(el => animationObserver.observe(el));
        }
    }
}

// Gallery Lightbox
class GalleryLightbox {
    constructor() {
        this.galleryImages = document.querySelectorAll('.gallery-image');
        this.init();
    }

    init() {
        if (this.galleryImages.length > 0) {
            this.createLightbox();
            this.addEventListeners();
        }
    }

    createLightbox() {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="" alt="Gallery Image">
                <div class="lightbox-nav">
                    <button class="lightbox-prev"><i class="fas fa-chevron-left"></i></button>
                    <button class="lightbox-next"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        this.lightbox = lightbox;
        this.lightboxImg = lightbox.querySelector('img');
        this.currentIndex = 0;
    }

    addEventListeners() {
        // Open lightbox
        this.galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => this.openLightbox(index));
        });
        
        // Close lightbox
        const closeBtn = this.lightbox.querySelector('.lightbox-close');
        closeBtn.addEventListener('click', () => this.closeLightbox());
        
        // Navigate
        const prevBtn = this.lightbox.querySelector('.lightbox-prev');
        const nextBtn = this.lightbox.querySelector('.lightbox-next');
        
        prevBtn.addEventListener('click', () => this.navigate(-1));
        nextBtn.addEventListener('click', () => this.navigate(1));
        
        // Close on outside click
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.closeLightbox();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.lightbox.classList.contains('active')) {
                if (e.key === 'Escape') this.closeLightbox();
                if (e.key === 'ArrowLeft') this.navigate(-1);
                if (e.key === 'ArrowRight') this.navigate(1);
            }
        });
    }

    openLightbox(index) {
        this.currentIndex = index;
        this.updateLightboxImage();
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    navigate(direction) {
        this.currentIndex += direction;
        
        if (this.currentIndex < 0) {
            this.currentIndex = this.galleryImages.length - 1;
        } else if (this.currentIndex >= this.galleryImages.length) {
            this.currentIndex = 0;
        }
        
        this.updateLightboxImage();
    }

    updateLightboxImage() {
        const img = this.galleryImages[this.currentIndex];
        this.lightboxImg.src = img.dataset.fullsize || img.src;
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    new LocationManager();
    new MobileMenu();
    new SmoothScroll();
    new HeaderScroll();
    new LazyLoader();
    new ScrollAnimations();
    new GalleryLightbox();
    
    // Initialize forms if they exist
    if (document.querySelector('.contact-form')) {
        new FormValidator('.contact-form');
    }
    if (document.querySelector('.booking-form')) {
        new FormValidator('.booking-form');
    }
    
    // Add loading animation to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.classList.contains('loading')) {
                e.preventDefault();
                return;
            }
            
            if (this.getAttribute('type') === 'submit' || 
                this.classList.contains('submit-btn')) {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 2000);
            }
        });
    });
});

// Utility functions
const utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle function for performance
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Format phone numbers
    formatPhone(phone) {
        const cleaned = phone.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return phone;
    }
};

// Export for use in other scripts if needed
window.BeyondMedispa = {
    LocationManager,
    FormValidator,
    utils
};