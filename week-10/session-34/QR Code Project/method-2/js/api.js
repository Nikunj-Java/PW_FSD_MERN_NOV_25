export function fetchQRCode(text, onSuccess, onError) {
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onload = function () {
    if (xhr.status === 200) {
      onSuccess(url);
    } else {
      onError("Server error: " + xhr.status);
    }
  };

  xhr.onerror = function () {
    onError("Network error. Please check your connection.");
  };

  xhr.send();
}
