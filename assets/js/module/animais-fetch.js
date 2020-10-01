import initAnimaNumbers from './anima-numbers.js';

export default function initFetch(){};

async function getFetch(url) {
  const results = await fetch(url);
  const resultsJson = await results.json();
  const numberGrid = document.querySelector('.numbers__grid');
  
  resultsJson.forEach(animal => {
    const divAnimal = createHtml(animal);
    numberGrid.appendChild(divAnimal);
  });
  
  initAnimaNumbers();
} 

function createHtml(animal) {
  const div = document.createElement('div');
  div.classList.add('number__animal');

  div.innerHTML = `
    <h3>${animal.specie}</h3> 
    <span data-number>${animal.total}</span>
  `;
  
  return div;
}

getFetch('./animaisapi.json');