/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordionList)\n/* harmony export */ });\nfunction initAccordionList() {\r\n    const dts = document.querySelectorAll('.js-accordion dt');\r\n    if(dts.length) {\r\n        dts[0].classList.add('active')\r\n        dts[0].nextElementSibling.classList.add('active')\r\n\r\n        function activeAccordion(event) {\r\n        this.nextElementSibling.classList.toggle('active');\r\n        this.classList.toggle('active');\r\n        }\r\n\r\n        dts.forEach((dt) => {\r\n            dt.addEventListener('click', activeAccordion)\r\n        })\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://2/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\r\n  function animaNumeros() {\r\n    const numeros = document.querySelectorAll('[data-numero]');\r\n\r\n    numeros.forEach((numero) => {\r\n        const total = +numero.innerText;\r\n\r\n        const incremento = Math.floor(total / 100);\r\n        let start = 0;\r\n        const timer = setInterval(() => {\r\n            start = start + incremento;\r\n            numero.innerText = start;\r\n            if(start > total) {\r\n              numero.innerText = total;\r\n                clearInterval(timer);\r\n            }\r\n        }, 20 * Math.random())\r\n\r\n      });\r\n  }\r\n\r\n  function handleMutation(mutation) {\r\n    if(mutation[0].target.classList.contains('active')) {\r\n      observer.disconnect();\r\n      animaNumeros();\r\n    };\r\n    \r\n  }\r\n\r\n  const observerTarget = document.querySelector('.numeros')\r\n  const observer = new MutationObserver(handleMutation);\r\n  observer.observe(observerTarget, {attributes: true})\r\n}\r\n\n\n//# sourceURL=webpack://2/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/animais-fetch.js":
/*!*************************************!*\
  !*** ./js/modules/animais-fetch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaisFetch)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction initAnimaisFetch() {\r\n    \r\n        async function fetchAnimais(url) {\r\n        try {\r\n            const animaisResponse = await fetch(url);\r\n            const animaisJson = await animaisResponse.json()\r\n            const numerosGrid = document.querySelector('.numeros-grid');\r\n            animaisJson.forEach(animal => {\r\n                const divAnimal = createAnimal(animal);\r\n                numerosGrid.appendChild(divAnimal)\r\n            });\r\n            (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n            } catch(erro) {\r\n                console.log(erro);\r\n            }\r\n        }\r\n\r\n    function createAnimal(animal) {\r\n        const div = document.createElement('div');\r\n        div.classList.add('numero-animal');\r\n\r\n        div.innerHTML = `<h3>${animal.specie}</h3>\r\n            <span data-numero>${animal.total}</span>`\r\n        \r\n        return div;\r\n    }\r\n\r\n    fetchAnimais('./animais-api.json');\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://2/./js/modules/animais-fetch.js?");

/***/ }),

