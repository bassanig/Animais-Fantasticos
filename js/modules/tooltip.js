export default function initToolTip() {
     const tooltips = document.querySelectorAll('[data-tooltip]');

     function onMouseOver(event) {
          const tooltipBox = criarTooltipBox(this);
          tooltipBox.style.top = event.pageY + "px"
          tooltipBox.style.left = event.pageX + "px"
          
          onMouseLeave.element = this;
          onMouseLeave.tooltipBox = tooltipBox;
          this.addEventListener('mouseleave', onMouseLeave);
          onMouseMove.tooltipBox = tooltipBox;
          this.addEventListener('mousemove', onMouseMove);
     }

     const onMouseMove = {
          handleEvent(event) {
               this.tooltipBox.style.top = event.pageY + 20 + 'px';
               this.tooltipBox.style.left = event.pageX + 20 + 'px';
          }
     }

     const onMouseLeave = {
          handleEvent() {
               this.tooltipBox.remove();
               this.element.removeEventListener('mouseleave', onMouseLeave)
               this.element.removeEventListener('mousemove', onMouseMove)
          }
     }

     function criarTooltipBox(element) {
          const tooltipBox = document.createElement('div');
          const text = element.getAttribute('aria-label')
          tooltipBox.classList.add('tooltip')
          tooltipBox.innerText = text;
          document.body.appendChild(tooltipBox)
          return tooltipBox;
     }

     tooltips.forEach((tooltip) => {
          tooltip.addEventListener('mouseover', onMouseOver)
     });
}

