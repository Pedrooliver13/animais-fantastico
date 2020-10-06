import outsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(button, menu, activeClass) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(menu);

    if (activeClass === undefined) {
      this.activeClass = "ativo";
    } else {
      this.activeClass = activeClass;
    }

    this.activeMenu = this.activeMenu.bind(this);
  }

  activeMenu() {
    this.menuButton.classList.add("ativo");
    this.menuList.classList.add("ativo");

    outsideClick(this.menuList, ["click"], () => {
      this.menuButton.classList.remove("ativo");
      this.menuList.classList.remove("ativo");
    });
  }

  addMenuMobileEvent() {
    this.menuButton.addEventListener("click", this.activeMenu);
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvent();
    }

    return this;
  }
}