/***/ "./js/modules/dropdown.js":
/*!********************************!*\
  !*** ./js/modules/dropdown.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDown)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nfunction initDropDown() {\r\n    const dropDownMenus = document.querySelectorAll('[data-dropdown');\r\n    const clickEvents = ['click', 'touchstart'];\r\n\r\n    function handleClick(event) {\r\n        event.preventDefault()\r\n        this.classList.add('active');\r\n        (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, clickEvents, () => {\r\n            this.classList.remove('active')\r\n        });\r\n    }\r\n\r\n    dropDownMenus.forEach(menu => {\r\n        clickEvents.forEach(userEvent => menu.addEventListener(userEvent, handleClick))\r\n    });\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://2/./js/modules/dropdown.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {}\nconst btcPreco = document.querySelector(\".btc-preco\");\n\nfetch(\"https://blockchain.info/ticker\").then((r) => {\n  r.json()\n    .then((body) => {\n      console.log(body);\n      const bitcoin = (1000 / body.BRL.buy).toFixed(4);\n      btcPreco.innerText = bitcoin;\n    })\n    .catch((erro) => {\n      console.log(Error(erro));\n    });\n});\n\n\n//# sourceURL=webpack://2/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector(\"[data-semana]\");\n  const diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\n  const horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\n\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horaAgora = dataAgora.getHours();\n\n  const horarioAberto =\n    horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1];\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add(\"aberto\");\n  }\n}\n\n\n//# sourceURL=webpack://2/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\n  const menuList = document.querySelector('[data-menu=\"list\"]');\n  const eventos = [\"click\", \"touchstart\"];\n\n  if (menuButton) {\n    function operMenu() {\n      menuList.classList.toggle(\"active\");\n      menuButton.classList.toggle(\"active\");\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n        menuList.classList.remove(\"active\");\n        menuButton.classList.remove(\"active\");\n      });\n    }\n\n    eventos.forEach((userEvent) => {\n      menuButton.addEventListener(userEvent, operMenu);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://2/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\n  const modalContainer = document.querySelector('[data-modal=\"container\"]');\n\n  if (botaoAbrir && botaoFechar && modalContainer) {\n    function toggleModal(event) {\n      event.preventDefault();\n      modalContainer.classList.toggle(\"active\");\n    }\n\n    function cliqueForaModal(event) {\n      if (event.target === this) {\n        toggleModal(event);\n      }\n    }\n\n    botaoAbrir.addEventListener(\"click\", toggleModal);\n    botaoFechar.addEventListener(\"click\", toggleModal);\n    modalContainer.addEventListener(\"click\", cliqueForaModal);\n  }\n}\n\n\n//# sourceURL=webpack://2/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, clickEvents, callback) {\r\n    const html = document.documentElement;\r\n    const outside = 'data-outside';\r\n\r\n    if(!element.hasAttribute(outside)) {\r\n        clickEvents.forEach(userEvent => {\r\n            setTimeout(() => {\r\n                html.addEventListener(userEvent, handleClickOutside);\r\n            })\r\n        })\r\n        \r\n        element.setAttribute(outside, '');\r\n    }\r\n    function handleClickOutside(event) {\r\n        if(!element.contains(event.target)) {\r\n            element.removeAttribute(outside)\r\n            clickEvents.forEach(userEvent => {\r\n                html.removeEventListener(userEvent, handleClickOutside);\r\n            })\r\n            callback();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://2/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\r\n    const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n        if(sections.length) {\r\n        const windowMetade = window.innerHeight * 0.6;\r\n\r\n        function animaScroll() {\r\n            sections.forEach((section) => {\r\n                const sectionTop = section.getBoundingClientRect().top;\r\n                const isSectionVisible = (sectionTop - windowMetade) < 0;\r\n                if(isSectionVisible) {\r\n                    section.classList.add('active');\r\n                } else if (section.classList.contains('active')){\r\n                    section.classList.remove('active')\r\n                }\r\n                \r\n            })\r\n        }\r\n\r\n        animaScroll();\r\n\r\n        window.addEventListener('scroll', animaScroll)\r\n    }\r\n}\n\n//# sourceURL=webpack://2/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\n\r\nfunction initScrollSuave() {\r\n    const linksInternos = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"');\r\n\r\n    function scrollToSection(event) {\r\n        event.preventDefault();\r\n        const href = event.currentTarget.getAttribute('href');\r\n        const section = document.querySelector(href);\r\n        console.log(href);\r\n\r\n        section.scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start',\r\n        })\r\n    }\r\n\r\n    linksInternos.forEach((item) => {\r\n        item.addEventListener('click', scrollToSection);\r\n    })\r\n}\n\n//# sourceURL=webpack://2/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabMenu)\n/* harmony export */ });\nfunction initTabMenu() {\r\n    const tabmenu = document.querySelectorAll('[data-tab=\"menu\"] li');\r\n    const tabcontent = document.querySelectorAll('[data-tab=\"content\"] section');\r\n\r\n    if (tabcontent.length && tabcontent.length) {\r\n    tabcontent[0].classList.add('active')\r\n\r\n    function activeTab(index) {\r\n        const anime = tabcontent[index].dataset.anime;\r\n        tabcontent.forEach((item) => item.classList.remove('active'))\r\n        tabcontent[index].classList.add('active', anime);\r\n    }\r\n\r\n    tabmenu.forEach((itemMenu, index) => {\r\n        itemMenu.addEventListener('click', () => {\r\n            activeTab(index)\r\n        })\r\n    })\r\n    }\r\n}\r\n\r\ninitTabMenu()\r\n\n\n//# sourceURL=webpack://2/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initToolTip)\n/* harmony export */ });\nfunction initToolTip() {\r\n     const tooltips = document.querySelectorAll('[data-tooltip]');\r\n\r\n     function onMouseOver(event) {\r\n          const tooltipBox = criarTooltipBox(this);\r\n          tooltipBox.style.top = event.pageY + \"px\"\r\n          tooltipBox.style.left = event.pageX + \"px\"\r\n          \r\n          onMouseLeave.element = this;\r\n          onMouseLeave.tooltipBox = tooltipBox;\r\n          this.addEventListener('mouseleave', onMouseLeave);\r\n          onMouseMove.tooltipBox = tooltipBox;\r\n          this.addEventListener('mousemove', onMouseMove);\r\n     }\r\n\r\n     const onMouseMove = {\r\n          handleEvent(event) {\r\n               this.tooltipBox.style.top = event.pageY + 20 + 'px';\r\n               this.tooltipBox.style.left = event.pageX + 20 + 'px';\r\n          }\r\n     }\r\n\r\n     const onMouseLeave = {\r\n          handleEvent() {\r\n               this.tooltipBox.remove();\r\n               this.element.removeEventListener('mouseleave', onMouseLeave)\r\n               this.element.removeEventListener('mousemove', onMouseMove)\r\n          }\r\n     }\r\n\r\n     function criarTooltipBox(element) {\r\n          const tooltipBox = document.createElement('div');\r\n          const text = element.getAttribute('aria-label')\r\n          tooltipBox.classList.add('tooltip')\r\n          tooltipBox.innerText = text;\r\n          document.body.appendChild(tooltipBox)\r\n          return tooltipBox;\r\n     }\r\n\r\n     tooltips.forEach((tooltip) => {\r\n          tooltip.addEventListener('mouseover', onMouseOver)\r\n     });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://2/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown.js */ \"./js/modules/dropdown.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_animais_fetch_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/animais-fetch.js */ \"./js/modules/animais-fetch.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_dropdown_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\n;(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_animais_fetch_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\r\n;(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])()\n\n//# sourceURL=webpack://2/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;