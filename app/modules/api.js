const REDIRECT_URI =
  "https://pedantic-ritchie-cfef15.netlify.app/pages/gauge-page.html";
const CLIENT_ID = "772dfd3acef348b6a32830f9e86b2a97";
const CLIENT_SECRET = "d007b61718e244ee8644829972331a74";
const SCOPE =
  "playlist-modify-private playlist-read-private playlist-read-collaborative";

export function requestAuth() {
  const AUTHORIZE_URL = "https://accounts.spotify.com/authorize";

  let url = AUTHORIZE_URL;
  url += "?client_id=" + CLIENT_ID;
  url += "&response_type=code";
  url += "&redirect_uri=" + REDIRECT_URI;
  url += "&scope=" + SCOPE;

  window.location.href = url;
}

export function parseUrl(url, split) {
  return url.split(split)[1];
}

export async function fetchAccessToken(params) {
  try {
    const TOKEN_URL = "https://accounts.spotify.com/api/token";
    const response = await fetch(TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
      },
      body: params,
    });
    if (response.status !== 200)
      throw new Error("Error fetching access token!");
    const data = await response.json();
    const { access_token: accessToken, refresh_token: refreshToken } = data;

    // Set refresh and access tokens to local storage
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("fetchedTime", Date.now());
  } catch (err) {
    console.error(err);
  }
}

function buildBodyParameters(code) {
  let body = "grant_type=authorization_code";
  body += "&code=" + code;
  body += "&redirect_uri=" + REDIRECT_URI;
  body += "&client_id=" + CLIENT_ID;
  body += "&client_secret=" + CLIENT_SECRET;
  body += "&scope=" + SCOPE;

  fetchAccessToken(body);
}

export function handleRedirect() {
  const code = parseUrl(window.location.href, "code=");
  buildBodyParameters(code);
}

export function initialise() {
  if (localStorage.getItem("accessToken"))
    window.location.href = "./pages/gauge-page.html";
  else {
    requestAuth();
  }
}

// Get data with access token

function buildGenresQueryString(genres) {
  let queryString = "";
  genres.forEach((genre, index) => {
    queryString += index === genres.length - 1 ? genre : `${genre}%2C`;
  });
  return queryString;
}

export async function getRecommendations(trackFeatures, genres) {
  const { danceability, valence, energy } = trackFeatures;
  const genresQuery = buildGenresQueryString(genres);

  // Get min and max values for range requests
  const minDanceability = (danceability < 0.11 ? 0 : danceability - 0).toFixed(
    2
  );
  const maxDanceability = (
    danceability > 0.89 ? 1 : danceability + 0.1
  ).toFixed(2);
  const minValence = (valence < 0.11 ? 0 : valence - 0.1).toFixed(2);
  const maxValence = (valence > 0.89 ? 1 : valence + 0.1).toFixed(2);
  const minEnergy = (energy < 0.11 ? 0 : energy - 0.1).toFixed(2);
  const maxEnergy = (energy > 0.89 ? 1 : energy + 0.1).toFixed(2);

  const response = await fetch(
    `https://api.spotify.com/v1/recommendations?limit=100&seed_genres=${genresQuery}&min_danceability=${minDanceability}&max_danceability=${maxDanceability}&min_valence=${minValence}&max_valence=${maxValence}&min_energy=${minEnergy}&max_energy=${maxEnergy}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }
  );
  const data = await response.json();
  return data;
}

// https://api.spotify.com/v1/recommendations?limit=150&seed_genres=rock&min_danceability=${minDanceability}&max_danceability=${maxDanceability}&min_valence=${minValence}&max_valence=${maxValence}&min_energy=${minEnergy}&max_energy=${maxEnergy}
