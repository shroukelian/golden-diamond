document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); 
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

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
        root: null, 
        threshold: 0.1, 
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                 entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    const targets = document.querySelectorAll('.about-target');
    targets.forEach(target => {
        observer.observe(target);
    });
    document.addEventListener('DOMContentLoaded', function() {
    

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
                 entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    const targets = document.querySelectorAll('.hero-target, .about-target');
    
    targets.forEach(target => {
        observer.observe(target);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    

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
                 entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    const targets = document.querySelectorAll('.hero-target, .about-target, .uniform-target');
    
    targets.forEach(target => {
        observer.observe(target);
    });
});