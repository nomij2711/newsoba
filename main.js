/**
 * CoolFix Repairs - Main JavaScript File
 * Handles all interactive elements of the website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initStickyHeader();
    initFaqAccordion();
    initGalleryFilter();
    initScrollAnimation();
    initContactForm();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking on links
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                !hamburger.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-links') && !event.target.closest('.hamburger') && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
        
        // Close menu when clicking on a link
        const menuLinks = navLinks.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
}

/**
 * Sticky Header on Scroll
 */
function initStickyHeader() {
    const header = document.querySelector('header');
    const scrollThreshold = 100;
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }
}

/**
 * FAQ Accordion
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            if (question) {
                question.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Close all other items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                            const otherToggle = otherItem.querySelector('.faq-toggle i');
                            if (otherToggle) {
                                otherToggle.className = 'fas fa-plus';
                            }
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                    
                    // Toggle icon
                    const toggleIcon = item.querySelector('.faq-toggle i');
                    if (toggleIcon) {
                        if (item.classList.contains('active')) {
                            toggleIcon.className = 'fas fa-minus';
                        } else {
                            toggleIcon.className = 'fas fa-plus';
                        }
                    }
                });
            }
        });
    }
}

/**
 * Gallery Filter
 */
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.category-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Show/hide gallery items based on filter
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Trigger click on 'All' button by default
        const allButton = document.querySelector('.category-btn[data-filter="all"]');
        if (allButton) {
            allButton.click();
        }
    }
}

/**
 * Scroll Animation
 */
function initScrollAnimation() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .fade-in, .slide-up');
    
    if (animatedElements.length > 0) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered delay for multiple elements
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                        entry.target.classList.add('visible');
                    }, index * 100);
                    
                    // Stop observing once animated
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all animated elements
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    // Add scroll-based parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            hero.style.transform = `translateY(${parallax}px)`;
        });
    }
    
    // Add floating animation to service icons on scroll
    const serviceIcons = document.querySelectorAll('.service-icon');
    if (serviceIcons.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            serviceIcons.forEach((icon, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = Math.sin(scrolled * 0.01 + index) * 10;
                icon.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

/**
 * Contact Form Validation and Submission
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.classList.add('error');
                }
            }
            
            // If form is valid, submit it (or show success message for demo)
            if (isValid) {
                // For demo purposes, just show a success message in Arabic
                const formContent = contactForm.innerHTML;
                contactForm.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i><h3>شكراً لرسالتك!</h3><p>سنعاود الاتصال بك في أقرب وقت ممكن.</p></div>';
                
                // Reset form after 5 seconds (for demo only)
                setTimeout(() => {
                    contactForm.innerHTML = formContent;
                    contactForm.reset();
                    initContactForm(); // Re-initialize the form
                }, 5000);
                
                // In a real implementation, you would submit the form data to a server
                // using fetch or XMLHttpRequest
            }
        });
        
        // Real-time validation feedback
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.classList.add('error');
                } else {
                    this.classList.remove('error');
                }
                
                // Email validation on blur
                if (this.type === 'email' && this.value.trim()) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(this.value)) {
                        this.classList.add('error');
                    }
                }
            });
        });
    }
}

/**
 * Service Request Form Validation
 */
function initServiceRequestForm() {
    const serviceForm = document.getElementById('service-request-form');
    
    if (serviceForm) {
        serviceForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Similar validation logic as contact form
            let isValid = true;
            const requiredFields = serviceForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // If form is valid, submit it (or show success message for demo)
            if (isValid) {
                // For demo purposes, just show a success message
                const formContent = serviceForm.innerHTML;
                serviceForm.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i><h3>Service Request Received!</h3><p>Our team will contact you shortly to schedule your service.</p></div>';
                
                // Reset form after 5 seconds (for demo only)
                setTimeout(() => {
                    serviceForm.innerHTML = formContent;
                    serviceForm.reset();
                    initServiceRequestForm(); // Re-initialize the form
                }, 5000);
            }
        });
    }
}

/**
 * Testimonial Slider
 * Note: For a real implementation, consider using a library like Swiper.js
 */
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const sliderContainer = document.querySelector('.testimonial-slider');
    
    if (testimonials.length > 0 && sliderContainer) {
        let currentIndex = 0;
        const showTestimonials = 3; // Number of testimonials to show at once
        
        // Create navigation buttons
        const navContainer = document.createElement('div');
        navContainer.className = 'slider-nav';
        
        const prevBtn = document.createElement('button');
        prevBtn.className = 'slider-prev';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'slider-next';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        
        navContainer.appendChild(prevBtn);
        navContainer.appendChild(nextBtn);
        
        sliderContainer.parentNode.appendChild(navContainer);
        
        // Function to update slider
        const updateSlider = () => {
            testimonials.forEach((testimonial, index) => {
                if (index >= currentIndex && index < currentIndex + showTestimonials) {
                    testimonial.style.display = 'block';
                } else {
                    testimonial.style.display = 'none';
                }
            });
        };
        
        // Initialize slider
        updateSlider();
        
        // Event listeners for navigation
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < testimonials.length - showTestimonials) {
                currentIndex++;
                updateSlider();
            }
        });
    }
}