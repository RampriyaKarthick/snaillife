/*const canvas = document.getElementById("game-canvas");
const context = canvas.getContext("2d");

const image = new Image();
image.src = "images/sky.png";
image.onload = () => {
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
};*/

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

window.addEventListener("resize", resizeCanvas);

