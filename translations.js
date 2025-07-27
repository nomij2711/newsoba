/**
 * Sohaib AC Technician - Translations File
 * Handles multilingual support for the website
 */

// Define translations for all text content
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About Us",
        nav_gallery: "Gallery",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "Expert AC Repair Services",
        hero_subtitle: "AC | Refrigerator | Oven",
        hero_description: "Professional repairs with guaranteed satisfaction. Fast, reliable service when you need it most.",
        hero_book: "Book a Service",
        hero_call: "Call Now",
        
        // Services Section
        services_title: "Our Services",
        service_ac_title: "AC Repair",
        service_ac_desc: "Expert air conditioning repair, maintenance, and installation services for all brands and models.",
        service_fridge_title: "Refrigerator Repair",
        service_fridge_desc: "Professional refrigerator and freezer repair services to keep your food fresh and safe.",
        service_oven_title: "Oven Repair",
        service_oven_desc: "Comprehensive oven, stove, and range repair services to get your kitchen back in working order.",
        service_maintenance_title: "Maintenance",
        service_installation_title: "Installation",
        service_learn_more: "Learn More",
        
        // Legacy service keys (keeping for backward compatibility)
        ac_repair: "AC Repair & Service",
        ac_desc: "Complete air conditioning repair, maintenance, and installation services for all brands and models.",
        fridge_repair: "Refrigerator Repair",
        fridge_desc: "Expert refrigerator and freezer repair services. We fix cooling issues, ice makers, water dispensers, and more.",
        oven_repair: "Oven & Range Repair",
        oven_desc: "Professional repair services for all types of ovens, ranges, and cooktops. Gas and electric models.",
        view_services: "View All Services",
        
        // Why Choose Us Section
        why_choose_title: "Why Choose Us",
        feature_experts_title: "Expert Technicians",
        feature_experts_desc: "Our certified technicians have years of experience repairing all major brands and models.",
        feature_fast_title: "Fast Service",
        feature_fast_desc: "We offer same-day and emergency repair services to minimize disruption to your daily life.",
        feature_warranty_title: "Warranty",
        feature_warranty_desc: "All our repairs come with a satisfaction guarantee and warranty on parts and labor.",
        feature_pricing_title: "Competitive Pricing",
        feature_pricing_desc: "We offer transparent, fair pricing with no hidden fees or surprise charges.",
        
        // Legacy feature keys (keeping for backward compatibility)
        experience: "Years of Experience",
        experience_desc: "Our technicians have over 15 years of experience repairing all major appliance brands and models.",
        certified: "Certified Technicians",
        certified_desc: "All our repair specialists are fully certified and undergo continuous training on the latest technologies.",
        warranty: "Service Warranty",
        warranty_desc: "We stand behind our work with a 90-day warranty on all parts and labor for your peace of mind.",
        affordable: "Affordable Pricing",
        affordable_desc: "Competitive and transparent pricing with no hidden fees. We provide detailed estimates before starting work.",
        
        // Testimonials Section
        testimonials_title: "What Our Customers Say",
        testimonial_1: "\"The technician was professional, knowledgeable, and fixed my AC in no time. Excellent service!\"",
        testimonial_author_1: "John Smith",
        testimonial_2: "\"My refrigerator stopped working on a Sunday, and they came out the same day. Great emergency service!\"",
        testimonial_author_2: "Sarah Johnson",
        testimonial_3: "\"Fair pricing and excellent work on my oven repair. I'll definitely use their services again.\"",
        testimonial_author_3: "Michael Brown",
        
        // CTA Section
        cta_title: "Need Appliance Repair?",
        cta_description: "Contact us today for fast, reliable service!",
        cta_button: "Get a Quote",
        
        // Legacy CTA keys (keeping for backward compatibility)
        cta_subtitle: "Contact us today to schedule a service appointment!",
        
        // Footer
        footer_tagline: "Professional appliance repair services you can trust.",
        footer_quick_links: "Quick Links",
        footer_our_services: "Our Services",
        footer_contact_us: "Contact Us",
        footer_address: "Ar Rimal, Riyadh 13254, Saudi Arabia",
        footer_phone: "+966 580 743 413",
        footer_email: "shoiberepair@saudi.com",
        footer_copyright: "© 2023 Shoibe Repair. All Rights Reserved.",
        
        // Contact Page
        contact_form_message: "Describe the Issue*",
        contact_form_emergency: "This is an emergency (requires immediate attention)",
        contact_form_submit: "Submit Request",
        contact_emergency_title: "Emergency Service",
        contact_emergency_text: "Need immediate assistance? Call our emergency line:",
        contact_emergency_available: "Available 24/7",
        contact_location_title: "Our Location",
        contact_service_center: "Service Center",
        contact_hours_label: "Hours:",
        contact_hours_value: "Monday-Friday 8am-6pm, Saturday 9am-3pm",
        contact_get_directions: "Get Directions",
        contact_service_area: "Service Area",
        contact_service_area_text: "We provide appliance repair services throughout the following areas:",
        contact_not_sure: "Not sure if we service your area?",
        contact_give_call: "Give us a call!",
        contact_faq_title: "Frequently Asked Questions",
        contact_faq_q1: "How quickly can you respond to service requests?",
        contact_faq_a1: "For standard service requests, we typically schedule appointments within 24-48 hours. For emergency services, we offer same-day service in most cases, depending on the time of day and current service volume.",
        contact_faq_q2: "Do you provide cost estimates before starting work?",
        contact_faq_a2: "Yes, we always provide a detailed cost estimate before beginning any repair work. Our technician will diagnose the issue, explain the problem, and provide a transparent quote for your approval before proceeding.",
        contact_faq_q3: "What brands do you service?",
        contact_faq_a3: "We service all major appliance brands, including but not limited to Samsung, LG, Whirlpool, GE, Maytag, Frigidaire, Kenmore, Bosch, Electrolux, KitchenAid, Haier, and Panasonic.",
        contact_faq_q4: "Do you offer warranties on your repairs?",
        contact_faq_a4: "Yes, all our repairs come with a 90-day warranty on parts and labor. If you experience the same issue within the warranty period, we'll return to fix it at no additional cost.",
        contact_faq_q5: "What payment methods do you accept?",
        contact_faq_a5: "We accept cash, credit cards (Visa, MasterCard, American Express, Discover), debit cards, and checks. We also offer financing options for larger repair or installation projects.",
        
        // Footer keys
        footer_about: "About Sohaib AC Technician",
        footer_about_text: "Sohaib AC Technician is your trusted partner for all appliance repair needs. With years of experience and certified technicians, we provide fast, reliable, and affordable repair services.",
        footer_services: "Our Services",
        footer_contact: "Contact Info",
        footer_hours: "Working Hours",
        footer_rights: "All Rights Reserved",
        footer_copyright: "© 2023 Sohaib AC Technician. All Rights Reserved."
    },
    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_services: "الخدمات",
        nav_about: "من نحن",
        nav_gallery: "معرض الأعمال",
        nav_contact: "اتصل بنا",
        
        // Hero Section
        hero_title: "خدمات إصلاح التكييف المتخصصة",
        hero_subtitle: "تكييف | ثلاجات | أفران",
        hero_description: "إصلاحات احترافية مع ضمان الرضا. خدمة سريعة وموثوقة عندما تحتاجها.",
        hero_book: "احجز خدمة",
        hero_call: "اتصل الآن",
        
        // Services Section
        services_title: "خدماتنا",
        service_ac_title: "إصلاح التكييف",
        service_ac_desc: "خدمات إصلاح وصيانة وتركيب أجهزة تكييف الهواء لجميع الماركات والموديلات.",
        service_fridge_title: "إصلاح الثلاجات",
        service_fridge_desc: "خدمات إصلاح الثلاجات والمجمدات للحفاظ على طعامك طازجًا وآمنًا.",
        service_oven_title: "إصلاح الأفران",
        service_oven_desc: "خدمات شاملة لإصلاح الأفران والمواقد لإعادة مطبخك إلى حالته الطبيعية.",
        service_maintenance_title: "الصيانة",
        service_installation_title: "التركيب",
        service_learn_more: "اقرأ المزيد",
        
        // Legacy service keys (keeping for backward compatibility)
        ac_repair: "إصلاح وصيانة التكييف",
        ac_desc: "خدمات إصلاح وصيانة وتركيب أجهزة التكييف الكاملة لجميع الماركات والموديلات.",
        fridge_repair: "إصلاح الثلاجات",
        fridge_desc: "خدمات إصلاح الثلاجات والمجمدات. نقوم بإصلاح مشاكل التبريد وصانعات الثلج وموزعات المياه والمزيد.",
        oven_repair: "إصلاح الأفران",
        oven_desc: "خدمات إصلاح احترافية لجميع أنواع الأفران. موديلات الغاز والكهرباء.",
        view_services: "عرض جميع الخدمات",
        
        // Why Choose Us Section
        why_choose_title: "لماذا تختارنا",
        feature_experts_title: "فنيون خبراء",
        feature_experts_desc: "فنيونا المعتمدون لديهم سنوات من الخبرة في إصلاح جميع الماركات والموديلات الرئيسية.",
        feature_fast_title: "خدمة سريعة",
        feature_fast_desc: "نقدم خدمات إصلاح في نفس اليوم وخدمات طوارئ لتقليل الإزعاج في حياتك اليومية.",
        feature_warranty_title: "ضمان",
        feature_warranty_desc: "جميع إصلاحاتنا تأتي مع ضمان الرضا وضمان على القطع والعمالة.",
        feature_pricing_title: "أسعار تنافسية",
        feature_pricing_desc: "نقدم أسعارًا شفافة وعادلة بدون رسوم خفية أو مفاجآت.",
        
        // Legacy feature keys (keeping for backward compatibility)
        experience: "سنوات من الخبرة",
        experience_desc: "يتمتع فنيونا بأكثر من 15 عامًا من الخبرة في إصلاح جميع الماركات والموديلات الرئيسية للأجهزة.",
        certified: "فنيون معتمدون",
        certified_desc: "جميع متخصصي الإصلاح لدينا معتمدون بالكامل ويخضعون لتدريب مستمر على أحدث التقنيات.",
        warranty: "ضمان الخدمة",
        warranty_desc: "نحن نقف وراء عملنا مع ضمان 90 يومًا على جميع القطع والعمالة لراحة بالك.",
        affordable: "أسعار معقولة",
        affordable_desc: "أسعار تنافسية وشفافة بدون رسوم خفية. نقدم تقديرات مفصلة قبل بدء العمل.",
        
        // Testimonials Section
        testimonials_title: "ماذا يقول عملاؤنا",
        testimonial_1: "\"كان الفني محترفًا وخبيرًا، وأصلح مكيف الهواء الخاص بي في وقت قصير. خدمة ممتازة!\"",
        testimonial_author_1: "جون سميث",
        testimonial_2: "\"توقفت ثلاجتي عن العمل يوم الأحد، وحضروا في نفس اليوم. خدمة طوارئ رائعة!\"",
        testimonial_author_2: "سارة جونسون",
        testimonial_3: "\"أسعار عادلة وعمل ممتاز في إصلاح الفرن. سأستخدم خدماتهم مرة أخرى بالتأكيد.\"",
        testimonial_author_3: "مايكل براون",
        
        // CTA Section
        cta_title: "هل تحتاج إلى إصلاح الأجهزة؟",
        cta_description: "اتصل بنا اليوم للحصول على خدمة سريعة وموثوقة!",
        cta_button: "احصل على عرض سعر",
        
        // Legacy CTA keys (keeping for backward compatibility)
        cta_subtitle: "اتصل بنا اليوم لجدولة موعد الخدمة!",
        
        // Footer
        footer_tagline: "خدمات إصلاح الأجهزة المنزلية الاحترافية التي يمكنك الوثوق بها.",
        footer_quick_links: "روابط سريعة",
        footer_our_services: "خدماتنا",
        footer_contact_us: "اتصل بنا",
        footer_address: "الرمال، الرياض 13254، المملكة العربية السعودية",
        footer_phone: "+966 580 743 413",
        footer_email: "shoiberepair@saudi.com",
        footer_copyright: "© 2023 شعيب للإصلاحات. جميع الحقوق محفوظة.",
        
        // Contact Page
        contact_form_message: "وصف المشكلة*",
        contact_form_emergency: "هذه حالة طارئة (تتطلب اهتمامًا فوريًا)",
        contact_form_submit: "إرسال الطلب",
        contact_emergency_title: "خدمة الطوارئ",
        contact_emergency_text: "هل تحتاج إلى مساعدة فورية؟ اتصل بخط الطوارئ لدينا:",
        contact_emergency_available: "متاح على مدار الساعة طوال أيام الأسبوع",
        contact_location_title: "موقعنا",
        contact_service_center: "مركز الخدمة",
        contact_hours_label: "ساعات العمل:",
        contact_hours_value: "الاثنين-الجمعة 8 صباحًا-6 مساءً، السبت 9 صباحًا-3 مساءً",
        contact_get_directions: "الحصول على الاتجاهات",
        contact_service_area: "منطقة الخدمة",
        contact_service_area_text: "نقدم خدمات إصلاح الأجهزة في جميع المناطق التالية:",
        contact_not_sure: "غير متأكد إذا كنا نخدم منطقتك؟",
        contact_give_call: "اتصل بنا!",
        contact_faq_title: "الأسئلة الشائعة",
        contact_faq_q1: "ما مدى سرعة استجابتكم لطلبات الخدمة؟",
        contact_faq_a1: "بالنسبة لطلبات الخدمة القياسية، نقوم عادة بجدولة المواعيد خلال 24-48 ساعة. بالنسبة لخدمات الطوارئ، نقدم خدمة في نفس اليوم في معظم الحالات، اعتمادًا على وقت اليوم وحجم الخدمة الحالي.",
        contact_faq_q2: "هل تقدمون تقديرات التكلفة قبل بدء العمل؟",
        contact_faq_a2: "نعم، نقدم دائمًا تقديرًا مفصلاً للتكلفة قبل بدء أي عمل إصلاح. سيقوم الفني لدينا بتشخيص المشكلة وشرحها وتقديم عرض أسعار شفاف للموافقة عليه قبل المتابعة.",
        contact_faq_q3: "ما هي العلامات التجارية التي تقومون بخدمتها؟",
        contact_faq_a3: "نقوم بخدمة جميع العلامات التجارية الرئيسية للأجهزة، بما في ذلك على سبيل المثال لا الحصر سامسونج، إل جي، ويرلبول، جي إي، مايتاج، فريجيدير، كينمور، بوش، إلكترولوكس، كيتشن إيد، هاير، وباناسونيك.",
        contact_faq_q4: "هل تقدمون ضمانات على الإصلاحات؟",
        contact_faq_a4: "نعم، جميع إصلاحاتنا تأتي مع ضمان لمدة 90 يومًا على القطع والعمالة. إذا واجهت نفس المشكلة خلال فترة الضمان، سنعود لإصلاحها دون أي تكلفة إضافية.",
        contact_faq_q5: "ما هي طرق الدفع التي تقبلونها؟",
        contact_faq_a5: "نقبل النقد، وبطاقات الائتمان (فيزا، ماستركارد، أمريكان إكسبريس، ديسكفر)، وبطاقات الخصم، والشيكات. كما نقدم خيارات تمويل لمشاريع الإصلاح أو التركيب الأكبر.",
        
        // Legacy Footer keys (keeping for backward compatibility)
        footer_about: "عن فني تكييف سهيب",
        footer_about_text: "فني تكييف سهيب هو شريكك الموثوق لجميع احتياجات إصلاح الأجهزة. مع سنوات من الخبرة والفنيين المعتمدين، نقدم خدمات إصلاح سريعة وموثوقة وبأسعار معقولة.",
        footer_services: "خدماتنا",
        footer_contact: "معلومات الاتصال",
        footer_hours: "ساعات العمل",
        footer_rights: "جميع الحقوق محفوظة",
        footer_copyright: "© 2023 فني تكييف سهيب. جميع الحقوق محفوظة."
    }
};

