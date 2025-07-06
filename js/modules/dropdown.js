import outsideClick from "./outsideclick.js";

export default function initDropDown() {
    const dropDownMenus = document.querySelectorAll('[data-dropdown');
    const clickEvents = ['click', 'touchstart'];

    function handleClick(event) {
        event.preventDefault()
        this.classList.add('active');
        outsideClick(this, clickEvents, () => {
            this.classList.remove('active')
        });
    }

    dropDownMenus.forEach(menu => {
        clickEvents.forEach(userEvent => menu.addEventListener(userEvent, handleClick))
    });
}
















