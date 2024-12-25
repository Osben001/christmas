// Add interactivity to the buttons
const music = document.getElementById("holidayMusic");
const surpriseMessage = document.getElementById("surpriseMessage");
const snowContainer = document.getElementById("snowContainer");

// Surprise Button: Display a fun message
document.getElementById("surpriseButton").addEventListener("click", () => {
  surpriseMessage.style.display = "block";
  surpriseMessage.innerHTML = `
    🎅 Ho Ho Ho, Dara! 🎄<br>
    You're the brightest star of this holiday season! ✨<br>
    Here's to unforgettable moments and all the cookies! 🍪💖
  `;
  generateConfetti();
});

// Snow Button: Activate virtual snow
document.getElementById("snowButton").addEventListener("click", () => {
  createSnow();
  alert("Let it snow, let it snow, let it snow! ❄️");
});

// Lights Button: Glow all text
document.getElementById("lightsButton").addEventListener("click", () => {
  document.querySelectorAll(".container h1, .container h2, .container p").forEach((el) => {
    el.style.textShadow = "0px 0px 20px #ffcc00";
  });
  alert("The holiday lights are shining bright! 🌟");
});

// Music Button: Play festive music
document.getElementById("musicButton").addEventListener("click", () => {
  music.play();
  alert("Playing festive tunes! 🎶");
});

// Joke Button: Show a random holiday joke
document.getElementById("jokeButton").addEventListener("click", () => {
  const jokes = [
    "Why did Santa go to music school? To improve his wrapping skills! 🎁",
    "What do you call a snowman in the summer? A puddle! ⛄",
    "Why was the Christmas tree so bad at sewing? It kept dropping its needles! 🎄",
    "What’s every elf’s favorite type of music? Wrap music! 🎶",
    "Why didn’t the skeleton go to the Christmas party? He had no-body to go with! 💀",
  ];
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  alert(randomJoke);
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

// Create Snowflakes
function createSnow() {
  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄️";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = Math.random() * 5 + 3 + "s";
    snowflake.style.opacity = Math.random();

    snowContainer.appendChild(snowflake);

    // Remove snowflake after animation
    setTimeout(() => snowflake.remove(), 8000);
  }
}
