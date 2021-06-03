import { initialise } from "./modules/api.js";

// hamburger nav menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__nav-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    console.log("here")
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const heroCta = document.querySelector(".hero__cta");
heroCta.addEventListener("click", initialise);