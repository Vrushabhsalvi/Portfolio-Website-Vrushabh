document.addEventListener('DOMContentLoaded', () => {


/* ================================
EMAILJS INIT
================================ */


emailjs.init("YOUR_PUBLIC_KEY");



/* ================================
NAVBAR EFFECT
================================ */

const nav = document.querySelector('.navbar');


window.addEventListener('scroll', () => {

if(nav){

nav.classList.toggle('shadow-sm', window.scrollY > 30);

}

});



/* ================================
SCROLL ANIMATION
================================ */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

});


document.querySelectorAll('section').forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(20px)";

sec.style.transition="0.6s";

observer.observe(sec);

});



/* ================================
CONTACT FORM SYSTEM
================================ */


const form = document.getElementById('contactForm');

const status = document.getElementById('formStatus');

const btn = document.getElementById('submitBtn');

const btnText = document.getElementById('btnText');

const btnLoader = document.getElementById('btnLoader');



form.addEventListener('submit', function(e){

e.preventDefault();



btn.disabled = true;

btnLoader.classList.remove("d-none");

btnText.innerText = "Sending...";



emailjs.sendForm(

"service_oucm5yn",

"template_pwqlbd9",

this

)


.then(()=>{


status.innerHTML="✅ Message sent successfully";

status.className="success";


form.reset();


})


.catch(()=>{


status.innerHTML="❌ Failed to send message";

status.className="error";


})

.finally(()=>{


btn.disabled=false;

btnLoader.classList.add("d-none");

btnText.innerText="Send Message";


});



});


});
