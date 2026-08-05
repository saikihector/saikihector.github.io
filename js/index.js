class HamburguerNavBar {
    constructor(hamburguer, navList, navLinks) {
        this.hamburguer = document.querySelector(hamburguer);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((links, index) => {
            links.style.animation
            ? (links.style.animation = "")
            : (links.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        });
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks()
    }

    addClickEvent() {
        this.hamburguer.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.hamburguer) {
            this.addClickEvent();
        }
        return this;
    }
}

const hamburguerNavBar = new HamburguerNavBar(
    ".hamburguer",
    ".nav-list",
    ".nav-list li",
);

hamburguerNavBar.init();