import { initialise } from "./modules/api.js";

const heroCta = document.querySelector(".hero__cta");
heroCta.addEventListener("click", initialise);
