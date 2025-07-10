export default class initTabMenu {
  constructor(menu, content) {
    this.tabmenu = document.querySelectorAll(menu);
    this.tabcontent = document.querySelectorAll(content);
    this.activeClass = "active";
  }

  activeTab(index) {
    const anime = this.tabcontent[index].dataset.anime;
    this.tabcontent.forEach((item) => item.classList.remove("active"));
    this.tabcontent[index].classList.add("active", anime);
  }

  addEventListeners() {
    this.tabmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabcontent.length && this.tabcontent.length) {
      this.activeTab(0);
      this.addEventListeners();
      return this;
    }
  }
}
