import AnimaNumbers from "./anima-numbers.js";

export default function initFetch(url, target) {
  function createHtml(animal) {
    const div = document.createElement("div");
    div.classList.add("number__animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;

    return div;
  }

  const numberGrid = document.querySelector(target); // ".numbers__grid"
  function insertHtml(animal) {
    const divAnimal = createHtml(animal);
    numberGrid.appendChild(divAnimal);
  }

  function startAnimaNumbers() {
    const animaNumbers = new AnimaNumbers("[data-number]", ".numbers");
    animaNumbers.init();
  }

  async function getFetch() {
    try {
      const results = await fetch(url);
      const resultsJson = await results.json();

      resultsJson.forEach((animal) => insertHtml(animal));
      startAnimaNumbers();
    } catch (error) {
      console.log(error);
    }
  }

  return getFetch();
}
