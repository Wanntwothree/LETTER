const noBtn = document.getElementById("nobtn");

if (noBtn) {
  noBtn.addEventListener("click", () => {
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  });
}
function showHearts() {
  const container = document.getElementById("hearts-container");
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = (Math.random() * window.innerWidth) + "px";
    heart.style.top = (window.innerHeight - 100) + "px";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.querySelector(".envelope");
  if (envelope) {
    envelope.addEventListener("mouseenter", showHearts);
  }
});

