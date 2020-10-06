import outsideClick from './outside-click.js';

export default class MenuDropDown {
  constructor(menu) {
    this.dropdown = document.querySelectorAll(menu);
    this.events = ["touchstart", "click"];

    this.activeMenu = this.activeMenu.bind(this);
  }

  activeMenu(event) {
    event.preventDefault();

    const element = event.currentTarget;
    element.classList.add('ativo');

    outsideClick(element, this.events, ()=> {
      element.classList.remove('ativo');
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
    if(this.dropdown) {
      this.addMenuListener();
    }

    return this; 
  }
}
