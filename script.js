document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar transition on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 30) {
            nav.classList.add('py-2', 'shadow-sm');
        } else {
            nav.classList.remove('py-2', 'shadow-sm');
        }
    });

    // 2. Simple Scroll Animation for items
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        scrollObserver.observe(el);
    });

    // Manual helper for the animation
    window.addEventListener('scroll', () => {
        document.querySelectorAll('section').forEach(sec => {
            if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
                sec.style.opacity = '1';
                sec.style.transform = 'translateY(0)';
            }
        });
    });

    // 3. Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you Vrushabh! Your message has been sent.');
        contactForm.reset();
    });
});