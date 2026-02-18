document.addEventListener('DOMContentLoaded', () => {
    // Add active class to nav on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
        else nav.style.boxShadow = "none";
    });

    // Reveal animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('show');
        });
    });

    document.querySelectorAll('.stat-card').forEach(el => observer.observe(el));
});