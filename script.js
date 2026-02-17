

// Loader

window.onload=function(){

loader.style.display="none";

};



// Typing

let text="Frontend Developer";

let i=0;

function typing(){

if(i<text.length){

typing.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,100);

}

}

typing();




// Reveal

window.addEventListener("scroll",()=>{

document.querySelectorAll(".reveal").forEach(el=>{

if(el.getBoundingClientRect().top<window.innerHeight-100){

el.classList.add("active");

}

});

});




// Progress bar

window.addEventListener("scroll",()=>{

let scroll=scrollY;

let height=document.body.scrollHeight-innerHeight;

progress-bar.style.width=(scroll/height)*100+"%";

});




// Dark mode

modeToggle.onclick=()=>{

document.body.classList.toggle("dark");

};




// Contact

contactForm.onsubmit=()=>{

alert("Message sent successfully");

};
