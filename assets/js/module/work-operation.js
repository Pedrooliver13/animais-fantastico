export default function initWorkOperation() {
  const operation = document.querySelector('[data-week]');
  const dayWeek = operation.dataset.week.split(',').map(Number);
  const dayHours = operation.dataset.hours.split(',').map(Number);

  const now = new Date();
  const dayNow = now.getDay(); 
  const hoursNow = now.getHours();

  const dateOperation = dayWeek.indexOf(dayNow) !== -1;
  const hoursOperation = hoursNow >= dayHours[0] && hoursNow < dayHours[1];

  if(dateOperation && hoursOperation) 
    operation.classList.add('ativo');
}