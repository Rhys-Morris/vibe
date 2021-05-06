import { getRecommendations, requestAuth, fetchAccessToken } from "./api.js";
import { getTrackFeatures } from "./trackLogic.js";


// const trackFeatures = getTrackFeatures(0.3, 0.6);
// const trackFeatures2 = getTrackFeatures(0.2, 0.8);
// const trackFeatures3 = getTrackFeatures(0.5, 0.5);
// const trackFeatures4 = getTrackFeatures(0.8, 0.9);
// const trackFeatures5 = getTrackFeatures(0.4, 0.6);

// getRecommendations(trackFeatures, ["rock", "indie", "jazz"]);
// getRecommendations(trackFeatures2, ["rock", "indie", "jazz"]);
// getRecommendations(trackFeatures3, ["rock", "indie", "jazz"]);
// getRecommendations(trackFeatures4, ["rock", "indie", "jazz"]);
// getRecommendations(trackFeatures5, ["rock", "indie", "jazz"]);

// const one = getRecommendations(trackFeatures5, ["rock", "indie", "jazz"])
//     .then(response => console.log(response))  
//     .catch(e => console.log("something's broken"))


export async function createPlaylist() {
    const response = await fetch(
        'https://api.spotify.com/v1/users/me/playlists',
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
          name: "It's a Vibe",
          description: "Your mood playlist from Vibe",
          public: false,
        }
    )
    const data = await response.json();
    console.log(data);
}

createPlaylist();