/*================= toggle icon navbar ===========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-times"); // Mengubah dari "fa-xmark" menjadi "fa-times"
  navbar.classList.toggle("active");
};

/*================= scroll section active link ===========*/
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let scrollPosition = window.scrollY;

  // Iterasi semua section untuk menentukan mana yang sedang aktif
  sections.forEach((sec) => {
    let sectionId = sec.getAttribute("id");
    let navLink = document.querySelector(`header nav a[href="#${sectionId}"]`);

    let sectionTop = sec.offsetTop - 150;
    let sectionHeight = sec.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      navLink.classList.add("active");
    }
  });

  // Toggle kelas "sticky" untuk header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", scrollPosition > 100);

  // Hilangkan toggle icon dan navbar ketika di-scroll
  menuIcon.classList.remove("fa-times");
  navbar.classList.remove("active");
};
//--scroll reveal
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

//type js
const typed = new Typed(".multiple-text", {
  strings: ["Educator", "Design Graphic", "Foto and Videography"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000, // Adjusted backDelay to 1000ms for a better effect
  loop: true,
});
