export default class Tooltip {
  constructor(tooltip) {
    this.tooltip = document.querySelectorAll(tooltip);

    this.mouseOver = this.mouseOver.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
  }

  // dispara o tooltip;
  mouseOver({ currentTarget }) {
    // desetruturando do event;
    this.makeTooltipBox(currentTarget);

    currentTarget.addEventListener("mousemove", this.mouseMove);
    currentTarget.addEventListener("mouseleave", this.mouseLeave);
  }

  // removendo o tooltip e seus listeners
  mouseLeave({ currentTarget }) {
    this.tooltipBox.remove();

    currentTarget.removeEventListener("mouseleave", this.mouseLeave);
    currentTarget.removeEventListener("mousemove", this.mouseMove);
  }

  // movimenta o tooltip pelo seus estilos
  // em consideração ao mouse;kt
  mouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 25}px`;

    if (event.pageX + 240 > window.innerWidth)
      this.tooltipBox.style.left = `${event.pageX - 240}px`;
    else 
      this.tooltipBox.style.left = `${event.pageX + 25}px`;
  }

  // Cria tooltip
  makeTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");

    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);

    this.tooltipBox = tooltipBox;
  }

  // adicionando eventListener ao tooltip
  addTooltipEvent() {
    this.tooltip.forEach((item) => {
      item.addEventListener("mouseover", this.mouseOver);
    });
  }

  init() {
    if (this.tooltip) {
      this.addTooltipEvent();
    }

    return this;
  }
}
