import { initialise } from "./modules/api.js";

const heroCta = document.querySelector(".hero__cta");
const isAuthed = false;

heroCta.addEventListener("click", initialise);
