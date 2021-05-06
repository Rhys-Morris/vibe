const REDIRECT_URI = "http://127.0.0.1:5500/app/pages/gauge-page.html";
const CLIENT_ID = "772dfd3acef348b6a32830f9e86b2a97";
const CLIENT_SECRET = "d007b61718e244ee8644829972331a74";

function requestAuth() {
  const AUTHORIZE_URL = "https://accounts.spotify.com/authorize";

  let url = AUTHORIZE_URL;
  url += "?client_id=" + CLIENT_ID;
  url += "&response_type=code";
  url += "&redirect_uri=" + REDIRECT_URI;

  window.location.href = url;
}

function parseUrl(url) {
  return url.split("code=")[1];
}

async function fetchAccessToken(params) {
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

  fetchAccessToken(body);
}

export function handleRedirect() {
  console.log("here");
  const code = parseUrl(window.location.href);
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

async function getGenres() {
  const response = await fetch(
    "https://api.spotify.com/v1/recommendations/available-genre-seeds",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }
  );
  const data = await response.json();
  console.log(data);
}

async function getReccomendation() {
  const response = await fetch(
    "https://api.spotify.com/v1/recommendations?limit=100&seed_genres=indie",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }
  );
  const data = await response.json();
  const img = document.createElement("img");
  img.src = data.tracks[0].album.images[0].url;
  document.body.appendChild(img);
}
