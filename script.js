function showMessage(){
  alert("Thank you for visiting my portfolio");
}

// Contact form: client-side validation + simulated send
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const success = document.getElementById('contactSuccess');
    success.classList.remove('d-none');

    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      const original = btn.innerHTML;
      btn.innerHTML = 'Sending...';
      setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 1400);
    }

    form.reset();
    form.classList.remove('was-validated');

    setTimeout(() => success.classList.add('d-none'), 4000);
  });
});