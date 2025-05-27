// script.js

document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".section, .card, .portfolio-item, .about-text, .about-team");
  
    const scrollReveal = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  
    revealElements.forEach((el) => {
      el.classList.add("reveal-hidden");
      scrollReveal.observe(el);
    });
  });
  