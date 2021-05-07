function randomNumber(){
  return Math.random().toFixed(1);
}

export function getRandomTrackFeatures(){
  const randomMood = randomNumber();
  const randomEnergy = randomNumber();
  return getTrackFeatures(randomMood, randomEnergy);
}

export function getRandomGenres(genres){
  const randomGenres = [];
  for (let i = 0; i < 5; i++){
    randomGenres.push(genres[Math.floor(Math.random() * (genres.length-1))]);
  }
  return randomGenres;
}

// const randomTrackFeatures = getRandomTrackFeatures();
// const randomGenres = getRandomGenres();
// getRecommendations(randomTrackFeatrues, RandomGenres);