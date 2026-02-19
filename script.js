document.addEventListener('DOMContentLoaded', () => {

    // ================================
    // 1. EmailJS Initialization
    // ================================

    emailjs.init("YOUR_PUBLIC_KEY");


    // ================================
    // 2. Navbar transition on scroll
    // ================================

    const nav = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {

        if (nav) {

            if (window.scrollY > 30) {

                nav.classList.add('py-2', 'shadow-sm');

            } else {

                nav.classList.remove('py-2', 'shadow-sm');

            }

        }

    });



    // ================================
    // 3. Scroll Animation
    // ================================

    const scrollObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

            }

        });

    }, {

        threshold: 0.1

    });



    document.querySelectorAll('section').forEach(section => {

        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';

        scrollObserver.observe(section);

    });



    // ================================
    // 4. Contact Form Email Sending
    // ================================

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {

        contactForm.addEventListener('submit', function (e) {

            e.preventDefault();


            emailjs.sendForm(

                "YOUR_SERVICE_ID",

                "YOUR_TEMPLATE_ID",

                this

            )

            .then(() => {

                alert("Message sent successfully!");

                contactForm.reset();

            })

            .catch((error) => {

                alert("Failed to send message");

                console.log(error);

            });

        });

    }


});