// Always use Arabic language
let currentLanguage = 'ar';
// Store this in localStorage to persist across pages
localStorage.setItem('language', 'ar');

// Set page title based on current page
const pageTitles = {
    'index.html': {
        en: 'Sohaib AC Technician - Professional Appliance Repair Services',
        ar: 'فني تكييف سهيب - خدمات إصلاح الأجهزة المنزلية المتخصصة'
    },
    'about.html': {
        en: 'About Us - Sohaib AC Technician',
        ar: 'من نحن - فني تكييف سهيب'
    },
    'services.html': {
        en: 'Services - Sohaib AC Technician',
        ar: 'الخدمات - فني تكييف سهيب'
    },
    'gallery.html': {
        en: 'Gallery - Sohaib AC Technician',
        ar: 'معرض الأعمال - فني تكييف سهيب'
    },
    'contact.html': {
        en: 'Contact Us - Sohaib AC Technician',
        ar: 'اتصل بنا - فني تكييف سهيب'
    }
};

// Function to change language - always use Arabic
function changeLanguage(lang) {
    // Always use Arabic regardless of what's passed
    currentLanguage = 'ar';
    
    // Save to localStorage for persistence across pages
    localStorage.setItem('language', 'ar');
    
    // Update content and direction
    updatePageContent();
    updateDirection('ar');
    
    console.log('Language set to Arabic');
}

