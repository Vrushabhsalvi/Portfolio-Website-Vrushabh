document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.padding = '0.8rem 0';
            nav.style.background = 'rgba(5, 8, 16, 0.98)';
        } else {
            nav.style.padding = '1.2rem 0';
            nav.style.background = 'rgba(5, 8, 16, 0.9)';
        }
    });

    // 2. Smooth reveal animation
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "all 0.8s ease-out";
        observer.observe(section);
    });

    // 3. Contact Form handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you Vrushabh! Your message has been sent successfully.');
        contactForm.reset();
    });
});