export default function initAccordionList() {
    const dts = document.querySelectorAll('.js-accordion dt');
    if(dts.length) {
        dts[0].classList.add('active')
        dts[0].nextElementSibling.classList.add('active')

        function activeAccordion() {
          this.nextElementSibling.classList.toggle('active');
          this.classList.toggle('active');
        }

        dts.forEach((dt) => {
            dt.addEventListener('click', activeAccordion)
        })
    }
}


