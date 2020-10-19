export default class SmoothScroll {
  constructor(links, options) {
    this.linkInternos = document.querySelectorAll(links);

    if (options === undefined) {
      this.options = {
        behavior: "smooth",
        block: "start",
      };
    } else {
      this.options = options;
    }

    this.ScrollToSection = this.ScrollToSection.bind(this);
  }

  ScrollToSection(event) {
    // ta pegando o target não o objeto como this; e para ele pegar o objeto do options vamoos usar o bind
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);
  }

  handleClick() {
    this.linkInternos.forEach((item) => {
      item.addEventListener("click", this.ScrollToSection);
    });
  }

  init() {
    if (this.linkInternos.length) {
      this.handleClick();
    }
    return this;
  }
}
