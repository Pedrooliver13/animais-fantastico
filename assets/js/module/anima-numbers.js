export default function initAnimaNumbers() {
  function handleAnimaNumbers() {
    const numbers = document.querySelectorAll("[data-number]");

    numbers.forEach((number) => {
      const total = +number.textContent;
      const insertTurbo = Math.floor(total / 100);

      let start = 0;

      const timer = setInterval(() => {
        start = start + insertTurbo;
        number.innerText = start;
        if (start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    // mutation é padrão;
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      handleAnimaNumbers();
    }
  }

  const observerTarget = document.querySelector(".numbers");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
