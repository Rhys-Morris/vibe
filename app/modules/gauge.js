import { handleRedirect } from "./api.js";

// We have been redirected from Spotify with an access code
if (!localStorage.getItem("accessToken")) {
  window.onload = handleRedirect();
}
import { userSelect } from "./fav-music.js";

const energyLevel = document.getElementById('lbl')
const moodLevel = document.getElementById('lbl--2')
let energy;
let mood;


const guageBtn = document.getElementById('gauge-btn')
    .addEventListener('click', () => {
        renderMusicPage()
        userSelect()
        selectedMusic()
        energyGauge()
        moodGauge()

    })


function renderMusicPage(){
    const gaugeMainPage = document.getElementById('gauge-main')
    document.write(localStorage['content']);
}


function energyGauge() {
    energy = parseInt(energyLevel.innerText)
    console.log("Current energy level:", energy)
}

function moodGauge() {
    mood = parseInt(moodLevel.innerText)
    console.log("Current mood level:", mood)
}
