export default class ScrollSuave {
  constructor(linksInternos) {
    this.linksInternos = document.querySelectorAll(linksInternos);
    this.scrollToSection = this.scrollToSection.bind(this); // Bind the method to the class instance
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  addEventListeners() {
    this.linksInternos.forEach((item) => {
      item.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    console.log(this.linksInternos.length);
    if (this.linksInternos.length) {
      this.addEventListeners();
    }
  }
}
