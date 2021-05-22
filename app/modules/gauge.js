// import { handleRedirect, requestAuth, parseUrl } from "./api.js";
import { renderError, clearHtml, renderGenrePage } from "./render.js";
import { addGenreListeners, addGenreSubmitListener } from "./fav-music.js";

let errorRendered = false;

// Check user has auth'd
if (parseUrl(window.location.href, "error=") === "access_denied") {
  errorRendered = true;
  clearHtml("main");
  renderError(
    "You must authorise access to a Spotify account to utilise this application!"
  );
}

if (!localStorage.getItem("accessToken")) {
  // We have been redirected from Spotify with an access code
  window.onload = handleRedirect();
}
// We have an expired access code and need to dump out local storage and refresh
// Wait two seconds before checking to allow new fetch

setTimeout(() => {
  if (
    !errorRendered &&
    Date.now() - localStorage.getItem("fetchedTime") > 3540000
  ) {
    localStorage.clear();
    requestAuth();
  }
}, 2000);
``;

const energyLevel = document.getElementById("lbl");
const moodLevel = document.getElementById("lbl--2");
let energy;
let mood;

// Listen for click on next - get the mood, energy and render new page
const gaugeBtn = document.getElementById("gauge-btn");
gaugeBtn.addEventListener("click", () => {
  energyGauge();
  moodGauge();
  clearHtml("main");
  renderGenrePage();
  addGenreListeners();
  addGenreSubmitListener();
});

function energyGauge() {
  energy = parseInt(energyLevel.innerText) / 100;
  localStorage.setItem("energy", energy);
}

function moodGauge() {
  mood = parseInt(moodLevel.innerText) / 100;
  localStorage.setItem("mood", mood);
}
