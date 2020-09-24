import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  if (menuButton) {
    function handleOpenMenu() {
      menuButton.classList.add("ativo");
      menuList.classList.add("ativo");

      outsideClick(menuList, ['click'], () => {
        menuButton.classList.remove("ativo");
        menuList.classList.remove("ativo");
      });
    }

    menuButton.addEventListener('click', handleOpenMenu);
  }
}
