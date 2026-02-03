import { fetchQRCode } from "./api.js";
import { showLoader, hideLoader, showQRCode, showError } from "./ui.js";

const input = document.getElementById("qr-input");
const button = document.getElementById("generate-btn");

button.addEventListener("click", () => {
  const text = input.value.trim();

  if (!text) {
    showError("Please enter text or URL");
    return;
  }

  showLoader();

  fetchQRCode(
    text,
    (imageUrl) => {
      hideLoader();
      showQRCode(imageUrl);
    },
    (errorMsg) => {
      hideLoader();
      showError(errorMsg);
    }
  );
});
