export default class AccordionList {
  constructor(elements) {
    this.dts = document.querySelectorAll(elements);
    this.activeClass = "active";
  }

  toggleAccordion(dt) {
    dt.nextElementSibling.classList.toggle(this.activeClass);
    dt.classList.toggle(this.activeClass);
  }

  addEventListeners() {
    this.dts.forEach((dt) => {
      dt.addEventListener("click", () => this.toggleAccordion(dt));
    });
  }

  init() {
    if (this.dts.length) {
      this.addEventListeners();
    }
    return this;
  }
}
