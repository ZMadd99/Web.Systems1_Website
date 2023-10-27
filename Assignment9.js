const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Object properties
const objectSize = 50;
let x = 50; // Initial X position
let y = 50; // Initial Y position
let xSpeed = 2; // Initial X speed
let ySpeed = 2; // Initial Y speed

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the object
  ctx.fillStyle = "blue";
  ctx.fillRect(x, y, objectSize, objectSize);

  // Update object position
  x += xSpeed;
  y += ySpeed;

  // Bounce when hitting the canvas boundaries
  if (x + objectSize > canvas.width || x < 0) {
    xSpeed = -xSpeed;
  }
  if (y + objectSize > canvas.height || y < 0) {
    ySpeed = -ySpeed;
  }
}

// Start the animation
animate();

// Handle mouse click event
canvas.addEventListener("click", () => {
  // Change the object's color on mouse click
  ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
});

canvas.addEventListener("click", () => {
    // Change the object's color on mouse click
    ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  
    // Change the object's direction on mouse click
    xSpeed = Math.random() > 0.5 ? Math.abs(xSpeed) : -Math.abs(xSpeed);
    ySpeed = Math.random() > 0.5 ? Math.abs(ySpeed) : -Math.abs(ySpeed);
  
    // Add more interactions as desired
  });
  