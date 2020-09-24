export default function initModal() {
  const buttonOpen = document.querySelector('[data-modal="open"]');
  const buttonClose = document.querySelector('[data-modal="close"]');
  const modalContainer = document.querySelector('[data-modal="container"]');

  function handleToggleModal(event) {
    event.preventDefault();
    return modalContainer.classList.toggle("ativo");
  }

  function handleClickContainerModal(event) {
    if(event.target === this)
      handleToggleModal(event);
  }

  buttonOpen.addEventListener("click", handleToggleModal);
  buttonClose.addEventListener("click", handleToggleModal);
  modalContainer.addEventListener("click", handleClickContainerModal);
}