// Function to update page content based on selected language
function updatePageContent() {
    // Get all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    
    // Apply translations to each element
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        
        // Check if translation exists for current language and key
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // For form elements, update placeholder
                element.placeholder = translations[currentLanguage][key];
            } else if (element.tagName === 'IMG') {
                // For images, update alt text
                element.alt = translations[currentLanguage][key];
            } else {
                // For other elements, update inner HTML
                element.innerHTML = translations[currentLanguage][key];
            }
        }
    });
    
    // Update page title based on current page
    const pageTitle = document.querySelector('title');
    if (pageTitle) {
        // Get current page filename
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // Set page title based on current page and language
        if (pageTitles[currentPage] && pageTitles[currentPage][currentLanguage]) {
            pageTitle.textContent = pageTitles[currentPage][currentLanguage];
        } else if (translations[currentLanguage]['page_title']) {
            // Fallback to generic title if specific page title not found
            pageTitle.textContent = translations[currentLanguage]['page_title'];
        }
    }
    
    // Update company name in logo - always use Arabic
    const logoElement = document.querySelector('.logo h1');
    if (logoElement) {
        logoElement.innerHTML = 'فني<span>تكييف سهيب</span>';
    }
}

// Function to update text direction based on language
function updateDirection(lang) {
    const htmlElement = document.documentElement;
    
    if (lang === 'ar') {
        htmlElement.setAttribute('dir', 'rtl');
        htmlElement.classList.add('rtl');
        htmlElement.classList.remove('ltr');
    } else {
        htmlElement.setAttribute('dir', 'ltr');
        htmlElement.classList.add('ltr');
        htmlElement.classList.remove('rtl');
    }
}

// Initialize language on page load - always use Arabic
document.addEventListener('DOMContentLoaded', function() {
    // Always use Arabic
    currentLanguage = 'ar';
    
    // Update content and direction
    updatePageContent();
    updateDirection('ar');
});

// Helper function to update active language button
function updateActiveLanguageButton(buttons, lang) {
    buttons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}