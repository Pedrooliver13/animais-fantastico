export default class NavTab {
  constructor(menu, tabContent) {
    this.navTab = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(tabContent);
  }

  // adicionando a class ativo ao navtab usando o index; 
  activeNavTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove("js-ativo");
    });

    const animationDirection = this.tabContent[index].dataset.anime; // adicionando mais de uma classe;
    this.tabContent[index].classList.add("js-ativo", animationDirection);
  }
  
  // adicionando evento ao navtab;
  navTabEventListener() {
    this.navTab.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.activeNavTab(index);
      });
    });
  }

  init() {
    if (this.navTab.length && this.tabContent.length) {
      // ativando o primeiro item
      this.activeNavTab(0);
      this.navTabEventListener();
    }

    return this;
  }
}
