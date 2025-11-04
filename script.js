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