"use strict";
export function initSmoothScroll() {
  const linkInternos = document.querySelectorAll(
    '[data-scroll="smooth"] a[href^="#"]'
  );

  function handleSmoothScroll(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linkInternos.forEach((item) => {
    item.addEventListener("click", handleSmoothScroll);
  });
}

export function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;

        if (isSectionVisible)
          section.classList.add("ativo");
        else if (section.classList.contains("ativo"))
          section.classList.remove("ativo");
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
