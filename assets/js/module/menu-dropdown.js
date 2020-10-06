import outsideClick from "./outside-click.js";

export default class MenuDropDown {
  constructor(menu, events) {
    this.dropdown = document.querySelectorAll(menu);
    this.activeClass = 'ativo';

    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeMenu = this.activeMenu.bind(this);
  }

  activeMenu(event) {
    event.preventDefault();

    const element = event.currentTarget; // current target se refere ao dono do event;
    element.classList.add(this.activeClass);

    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addMenuListener() {
    this.dropdown.forEach((menu) => {
      this.events.forEach((useEvent) => {
        menu.addEventListener(useEvent, this.activeMenu);
      });
    });
  }

  init() {
    if (this.dropdown) {
      this.addMenuListener();
    }

    return this;
  }
}
