import initAnimacaoScroll from "./modules/scroll-animacao.js";
import AccordionList from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropDown from "./modules/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initAnimaisFetch from "./modules/animais-fetch.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import ScrollSuave from "./modules/scroll-suave.js";

const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']");
scrollSuave.init();

const accordion = new AccordionList(".js-accordion dt");
accordion.init();

initModal();
initAnimacaoScroll();
initTabNav();
initToolTip();
initDropDown();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initFetchBitcoin();
