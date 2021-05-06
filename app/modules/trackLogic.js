function getTrackFeatures(happy, energy) {}

function getVariation(number) {
  let lowRange = number > 0.05 ? number - 0.05 : number;
  let highRange = number < 0.95 ? number + 0.05 : number;

  lowRange = lowRange * 100;
  highRange = highRange * 100;

  const randomInRange = Math.floor(
    Math.random() * (highRange + 1 - lowRange) + lowRange
  );

  return randomInRange / 100;
}
