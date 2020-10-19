import outsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(button, menu, events, activeClass) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(menu);

    if (activeClass === undefined) {
      this.activeClass = "ativo";
    } else {
      this.activeClass = activeClass;
    }

    if(events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeMenu = this.activeMenu.bind(this);
  }

  activeMenu(event) {
    event.preventDefault();
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);

    outsideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvent() {
    this.events.forEach(eventType => {
      this.menuButton.addEventListener(eventType, this.activeMenu);
    })
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvent();
    }

    return this;
  }
}
