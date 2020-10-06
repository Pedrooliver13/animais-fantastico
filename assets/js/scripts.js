import MenuDropdown from "./module/menu-dropdown.js";
import MenuMobile from "./module/menu-mobile.js";
import SmoothScroll from "./module/smooth-scroll.js";
import NavTab from "./module/nav-tab.js";
import Modal from "./module/modal.js";
import Tooltip from "./module/tooltip.js";
import initWorkOperation from "./module/work-operation.js";
import initAnimalFetch from "./module/animais-fetch.js";
import initBitcoinFetch from "./module/bitcoin-fetch.js";
import Accordion from "./module/accordion-list.js";
import AnimaScroll from "./module/anima-scroll.js";
// import Countdown from './module/countdown.js';
// import initExercicio from './module/exercicio.js';

const smoothScroll = new SmoothScroll('[data-scroll="smooth"] a[href^="#"]');
smoothScroll.init();

const animaScroll = new AnimaScroll('[data-anime="scroll"]');
animaScroll.init();

const accordion = new Accordion('[data-menu="accordion"] dt');
accordion.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
modal.init();

const menuDropdown = new MenuDropdown('[data-dropdown]');
menuDropdown.init()

const navTab = new NavTab(".js-animais li", "[data-tab='content'] section");
navTab.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

initWorkOperation();
initAnimalFetch();
initBitcoinFetch();

// const timeOfChrismas = new Countdown('25 December 2020 23:59:59 GMT-0300');

// setInterval(()=> {
//   console.log(timeOfChrismas.total)
// }, 1000)

// initExercicio();
