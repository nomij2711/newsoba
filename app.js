/**
 * Sohaib AC Technician - Enhanced User Experience JavaScript
 * This file contains additional functionality to improve user experience
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeComponents();
    
    // Check for service worker updates
    checkForUpdates();
    
    // Add smooth scrolling
    addSmoothScrolling();
    
    // Add lazy loading for images
    lazyLoadImages();
    
    // Add form validation
    validateForms();
    
    // Add offline detection
    detectOfflineStatus();
});

/**
 * Initialize all UI components
 */
function initializeComponents() {
    // Initialize mobile navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Initialize FAQ accordions
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        
        if (header) {
            header.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        const otherContent = otherItem.querySelector('.faq-content');
                        if (otherContent) {
                            otherContent.style.maxHeight = null;
                        }
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
                const content = item.querySelector('.faq-content');
                
                if (content) {
                    if (item.classList.contains('active')) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                    } else {
                        content.style.maxHeight = null;
                    }
                }
            });
        }
    });
    
    // Initialize gallery filters
    const filterButtons = document.querySelectorAll('.gallery-filter button');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const filter = button.getAttribute('data-filter');
                
                // Show/hide gallery items based on filter
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Add animation on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
}

/**
 * Check for service worker updates
 */
function checkForUpdates() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            window.location.reload();
        });
    }
}

/**
 * Add smooth scrolling to all links
 */
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (hamburger) hamburger.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Lazy load images for better performance
 */
function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imgObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
}

/**
 * Validate forms before submission
 */
function validateForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                    
                    // Add error message if not already present
                    let errorMessage = field.nextElementSibling;
                    if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                        errorMessage = document.createElement('div');
                        errorMessage.classList.add('error-message');
                        errorMessage.textContent = 'هذا الحقل مطلوب';
                        field.parentNode.insertBefore(errorMessage, field.nextSibling);
                    }
                } else {
                    field.classList.remove('error');
                    
                    // Remove error message if present
                    const errorMessage = field.nextElementSibling;
                    if (errorMessage && errorMessage.classList.contains('error-message')) {
                        errorMessage.remove();
                    }
                    
                    // Validate email format
                    if (field.type === 'email' && !isValidEmail(field.value)) {
                        isValid = false;
                        field.classList.add('error');
                        
                        let errorMessage = field.nextElementSibling;
                        if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                            errorMessage = document.createElement('div');
                            errorMessage.classList.add('error-message');
                            errorMessage.textContent = 'يرجى إدخال بريد إلكتروني صحيح';
                            field.parentNode.insertBefore(errorMessage, field.nextSibling);
                        }
                    }
                    
                    // Validate phone format
                    if (field.type === 'tel' && !isValidPhone(field.value)) {
                        isValid = false;
                        field.classList.add('error');
                        
                        let errorMessage = field.nextElementSibling;
                        if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                            errorMessage = document.createElement('div');
                            errorMessage.classList.add('error-message');
                            errorMessage.textContent = 'يرجى إدخال رقم هاتف صحيح';
                            field.parentNode.insertBefore(errorMessage, field.nextSibling);
                        }
                    }
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                // Scroll to first error
                const firstError = form.querySelector('.error');
                if (firstError) {
                    window.scrollTo({
                        top: firstError.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
        
        // Remove error class on input
        form.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('input', function() {
                this.classList.remove('error');
                
                // Remove error message if present
                const errorMessage = this.nextElementSibling;
                if (errorMessage && errorMessage.classList.contains('error-message')) {
                    errorMessage.remove();
                }
            });
        });
    });
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Validate phone format
 */
function isValidPhone(phone) {
    // Allow Saudi Arabia format: +966XXXXXXXXX or 05XXXXXXXX
    const re = /^(\+966|05)[0-9]{8,9}$/;
    return re.test(phone.replace(/\s/g, ''));
}

/**
 * Detect offline status and show notification
 */
function detectOfflineStatus() {
    const showOfflineNotification = () => {
        if (document.querySelector('.offline-notification')) return;
        
        const notification = document.createElement('div');
        notification.className = 'offline-notification';
        notification.innerHTML = `
            <div class="offline-notification-content">
                <i class="fas fa-wifi-slash"></i>
                <span>أنت غير متصل بالإنترنت حالياً. بعض الميزات قد لا تعمل بشكل صحيح.</span>
                <button class="close-notification"><i class="fas fa-times"></i></button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Add close button functionality
        notification.querySelector('.close-notification').addEventListener('click', () => {
            notification.remove();
        });
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.classList.add('hiding');
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
    };
    
    const hideOfflineNotification = () => {
        const notification = document.querySelector('.offline-notification');
        if (notification) {
            notification.classList.add('hiding');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    };
    
    // Check initial state
    if (!navigator.onLine) {
        showOfflineNotification();
    }
    
    // Listen for online/offline events
    window.addEventListener('online', hideOfflineNotification);
    window.addEventListener('offline', showOfflineNotification);
}

// Add CSS for offline notification
const style = document.createElement('style');
style.textContent = `
.offline-notification {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    background-color: #333;
    color: white;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    max-width: 400px;
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.3s, transform 0.3s;
}

.offline-notification.hiding {
    opacity: 0;
    transform: translateY(-20px);
}

.offline-notification-content {
    display: flex;
    align-items: center;
    padding: 15px 20px;
}

.offline-notification i.fa-wifi-slash {
    font-size: 1.2rem;
    margin-left: 10px;
    color: #e74c3c;
}

.offline-notification span {
    flex: 1;
}

.close-notification {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 5px;
    margin-right: 10px;
}

.error-message {
    color: #e74c3c;
    font-size: 0.85rem;
    margin-top: 5px;
}

input.error, textarea.error, select.error {
    border-color: #e74c3c !important;
}

.animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s, transform 0.8s;
}

.animate-on-scroll.animated {
    opacity: 1;
    transform: translateY(0);
}
`;

document.head.appendChild(style);