export default class AnimaNumbers {
  constructor(target, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(target); // [data-number]
    this.observerTarget = document.querySelector(observerTarget); // .numbers

    if (observerClass === undefined) {
      this.observerClass = 'ativo'; 
    } else {
      this.observerClass = observerClass;
    }

    this.handleMutation = this.handleMutation.bind(this);
  }

  static insertNumbers(number) {
    const total = +number.textContent;
    const insertTurbo = Math.floor(total / 100);

    let start = 0;

    const timer = setInterval(() => {
      start += insertTurbo;
      number.innerText = start;

      if (start > total) {
        number.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumbers() {
    this.numbers.forEach((number) => this.constructor.insertNumbers(number));
  }

  handleMutation(mutation) {
    // mutation é padrão;
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumbers();
    }
  }

  addMutatioObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if(this.addMutatioObserver && this.numbers.length) {
      this.addMutatioObserver();
    }

    return this;
  }
}
