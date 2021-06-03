export function getTrackFeatures(happy, energyLevel) {
  // Map happy and energy values to track features for API call
  happy = Number(happy);
  energyLevel = Number(energyLevel);
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
