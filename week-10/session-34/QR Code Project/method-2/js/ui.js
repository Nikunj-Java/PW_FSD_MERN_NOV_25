export function showLoader() {
  document.getElementById("placeholder-text").style.display = "none";
  document.getElementById("preloader").style.display = "flex";
  document.getElementById("qr-image").style.display = "none";
}

export function hideLoader() {
  document.getElementById("preloader").style.display = "none";
}

export function showQRCode(imageUrl) {
  const img = document.getElementById("qr-image");
  img.src = imageUrl;
  img.style.display = "block";
}

export function showError(message) {
  hideAll();
  const result = document.getElementById("qr-result");
  result.innerHTML = `<p style="color:red;">${message}</p>`;
}

function hideAll() {
  document.getElementById("placeholder-text").style.display = "none";
  document.getElementById("preloader").style.display = "none";
  document.getElementById("qr-image").style.display = "none";
}
