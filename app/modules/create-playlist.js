import { getRecommendations } from "./api.js";
import { getTrackFeatures } from "./trackLogic.js";


const trackFeatures = getTrackFeatures(0.3, 0.6);
const trackFeatures2 = getTrackFeatures(0.2, 0.8);
const trackFeatures3 = getTrackFeatures(0.5, 0.5);
const trackFeatures4 = getTrackFeatures(0.8, 0.9);
const trackFeatures5 = getTrackFeatures(0.4, 0.6);

getRecommendations(trackFeatures, ["rock", "indie", "jazz"]);
getRecommendations(trackFeatures2, ["rock", "indie", "jazz"]);
getRecommendations(trackFeatures3, ["rock", "indie", "jazz"]);
getRecommendations(trackFeatures4, ["rock", "indie", "jazz"]);
getRecommendations(trackFeatures5, ["rock", "indie", "jazz"]);

const one = getRecommendations(trackFeatures5, ["rock", "indie", "jazz"])
    .then(response => console.log(response))  
    .catch(e => console.log("something's broken"))