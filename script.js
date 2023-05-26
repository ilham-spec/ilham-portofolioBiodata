// toggle hamburger navbar
let hamburgerMenu = document.querySelector("#hamburger-menu");
let navbar = document.querySelector(".navbar");

hamburgerMenu.onclick = (e) => {
  //   hamburger.classList.toggle("x");
  navbar.classList.toggle("active");
  e.preventDefault();
};
/// Klik diluar sidebar & elemen  untuk menghilangkan nav & search button
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

// scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href* =" + id + "]")
          .classList.add("active");
      });
    }
  });
  //    sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

// Scrol Reveal
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .about-img, .services-container, .portofolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".about-content", { origin: "right" });

// typed js

const typed = new Typed(".multiple-text", {
  strings: ["Junior Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
