document.addEventListener('DOMContentLoaded', function() {
    // وظيفة إظهار/إخفاء قائمة التنقل في الموبايل
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // تبديل فئة 'active' لإظهار/إخفاء القائمة
            navLinks.classList.toggle('active');
            
            // تغيير أيقونة الزر
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // أيقونة إغلاق (X)
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); // أيقونة القائمة (ثلاث خطوط)
            }
        });

        // إغلاق القائمة عند النقر على أي رابط (لتجربة أفضل للموبايل)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
});
const observerOptions = {
        root: null, // يشاهد العنصر عندما يظهر في نافذة العرض (Viewport)
        threshold: 0.1, // يبدأ التفعيل عندما يظهر 10% من العنصر
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // العنصر أصبح مرئياً
                entry.target.classList.add('show');
                // لإيقاف المراقبة بعد أول ظهور (اختياري)
                // observer.unobserve(entry.target); 
            } else {
                // العنصر خرج من الرؤية - اختياري: لإعادة الحركة عند الابتعاد والعودة
                 entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    // تحديد جميع العناصر التي تحتاج إلى الحركة
    const targets = document.querySelectorAll('.about-target');
    targets.forEach(target => {
        observer.observe(target);
    });
    document.addEventListener('DOMContentLoaded', function() {
    
    // ... (الكود السابق لـ menuToggle) ...

    const observerOptions = {
        root: null, 
        threshold: 0.1, 
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // العنصر أصبح مرئياً
                entry.target.classList.add('show');
                // لا نوقف المراقبة هنا لضمان تكرار الحركة عند العودة
            } else {
                // العنصر خرج من الرؤية - لإعادة الحركة عند الابتعاد والعودة
                 entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    // تحديد جميع العناصر التي تحتاج إلى الحركة (hero-target و about-target)
    const targets = document.querySelectorAll('.hero-target, .about-target');
    
    targets.forEach(target => {
        observer.observe(target);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    
    // ... (الكود السابق لـ menuToggle) ...

    const observerOptions = {
        root: null, 
        threshold: 0.1, 
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                // العنصر خرج من الرؤية - لإعادة الحركة عند الابتعاد والعودة
                 entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    // تحديث الاستهداف ليشمل جميع فئات الحركة الجديدة
    const targets = document.querySelectorAll('.hero-target, .about-target, .uniform-target');
    
    targets.forEach(target => {
        observer.observe(target);
    });
});