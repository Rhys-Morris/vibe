const genres = document.querySelectorAll('.box-wrap')

genres.forEach((genre) => {
    genre.addEventListener('click', () => {
        genre.classList.remove('box-wrap')
    })
})
import { initialise } from "./modules/api.js";

const heroCta = document.querySelector(".hero__cta");
const isAuthed = false;

heroCta.addEventListener("click", initialise);
