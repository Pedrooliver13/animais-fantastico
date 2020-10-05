import initMenuDropDown from "./module/menu-dropdown.js";
import initMenuMobile from "./module/menu-mobile.js";
import { initAnimaScroll, initSmoothScroll } from "./module/scroll.js";
import initNavTab from "./module/nav-tab.js";
import initAccordionList from "./module/accordion-list.js";
import initModal from "./module/modal.js";
import initTooltip from "./module/tooltip.js";
import initWorkOperation from './module/work-operation.js';
import initAnimalFetch from './module/animais-fetch.js';
import initBitcoinFetch from './module/bitcoin-fetch.js';
import Countdown from './module/countdown.js';
// import initExercicio from './module/exercicio.js';

initAnimaScroll();
initSmoothScroll();
initMenuDropDown();
initMenuMobile();
initNavTab();
initAccordionList();
initTooltip(); // tooltip => modalzinho quando passa o mouse por cima
initModal();
initWorkOperation();
initAnimalFetch();
initBitcoinFetch();

const timeOfChrismas = new Countdown('25 December 2020 23:59:59 GMT-0300');
setInterval(()=> {
  console.log(timeOfChrismas.total)
}, 1000)

console.log(timeOfChrismas);




// initExercicio();
