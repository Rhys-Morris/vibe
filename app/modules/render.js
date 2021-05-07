export function renderError(errorMessage) {
  const errorDiv = document.createElement("div");
  const errorText = document.createElement("h2");
  const errorButton = document.createElement("a");
  errorDiv.className = "error";
  errorText.className = "error__text";
  errorButton.className = "error__button";
  errorButton.classList.add("cta");
  errorButton.textContent = "Home";
  errorButton.href = "../index.html";
  errorText.textContent = errorMessage;
  errorDiv.appendChild(errorText);
  errorDiv.appendChild(errorButton);
  document.querySelector("main").appendChild(errorDiv);
}

export function clearHtml(domElement) {
  document.querySelector(domElement).innerHTML = "";
}

function buildArtistsString(artists) {
  const returnStr = "";
  artists.forEach((artist, index) => {
    returnStr +=
      index === artists.length - 1 ? `${artist.name}` : `${artist.name}, `;
  });
  return returnStr;
}

function renderCards(tracks) {
  const markup = "";
  tracks.forEach((track) => {
    const trackCard = `
    <div class="playlist__track-container">
        <div class="playlist__track-card">
          <img src="${
            track.album.images[0].url
          }" alt="band-album-img" class="playlist__track-card__album-image">
          <h4 class="playlist__track-card__band">${buildArtistsString(
            track.artists
          )}</h4>
          <p class="playlist__track-card__album">${track.album.name}</p>
          <p class="playlist__track-card__title">${track.name}</p>
          <div class="playlist__track-card__play-track"><span class="playlist__track-card__play-symbol">▶</span></div>
        </div>
    `;
    markup += trackCard;
  });
  document.querySelector(".playlist__track-container");
}
