import { handleRedirect } from "./api.js";

// We have been redirected from Spotify with an access code
if (!localStorage.getItem("accessToken")) {
  console.log("hello");
  window.onload = handleRedirect();
}
