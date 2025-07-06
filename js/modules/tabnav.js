export default function initTabMenu() {
    const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabcontent = document.querySelectorAll('[data-tab="content"] section');

    if (tabcontent.length && tabcontent.length) {
    tabcontent[0].classList.add('active')

    function activeTab(index) {
        const anime = tabcontent[index].dataset.anime;
        tabcontent.forEach((item) => item.classList.remove('active'))
        tabcontent[index].classList.add('active', anime);
    }

    tabmenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index)
        })
    })
    }
}

initTabMenu()
