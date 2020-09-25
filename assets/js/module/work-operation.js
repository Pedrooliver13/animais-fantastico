export default function initWorkOperation() {
  const operation = document.querySelector('[data-week]');
  const dateWeek = operation.dataset.week.split(',').map(Number);
  const dateHours = operation.dataset.hours.split(',').map(Number);


  const nowDate = new Date(); // aqui vai pegar a data;
  const nowDateWeek = nowDate.getDay(); // getDay retorna um dia da semana;
  const nowDateHours = nowDate.getHours();

  const dayOpen = dateWeek.indexOf(nowDateWeek) !== -1;
  const hoursOpen = nowDateHours >= dateHours[0] && nowDateHours < dateHours[1];

  if(hoursOpen && dayOpen) {
    operation.classList.add('ativo');
  }
}