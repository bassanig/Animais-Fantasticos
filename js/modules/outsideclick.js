export default function outsideClick(element, clickEvents, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if(!element.hasAttribute(outside)) {
        clickEvents.forEach(userEvent => {
            setTimeout(() => {
                html.addEventListener(userEvent, handleClickOutside);
            })
        })
        
        element.setAttribute(outside, '');
    }
    function handleClickOutside(event) {
        if(!element.contains(event.target)) {
            element.removeAttribute(outside)
            clickEvents.forEach(userEvent => {
                html.removeEventListener(userEvent, handleClickOutside);
            })
            callback();
        }
    }
}