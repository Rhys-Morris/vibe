import { initialise } from "./modules/api.js";

const heroCta = document.querySelector(".hero__cta");
heroCta.addEventListener("click", initialise);


// hamburger nav menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__nav-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
