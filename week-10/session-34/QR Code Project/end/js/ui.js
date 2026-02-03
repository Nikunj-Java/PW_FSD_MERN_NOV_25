export function setupUI(generateQRCode) {
  const input = document.getElementById('qr-input');
  const generateBtn = document.getElementById('generate-btn');
  const qrImage = document.getElementById('qr-image');

  generateBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (text) {
      generateQRCode(text, (error, imageUrl) => {
        if (error) {
          alert('Error generating QR code. Please try again.');
        } else {
          qrImage.src = imageUrl;
          qrImage.style.display = 'block';
        }
      });
    } else {
      alert('Please enter some text or URL');
    }
  });
}
