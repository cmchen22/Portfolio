document.addEventListener("DOMContentLoaded", () => {
  // --- Scroll Reveal Animation ---
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    reveals.forEach((reveal) => {
      const revealTop = reveal.getBoundingClientRect().top;

      if (revealTop < triggerBottom) {
        reveal.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial check

  // --- Active Nav Link highlighting ---
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // --- Mobile Nav Logic (Optional expansion) ---
  const menuBtn = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", !isExpanded);
      menu.classList.toggle("is-open");
    });
  }

  // --- Year Update ---
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
