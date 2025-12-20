// ========================
// NO BUTTON TELEPORT
// ========================
const noBtn = document.getElementById("noBtn");
if (noBtn) {
  function teleportNo() {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const randomX = Math.random() * (viewportWidth - btnWidth);
    const randomY = Math.random() * (viewportHeight - btnHeight);

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.zIndex = 1000;
  }

  noBtn.addEventListener("click", teleportNo);
  noBtn.addEventListener("touchstart", teleportNo);
}

// ========================
// ENVELOPE CLICK TO OPEN / CLOSE + HEARTS
// ========================
const envelope = document.querySelector(".envelope");
const letter = document.querySelector(".letter");

envelope.addEventListener("click", (event) => {
  // Only toggle open if user clicks outside the letter
  if (!letter.contains(event.target)) {
    envelope.classList.toggle("open");
  }

  // Generate hearts when opening
  if (envelope.classList.contains("open")) {
    const rect = envelope.getBoundingClientRect();
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.textContent = "❤️";

      const x = Math.random() * (rect.width - 24);
      const y = Math.random() * (rect.height - 24);

      heart.style.left = `${rect.left + x}px`;
      heart.style.top = `${rect.top + y}px`;

      document.body.appendChild(heart);

      heart.addEventListener("animationend", () => heart.remove());
    }
  }
});
