'use strict';

export function initSmoothScroll() {
  const linkInternos = document.querySelectorAll('[data-scroll="smooth"] a[href^="#"]');

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
  const sections = document.querySelectorAll("[data-anime='scroll']");
  
  if (sections.length) {
    const windowMedate = window.innerHeight * 0.6;
    sections[0].classList.add('js-ativo');

    function handleAnimaScroll() {
      sections.forEach((item) => {
        const sectionTop = item.getBoundingClientRect().top;
        const isSectionTopVisible = sectionTop - windowMedate < 0;

        if (isSectionTopVisible) {
          item.classList.add("js-ativo");
        } else {
          item.classList.remove("js-ativo");
        }
      });
    }

    window.addEventListener("scroll", handleAnimaScroll);
  }
}
