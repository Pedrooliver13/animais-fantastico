'use strict'

export default function initNavTab() {
  const navTab = document.querySelectorAll(".js-animais li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (navTab.length && tabContent.length) {
    tabContent[0].classList.add("js-ativo");

    function handleNavTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove("js-ativo");
      });

      tabContent[index].classList.add(
        "js-ativo",
        tabContent[index].dataset.anime
      );
    }

    navTab.forEach((item, index) => {
      item.addEventListener("click", () => {
        handleNavTab(index);
      });
    });
  }
}
