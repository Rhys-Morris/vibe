export function renderError(errorMessage) {
  const errorDiv = document.createElement("div");
  const errorText = document.createElement("h2");
  const errorButton = document.createElement("a");
  errorDiv.className = "error";
  errorText.className = "error__text";
  errorButton.className = "error__button";
  errorButton.classList.add("cta");
  errorButton.textContent = "Home";
  errorButton.href = "../index.html";
  errorText.textContent = errorMessage;
  errorDiv.appendChild(errorText);
  errorDiv.appendChild(errorButton);
  document.querySelector("main").appendChild(errorDiv);
}

export function clearHtml(domElement) {
  document.querySelector(domElement).innerHTML = "";
}
