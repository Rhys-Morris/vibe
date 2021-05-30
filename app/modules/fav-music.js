import { getTrackFeatures } from "./trackLogic.js";
import { getRecommendations } from "./api.js";
import {
  clearHtml,
  renderPlaylistPage,
  renderSpinner,
  renderTrackCards,
} from "./render.js";
import { buildTrackIDs, addToPlaylist } from "./create-playlist.js";

export function addGenreListeners() {
  const genres = document.querySelectorAll(".box-wrap");
  genres.forEach((genre) => {
    genre.addEventListener("click", () => {
      genre.classList.toggle("box-wrap");
      genre.classList.toggle("selected");
    });
  });
}

function getGenres() {
  const selectedGenres = Array.from(document.querySelectorAll(".selected"));
  const mappedGenres = selectedGenres.map((element) => {
    return element.dataset.genre.toLowerCase();
  });
  return mappedGenres;
}

export function addGenreSubmitListener() {
  document
    .getElementById("genre-submit")
    .addEventListener("click", async () => {
      const genres = getGenres();
      const trackFeatures = getTrackFeatures(
        localStorage.getItem("mood"),
        localStorage.getItem("energy")
      );

      // Render spinner and clear out html
      clearHtml("main");
      renderSpinner();

      // Make recommendations request
      const recommendations = await getRecommendations(trackFeatures, genres);

      // Limit to 15 tracks max
      let recommendationTracks = recommendations.tracks;
      recommendationTracks =
        recommendationTracks.length > 15
          ? recommendationTracks.slice(0, 15)
          : recommendationTracks;

      // Make call to create a playlist
      const trackIds = buildTrackIDs(recommendations);
      const playlist = await addToPlaylist(trackIds);

      clearHtml("main");
      renderPlaylistPage(playlist);
      renderTrackCards(recommendationTracks);

      // Once returns - clear page and render playlist markup and render cards
    });
}
