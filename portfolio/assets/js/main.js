const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu"); // Add the class to nav__menu
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 10) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
// JavaScript pour détecter si l'icône est dans le footer
// JavaScript pour détecter si l'icône est dans la classe .footer
const scrollIcon = document.getElementById("scrollIcon");
const footer = document.querySelector(".footer");

window.addEventListener("scroll", () => {
  const iconRect = scrollIcon.getBoundingClientRect();
  const footerRect = footer.getBoundingClientRect();

  if (iconRect.top >= footerRect.top && iconRect.bottom <= footerRect.bottom) {
    scrollIcon.style.color = "#fff5bb"; // Couleur quand dans la classe .footer
  } else {
    scrollIcon.style.color = "#006666"; // Couleur quand en dehors de la classe .footer
  }
});

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=========================Skills card====================*/
const skillsCards = document.querySelectorAll(".skills-card");

skillsCards.forEach((card) => {
  card.addEventListener("click", () => {
    // Toggle the "expanded" class on the clicked card
    card.classList.toggle("expanded");

    // Collapse other expanded cards
    skillsCards.forEach((otherCard) => {
      if (otherCard !== card && otherCard.classList.contains("expanded")) {
        otherCard.classList.remove("expanded");
      }
    });
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 1500,
  delay: 400,
  //reset: true
});

sr.reveal(`.section-title`, { origin: "top", delay: 400 });
sr.reveal(`.data,.experience-title`, { delay: 400 });
sr.reveal(`.resume__img,.experience-img`, { delay: 400, origin: "top" });
sr.reveal(`.skills-container, .social`, { origin: "bottom", interval: 100 });

  
