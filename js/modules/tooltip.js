export default class ToolTip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseOver(event) {
    this.criarTooltipBox(event.currentTarget);

    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove(event) {
    //adiciona uma verificacao para ver se ta saindo da tela e muda a direcao da mesma
    if (event.pageX + 220 > window.innerWidth) {
      this.tooltipBox.style.left = event.pageX - 175 + "px";
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    }
    this.tooltipBox.style.top = event.pageY + 20 + "px";
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    event.currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
  }
}
