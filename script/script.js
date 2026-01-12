function refresh(){
    let t = 1000;
    setTimeout('showDate()',t)
}
         
function showDate() {
    let date = new Date()
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    if( s < 10 ){ s = '0' + s; }
    let time = h + ':' + m + ':' + s
    document.getElementById('horloge').innerHTML = time;
    refresh();
}
showDate();

function showYear() {
  const date = new Date();
  const year = date.getFullYear();
  document.getElementById("annee").textContent = year;
}

showYear();

document.addEventListener("DOMContentLoaded", () => {
  // Toutes les sections avec un id
  const sections = document.querySelectorAll("section[id]");

  // Tous les liens de la navbar
  const navLinks = document.querySelectorAll("nav a");

  const observerOptions = {
    root: null,              // viewport
    threshold: 0.6           // % visible pour activer la section
    // rootMargin: "-80px 0px -40% 0px" // décommente si navbar fixe
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const currentId = entry.target.id;

      navLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${currentId}`
        );
      });
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});