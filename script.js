// Play holiday music and show surprise message
document.getElementById("surpriseButton").addEventListener("click", () => {
  // Play festive music
  const music = document.getElementById("holidayMusic");
  music.play();

  // Display the surprise message
  const surpriseMessage = document.getElementById("surpriseMessage");
  surpriseMessage.style.display = "block";
  surpriseMessage.innerHTML = `
    🎅 Ho Ho Ho, [Name]! <br>
    You're the brightest star of this holiday season! ✨<br>
    Let's make unforgettable memories. Wishing you love, laughter, and all the cookies you can eat! 🍪💖
  `;

  // Trigger confetti
  generateConfetti();
});

// Confetti Generator
function generateConfetti() {
  const confettiContainer = document.getElementById("confetti-container");

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 2 + 3 + "s";

    confettiContainer.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => confetti.remove(), 5000);
  }
}

