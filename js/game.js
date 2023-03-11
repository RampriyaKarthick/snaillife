const canvas = document.getElementById("game-canvas");
const context = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();

const image = new Image();
image.src = "images/sky.png";
image.onload = () => {
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  context.font = "bold 48px Arial";
  context.fillStyle = "#ffffff";
  context.textAlign = "center";
  context.fillText("SNAIL LIFE", canvas.width / 2, canvas.height / 2);
};

const ctx = canvas.getContext("2d");

const heroImg = new Image();
heroImg.src = "images/HeroSnail.png";
heroImg.onload = function() {
  let heroX = 0;
  let heroY = canvas.height / 2;

  let canvasX = 0;
  const canvasWidth = canvas.width * 2;

  let isGoingUp = false;
  let isGoingDown = false;
  let isGameOver = false;
  let isPaused = false;
  let speed = 2;

  function drawHero() {
    ctx.drawImage(heroImg, heroX, heroY, 175, 175);
  }

  function updateGame() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    context.drawImage(image, -canvasX, 0, canvasWidth, canvas.height);
    context.drawImage(image, canvasWidth - canvasX, 0, canvasWidth, canvas.height);

    // Draw hero
    drawHero();

    // Move hero
    if (isGoingUp) {
      heroY -= 5;
    } else if (isGoingDown) {
      heroY += 5;
    }

    // Keep hero within canvas
    if (heroY < 0) {
      heroY = 0;
    } else if (heroY > canvas.height - 100) {
      heroY = canvas.height - 100;
    }

    // Move canvas
    if (!isGameOver && !isPaused) {
      canvasX += speed;
      if (canvasX >= canvasWidth) {
        canvasX = 0;
      }
    }

    // Request next frame
    if (!isGameOver && !isPaused) {
      requestAnimationFrame(updateGame);
    }
  }

  // Handle key presses
  document.addEventListener("keydown", function(event) {
    if (event.code === "ArrowUp") {
      isGoingUp = true;
    } else if (event.code === "ArrowDown") {
      isGoingDown = true;
    } else if (event.code === "Space") {
      if (isPaused) {
        isPaused = false;
        requestAnimationFrame(updateGame);
      } else {
        isPaused = true;
      }
    }
  });

  document.addEventListener("keyup", function(event) {
    if (event.code === "ArrowUp") {
      isGoingUp = false;
    } else if (event.code === "ArrowDown") {
      isGoingDown = false;
    }
  });

  // Start game loop
  requestAnimationFrame(updateGame);
};
