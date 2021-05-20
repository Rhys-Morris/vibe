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
  let returnStr = "";
  artists.forEach((artist, index) => {
    returnStr +=
      index === artists.length - 1 ? `${artist.name}` : `${artist.name}, `;
  });
  return returnStr;
}

export function renderTrackCards(tracks) {
  let markup = "";
  tracks.forEach((track) => {
    const trackCard = `
        <div class="playlist__track-card">
          <img src="${
            track.album.images[0].url
          }" alt="band-album-img" class="playlist__track-card__album-image">
          <h4 class="playlist__track-card__band">${buildArtistsString(
            track.artists
          )}</h4>
          <p class="playlist__track-card__album">${track.album.name}</p>
          <p class="playlist__track-card__title">${track.name}</p>
          <a href="${
            track.external_urls.spotify
          }" class="playlist__track-card__play-track"><span class="playlist__track-card__play-symbol">▶</span></a>
        </div>
    `;
    markup += trackCard;
  });
  document.querySelector(".playlist__track-container").innerHTML = markup;
}

export function renderSpinner() {
  const spinner = document.createElement("div");
  spinner.classList = "loading";
  document.querySelector("main").appendChild(spinner);
}

export function renderPlaylistPage(playlist) {
  const playlistPage = `<section class="playlist">
  <div class="playlist__top-box">
  <h1>Get ready to <span class="highlighter">Vibe!</span></h1>
  <a class="playlist__link cta" href=${playlist}>Take me to my playlist!</a>
  </div>
<h2 class="playlist__featured-tracks">Featured Tracks</h2>
<div class="playlist__track-container"></div>
</section>`;
  document.querySelector("main").innerHTML = playlistPage;
}

export function renderGenrePage() {
  const favMusicPage = `
     <section class="genres">
      <div class="container">
        <div class="title">
          <h2>What's your favourite music?</h2>
          <span>Select at least 3 genres</span>
        </div>

        <!-- /** First Row **/ -->
        <div class="content first-row">
          <div class="box-wrap" data-genre="metal">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square metal">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Metal</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="rap">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square rap">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Rap</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="alternative">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square alternative">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Alternative</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="pop">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square pop">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Pop</h4>
              </div>
            </div>
          </div>
        </div>

        <!-- /** second Row **/ -->
        <div class="content second-row">
          <div class="box-wrap" data-genre="rock">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square rock">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Rock</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="techno">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square techno">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Techno</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="country">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square country">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Country</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="jazz">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square jazz">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Jazz</h4>
              </div>
            </div>
          </div>
        </div>

        <!-- /** Third Row **/ -->
        <div class="content third-row">
          <div class="box-wrap" data-genre="indie">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square indie">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Indie</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="hip-hop">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square hip-hop">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Hip-Hop</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="reggae">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square reggae">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Reggae</h4>
              </div>
            </div>
          </div>

          <div class="box-wrap" data-genre="acoustic">
            <i class="fas fa-check-circle fa-4x"></i>
            <div class="square acoustic">
              <div class="circle">
                <div class="inner-cirlce"></div>
                <h4 class="genre-name">Acoustic</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a  id="genre-submit" class="next next--genres" >Next</a>
      </section>
`;
  document.querySelector("main").innerHTML = favMusicPage;
}
