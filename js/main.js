// Set up variables
var score = 0;
var time = 30;
var timerInterval;
var ball = document.getElementById("ball");

// Start the game
startGame();

function startGame() {
  // Reset score and time
  score = 0;
  document.getElementById("score").innerHTML = score;
  time = 30;
  document.getElementById("time").innerHTML = time;

  // Start the timer
  timerInterval = setInterval(updateTimer, 1000);

  // Add event listener to ball
  ball.addEventListener("click", handleClick);

  // Show the ball
  showBall();
}

function showBall() {
  // Generate random position for ball
  var x = Math.floor(Math.random() * (window.innerWidth - 50));
  var y = Math.floor(Math.random() * (window.innerHeight - 50));
  ball.style.left = x + "px";
  ball.style.top = y + "px";

  // Show the ball
  ball.style.display = "block";
}

function handleClick() {
  // Increase score and update score display
  score++;
  document.getElementById("score").innerHTML = score;

  // Hide the ball
  ball.style.display = "none";

  // Show the ball in a new position
  showBall();
}

function updateTimer() {
  // Decrease time and update time display
  time--;
  document.getElementById("time").innerHTML = time;

  // End the game if time is up
  if (time === 0) {
    endGame();
  }
}

function endGame() {
  // Stop the timer
  clearInterval(timerInterval);

  // Remove event listener from ball
  ball.removeEventListener("click", handleClick);

  // Hide the ball
  ball.style.display = "none";

  // Display final score
  alert("Game over! Your score is " + score);
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
