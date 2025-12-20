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
  const container = document.body; // hearts float anywhere on screen
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = (Math.random() * window.innerWidth) + "px";
    heart.style.top = (window.innerHeight - 100) + "px";
    container.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

// Example: trigger when envelope is hovered
document.querySelector(".envelope").addEventListener("mouseenter", showHearts);

// Or trigger when a button is clicked
// document.querySelector("button").addEventListener("click", showHearts);
