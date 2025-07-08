export default class AccordionList {
  constructor() {
    this.dts = document.querySelectorAll(".js-accordion dt");
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion(event) {
    event.target.nextElementSibling.classList.toggle("active");
    event.target.classList.toggle("active");
  }

  addEventListeners() {
    this.dts.forEach((dt) => {
      dt.addEventListener("click", this.toggleAccordion);
    });
  }

  init() {
    if (this.dts.length) {
      this.addEventListeners();
    }
    return this;
  }
}
