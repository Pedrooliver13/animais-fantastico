// const ousideClick = require('./outside-click');

export default class Modal {
  constructor(buttonOpen, buttonClose, modalContainer) {
    this.buttonOpen = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.modalContainer = document.querySelector(modalContainer);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outsideClick = this.outsideClick.bind(this);
  }

  toggleModal(event) {
    event.preventDefault();
    this.modalContainer.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal(event);
  }

  outsideClick(event) {
    if (event.target === this.modalContainer)
      this.toggleModal(event);
  }

  modalEventListener() {
    this.buttonOpen.addEventListener("click", this.eventToggleModal);
    this.buttonClose.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.outsideClick);
  } 

  init() {
    this.modalEventListener();

    return this;
  }
 
}
