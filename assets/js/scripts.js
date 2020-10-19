import MenuDropdown from "./module/menu-dropdown.js";
import MenuMobile from "./module/menu-mobile.js";
import SmoothScroll from "./module/smooth-scroll.js";
import NavTab from "./module/nav-tab.js";
import Modal from "./module/modal.js";
import Tooltip from "./module/tooltip.js";
import WorkOperation from "./module/work-operation.js";
import initFetch from "./module/animais-fetch.js";
import Bitcoin from "./module/bitcoin-fetch.js";
import Accordion from "./module/accordion-list.js";
import AnimaScroll from "./module/anima-scroll.js";
import { SlideNav } from './module/slide.js';

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

const menuDropdown = new MenuDropdown("[data-dropdown]");
menuDropdown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const navTab = new NavTab(".js-animais li", "[data-tab='content'] section");
navTab.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const workOperation = new WorkOperation("[data-week]");
workOperation.init();

const bitcoin = new Bitcoin("https://blockchain.info/ticker", "[data-bitcoin]");
bitcoin.init();

const slide = new SlideNav('[data-slide="slide"]', '[data-slide="container"]');
slide.init();
slide.addControl('[data-slide="control"]')

initFetch('./animaisapi.json', ".numbers__grid");
// const timeOfChrismas = new Countdown('25 December 2020 23:59:59 GMT-0300');

// setInterval(()=> {
//   console.log(timeOfChrismas.total)
// }, 1000)

// initExercicio();
