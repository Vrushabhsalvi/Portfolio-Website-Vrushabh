document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Shadow on Scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 20) {
            nav.classList.add('shadow-sm');
        } else {
            nav.classList.remove('shadow-sm');
        }
    });

    // 2. Simple Scroll Animation for Sections
    const revealSections = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(sec => {
            const top = sec.getBoundingClientRect().top;
            if (top < window.innerHeight - 150) {
                sec.style.opacity = '1';
                sec.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for animation
    document.querySelectorAll('section').forEach(sec => {
        sec.style.opacity = '0';
        sec.style.transform = 'translateY(30px)';
        sec.style.transition = 'all 0.8s ease-out';
    });

    window.addEventListener('scroll', revealSections);
    revealSections(); // Run once on load

    // 3. Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you Vrushabh! I will get back to you shortly.');
        contactForm.reset();
    });
});