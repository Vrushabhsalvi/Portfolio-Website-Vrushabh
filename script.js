document.addEventListener('DOMContentLoaded', () => {

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
});
