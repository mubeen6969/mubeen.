// Initialize Lucide Icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Menu Logic ---
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  let isMenuOpen = false;

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // --- Tab Switching Logic (About Section) ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      // Update Buttons State
      tabBtns.forEach(b => {
        b.classList.remove('active');
      });
      btn.classList.add('active');

      // Show Target Content
      tabContents.forEach(content => {
        if (content.id === `tab-${target}`) {
          content.classList.remove('hidden');
        } else {
          content.classList.add('hidden');
        }
      });
    });
  });
});



















const loader = document.getElementById("loader");
const loaderText = document.getElementById("loader-text");

const words = ["MUBEEN.", "Web Developer"];
let wordIndex = 0;
let charIndex = 0;

function typeEffect() {
  let currentWord = words[wordIndex];
  loaderText.textContent = currentWord.slice(0, charIndex);
  charIndex++;

  if (charIndex <= currentWord.length) {
    setTimeout(typeEffect, 120);
  } else {
    setTimeout(deleteEffect, 250);
  }
}

function deleteEffect() {
  let currentWord = words[wordIndex];
  loaderText.textContent = currentWord.slice(0, charIndex);
  charIndex--;

  if (charIndex >= 0) {
    setTimeout(deleteEffect, 60);
  } else {
    wordIndex++;

    if (wordIndex < words.length) {
      setTimeout(typeEffect, 300);
    } else {
      setTimeout(removeLoader, 300);
    }
  }
}

function removeLoader() {
  // GSAP exit animation
  gsap.to("#loader", {
    duration: 1.2,
    y: "-100%",
    opacity: 0,
    filter: "blur(20px)",
    ease: "power4.inOut",
  });
}

typeEffect();




// --------gsap----------



//  function startNavbarAnimation(){
// Create timeline with a single initial delay
const tl = gsap.timeline({ delay: 6 });

// Navbar links
tl.from('#navbar .nav-links a', {
  y: -20,
  stagger: 0.2,
  duration: 1,
  opacity: 0
});

// Logo
tl.from('nav .logo', {
  x: -100,
  duration: 1.5,
  opacity: 0
}, "-=0.8"); // overlap animation

// Main Title
tl.from(['.main-title', '.hero-description'], {
  y: 100,
  duration: 2,
  opacity: 0
}, "-=1");




function services() {
  const ta = gsap.timeline({
    scrollTrigger: {
      trigger: ".container.relative.z-10",
      scroller: "body",
      start: "top 60%",
      // markers: true
      // scrub: 1
    }
  });

  ta.from(".services-grid", {
    scale: 0,
    opacity: 0,
    duration: 1,
  });

}
services();



function portfolio() {
  const tb = gsap.timeline({
    scrollTrigger: {
      trigger: ".project-card",
      scroller: "body",
      start: "top 80%",
      // markers: true
      // scrub: 1
    }
  });

  tb.from(".project-card", {
    // scale: 0,
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
  });

}
portfolio();










const scriptURL = 'https://script.google.com/macros/s/AKfycbw4Vay8WLA8rc9A0F--enF-32bFPMruUvQnFJ8zl8EihK4HcYUYjysVz3kkC1uEztk5/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")






form.addEventListener('submit', e => {
  e.preventDefault();

  // 👉 1. Form ka data pehle save kar lo
  const formData = new FormData(form);

  // 👉 2. Message turant show karo
  // msg.innerHTML = "Message sent successfully";

  // 👉 3. Form ko turant reset karo (Google sheet ke data par effect nahi)
  form.reset();

  // 👉 4. Message ko 5 sec baad hide karo
  // setTimeout(() => {
  //     msg.innerHTML = "";
  // }, 5000);

  // 👉 5. Ab fetch me saved formData bhejo
  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
    .then(() => {
      console.log("Saved to sheet");
    })
    .catch(error => console.error('Error!', error.message));
});





// ------------portfolio-show-more----------------


const toggleBtn = document.getElementById("toggleBtn");
const cards = document.querySelectorAll(".card");

let isOpen = false;

toggleBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    cards.forEach(card => {
        card.classList.toggle("show", isOpen);
    });

    toggleBtn.innerText = isOpen ? "Show Less" : "Show More";
});


