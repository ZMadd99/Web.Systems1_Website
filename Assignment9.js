const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const objectSize = 50;
let x = 50; // Initial X position
let y = 50; // Initial Y position
let xSpeed = 2; // Initial X speed
let ySpeed = 2; // Initial Y speed

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, objectSize, objectSize);

  x += xSpeed;
  y += ySpeed;

  if (x + objectSize > canvas.width || x < 0) {
    xSpeed = -xSpeed;
  }
  if (y + objectSize > canvas.height || y < 0) {
    ySpeed = -ySpeed;
  }
}

animate();

canvas.addEventListener("click", () => {
  ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
});

canvas.addEventListener("click", () => {
    ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  
    xSpeed = Math.random() > 0.5 ? Math.abs(xSpeed) : -Math.abs(xSpeed);
    ySpeed = Math.random() > 0.5 ? Math.abs(ySpeed) : -Math.abs(ySpeed);
  
  });
  
