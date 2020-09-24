'use strict'

export default function initAccordionList() {
  const accordionList = document.querySelectorAll("[data-menu='accordion'] dt");
  const activeClass = "js-ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function handleAccordionList() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", handleAccordionList);
    });
  }
}