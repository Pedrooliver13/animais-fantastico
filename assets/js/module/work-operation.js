export default class WorkOperation {
  constructor(days) {
    this.operation = document.querySelector(days);
  }

  // dias e horas de trabalho.
  dateOperation() {
    this.workWeek = this.operation.dataset.week.split(",").map(Number);
    this.hoursWork = this.operation.dataset.hours.split(",").map(Number);
  }

  // pega o dia e as horas atual.
  dateNow() {
    this.now = new Date();
    this.dayNow = this.now.getDay();
    this.hoursNow = this.now.getUTCHours() - 3;
  }

  // Lógica para ver se está aberto
  isOpen() {
    const dateOperation = this.workWeek.indexOf(this.dayNow) !== -1;
    const hoursOperation =
      (this.hoursNow >= this.hoursWork[0] && this.hoursNow < this.hoursWork[1]);
      
    return (dateOperation && hoursOperation);
  }
  
  addClassActive() {
    if (this.isOpen())
      this.operation.classList.add("ativo");
  }
  
  init() {
    this.dateNow();
    this.dateOperation();
    this.addClassActive();

    return this;
  }
}
