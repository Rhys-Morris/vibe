import { getRecommendations } from "./api.js";
import { getTrackFeatures } from "./trackLogic.js";

export async function createPlaylist() {
  const response = await fetch(`https://api.spotify.com/v1/me/playlists`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      name: "It's a Vibe",
      description: "My new playlist from Vibe",
      public: false,
    }),
  });
  const data = await response.json();
  return data;
}

export async function addToPlaylist(trackIDs) {
  let newPlaylistData = await createPlaylist();
  console.log(newPlaylistData);

  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${newPlaylistData.id}/tracks`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        uris: trackIDs,
      }),
    }
  );
  const data = await response.json();
  return newPlaylistData.external_urls.spotify;
}

export function buildTrackIDs(rec) {
  let tracks = rec.tracks.map((track) => track.uri);
  return tracks;
}

// This is to test

// const trackFeatures5 = getTrackFeatures(0.4, 0.6);
// const recommendations = getRecommendations(trackFeatures5, ["rock", "indie", "jazz"])
//     .then(buildTrackIDs)
//     .then(addToPlaylist)
