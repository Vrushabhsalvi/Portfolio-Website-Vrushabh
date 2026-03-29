document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initScrollAnimations();
  initNavbarEffect();
  initBackToTopButton();
  initContactForm();
  loadThemePreference();
});

function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');

  if (!themeToggle) return;

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateThemeIcon();
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });
}

function updateThemeIcon() {
  const themeToggle = document.getElementById('themeToggle');
  const isDark = document.body.classList.contains('dark-mode');

  if (themeToggle) {
    themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
  }
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
  }

  updateThemeIcon();
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(20px)";
    sec.style.transition = "0.6s ease-out";
    observer.observe(sec);
  });
}

function initNavbarEffect() {
  const nav = document.querySelector('.navbar');

  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav.classList.add('shadow-lg');
    } else {
      nav.classList.remove('shadow-lg');
    }
  });
}

function initBackToTopButton() {
  const backToTopButton = document.getElementById('backToTop');

  if (!backToTopButton) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initContactForm() {
  const contactForm = document.getElementById('contactForm');

  if (!contactForm) return;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (!name || !email || !message) {
      showFormMessage('Please fill in all fields', 'error', formMessage);
      return;
    }

    if (!isValidEmail(email)) {
      showFormMessage('Please enter a valid email address', 'error', formMessage);
      return;
    }

    try {
      const button = contactForm.querySelector('button[type="submit"]');
      button.disabled = true;
      button.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i>Sending...';

      const response = await fetch('https://formspree.io/f/xyzlwkoa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      if (response.ok) {
        showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success', formMessage);
        contactForm.reset();
        setTimeout(() => {
          formMessage.textContent = '';
        }, 5000);
      } else {
        showFormMessage('Failed to send message. Please try again.', 'error', formMessage);
      }
    } catch (error) {
      showFormMessage('Error sending message. Please try again or contact directly.', 'error', formMessage);
    } finally {
      const button = contactForm.querySelector('button[type="submit"]');
      button.disabled = false;
      button.innerHTML = 'Send Message';
    }
  });
}

function showFormMessage(message, type, element) {
  element.textContent = message;
  element.className = type;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
