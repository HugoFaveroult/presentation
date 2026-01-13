/* =======================
   HORLOGE
======================= */
function refresh() {
  setTimeout(showDate, 1000);
}

function showDate() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds() + 1; 

  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;

  document.getElementById("horloge").textContent = `${h}:${m}:${s}`;
  refresh();
}
showDate();

function showYear() {
  document.getElementById("annee").textContent = new Date().getFullYear();
}
showYear();

/* =======================
   NAV ACTIVE (SECTIONS)
======================= */
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;

        navLinks.forEach(link => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          );
        });
      });
    },
    {
      root: null,
      rootMargin: "-80px 0px -70% 0px", // ← LA CLÉ
      threshold: 0
    }
  );

  sections.forEach(section => sectionObserver.observe(section));
});

/* =======================
   NAV SCROLL (PADDING)
======================= */
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

/* =======================
   NAV SOLIDE (SENTINEL)
======================= */
const sentinel = document.querySelector("#nav-sentinel");

const navObserver = new IntersectionObserver(
  ([entry]) => {
    nav.classList.toggle("solid", !entry.isIntersecting);
  },
  {
    root: null,
    threshold: 0
  }
);

navObserver.observe(sentinel);