export default class initAccordionList {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "js-ativo";
  }

  handleToggleList(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  accordionListener() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.handleToggleList(item));
    });
  }
  
  init() {
    if (this.accordionList.length) {
      this.handleToggleList(this.accordionList[0]);
      this.accordionListener();
    }

    return this;
  }
}
