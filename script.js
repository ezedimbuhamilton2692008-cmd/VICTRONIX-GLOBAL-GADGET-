document.addEventListener('DOMContentLoaded',()=>{

/* ================= MOBILE MENU ================= */

const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('nav');

if(menuToggle&&nav){

menuToggle.addEventListener('click',()=>{

nav.classList.toggle('open');

menuToggle.textContent=
nav.classList.contains('open')?'✕':'☰';

menuToggle.setAttribute(
'aria-expanded',
nav.classList.contains('open')
);

});

nav.querySelectorAll('a').forEach(link=>
link.addEventListener('click',()=>{

nav.classList.remove('open');

menuToggle.textContent='☰';

menuToggle.setAttribute(
'aria-expanded',
'false'
);

})
);

}


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>
anchor.addEventListener('click',function(e){

e.preventDefault();

const target=
document.querySelector(this.getAttribute('href'));

if(target){

target.scrollIntoView({
behavior:'smooth',
block:'start'
});

}

})
);


/* ================= PRODUCT WHATSAPP BUTTONS ================= */

const phone1='2348109174991';

document.querySelectorAll('.contact-product').forEach(button=>
button.addEventListener('click',()=>{

const message=`Hi VICTRONIX GLOBAL GADGETS 👋

I'm interested in:
*${button.dataset.product}*

Please send me the price and availability. Thank you!`;

window.open(
`https://wa.me/${phone1}?text=${encodeURIComponent(message)}`,
'_blank'
);

})
);


/* ================= CONTACT FORM ================= */

const contactForm=
document.querySelector('#contactForm');

const formStatus=
document.querySelector('#formStatus');

if(contactForm)

contactForm.addEventListener('submit',e=>{

e.preventDefault();

const name=
contactForm.querySelector('[name="name"]').value.trim();

const phone=
contactForm.querySelector('[name="phone"]').value.trim();

const category=
contactForm.querySelector('[name="category"]').value;

const message=
contactForm.querySelector('[name="message"]').value.trim();


const waMessage=`New Enquiry from VICTRONIX Website

Name: ${name}
Phone: ${phone}
Category: ${category}
Message: ${message}`;


window.open(
`https://wa.me/${phone1}?text=${encodeURIComponent(waMessage)}`,
'_blank'
);


if(formStatus){

formStatus.style.color='#00A651';

formStatus.textContent=
'Redirecting to WhatsApp... We will reply shortly!';

}

contactForm.reset();

});


/* ================= HEADER ON SCROLL ================= */

const header=
document.querySelector('.site-header');

if(header)

window.addEventListener('scroll',()=>{

header.style.background=
window.scrollY>50
?'rgba(7,8,7,1)'
:'rgba(7,8,7,.96)';

});

});
