import outsideClick from './outside-click.js';

export default function initMenuDropDown() {
  const dropdown = document.querySelectorAll("[data-dropdown]");

  dropdown.forEach((menu) => {
    ["touchstart", "click"].forEach((useEvent) => {
      menu.addEventListener(useEvent, handleActiveMenuDropdown);
    });
  });

  function handleActiveMenuDropdown(event) {
    event.preventDefault();
    this.classList.toggle("ativo");

    outsideClick(this, ["touchstart", "click"], ()=> {
      this.classList.remove('ativo');
    });
  }
}
