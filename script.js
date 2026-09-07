// ================= VICTRONIX GLOBAL GADGETS - script.js =================

document.addEventListener('DOMContentLoaded', () => {

  // ===== 1. MOBILE MENU TOGGLE =====
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if(menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuToggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });

    // Close menu when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuToggle.textContent = '☰';
      });
    });
  }

  // ===== 2. SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== 3. CONTACT PRODUCT BUTTONS -> WHATSAPP =====
  const phone1 = '2348109174991'; // 08109174991
  const phone2 = '2348062210293'; // 08062210293

  document.querySelectorAll('.contact-product').forEach(button => {
    button.addEventListener('click', () => {
      // Get product name from the card
      const productCard = button.closest('.product-card');
      const productName = productCard.querySelector('h4').innerText;
      
      const message = `Hi VICTRONIX GLOBAL GADGETS 👋\n\nI'm interested in: *${productName}*\n\nPlease send me the price and availability. Thank you!`;
      const whatsappURL = `https://wa.me/${phone1}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappURL, '_blank');
    });
  });

  // ===== 4. CONTACT FORM HANDLING =====
  const contactForm = document.querySelector('.contact-form');
  const formStatus = document.querySelector('.form-status');

  if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = contactForm.querySelector('input[name="name"]').value;
      const email = contactForm.querySelector('input[name="email"]').value;
      const subject = contactForm.querySelector('select[name="subject"]').value;
      const message = contactForm.querySelector('textarea[name="message"]').value;

      // Send to WhatsApp as fallback since no backend yet
      const waMessage = `New Message from Website\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
      const whatsappURL = `https://wa.me/${phone1}?text=${encodeURIComponent(waMessage)}`;
      
      window.open(whatsappURL, '_blank');
      
      if(formStatus) {
        formStatus.style.color = 'var(--green)';
        formStatus.innerText = 'Redirecting to WhatsApp... We will reply shortly!';
      }
      
      contactForm.reset();
    });
  }

  // ===== 5. CURRENT YEAR IN FOOTER =====
  const yearSpan = document.querySelector('.copyright span');
  if(yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
  }

  // ===== 6. HEADER SHRINK ON SCROLL =====
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
      header.style.background = 'rgba(7, 8, 7, 1)';
    } else {
      header.style.background = 'rgba(7, 8, 7, 0.96)';
    }
  });

});

console.log('VICTRONIX JS Loaded ✅ Tech That Keeps Up With You');
