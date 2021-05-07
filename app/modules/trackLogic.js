import { getRecommendations } from "./api.js";

export function getTrackFeatures(happy, energyLevel) {
  // Map happy and energy values to track features for API call
  const [danceability, valence] = [getVariation(happy), getVariation(happy)];
  const [tempo, energy] = [
    getVariation(energyLevel),
    getVariation(energyLevel),
  ];

  return {
    danceability,
    valence,
    tempo,
    energy,
  };
}

// Get a randomised number within a specified range
export function getVariation(number) {
  let lowRange = number > 0.05 ? number - 0.05 : number;
  let highRange = number < 0.95 ? number + 0.05 : number;

  lowRange = lowRange * 100;
  highRange = highRange * 100;

  const randomInRange = Math.floor(
    Math.random() * (highRange + 1 - lowRange) + lowRange
  );

  return randomInRange / 100;
}

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

