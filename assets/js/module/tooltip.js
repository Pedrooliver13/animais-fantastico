export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", handleMouseOver);
  });

  function handleMouseOver() {
    const tooltipBox = handleMakeTooltipBox(this);

    handleMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", handleMouseMove);

    
    handleMouseLeave.tooltipBox = tooltipBox;
    handleMouseLeave.element = this;
    this.addEventListener("mouseleave", handleMouseLeave);
  }

  const handleMouseLeave = {
    handleEvent() {// função padrão javascript para editar o event;
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", handleMouseLeave);
      this.element.removeEventListener("mousemove", handleMouseMove);
    },
  };
  

  const handleMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 25 + "px";
      this.tooltipBox.style.left = event.pageX + 25 + "px";
    },
  };

  function handleMakeTooltipBox(element) {
    const div = document.createElement("div");
    const text = element.getAttribute("aria-label");
    div.classList.add("tooltip");
    div.innerText = text;

    document.body.appendChild(div);
    return div;
  }
}
