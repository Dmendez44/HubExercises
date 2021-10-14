let timerSeconds = 600

function setup() {
  createCanvas(400, 400);
}

function draw() {
//   Hidden Function: (Clear Screen)
  background(220);
  textAlign(CENTER, CENTER);
  textSize(100);
  let minutesInTimer = Math.floor(timerSeconds / 60)
  let secondsInTimer = timerSeconds - minutesInTimer * 60

  if (timerSeconds != 0) {
    text(minutesInTimer + ":" + secondsInTimer, width/2, height/2)
  }
  


  
  let secondHasPassed = frameCount % 60 == 0;
  if (secondHasPassed && timerSeconds > 0) {
    timerSeconds--;
  }
  if (timerSeconds == 0) {
    text("End of Game", width/2, height/2)
  }
  
//   Hidden Function (Clear Screen)
  
  // frameCount: How many frames
  // have past since execution
  
  // Btw: Run's 60 Frames Per Second

  // if the frameCount is divisible by 60, then a second has passed.
  // 60 => 1second
  // 120 => 2second
  // 180 => 3 second
  
  // frameCount: How many frames
  // have past since execution
  
  // Btw: 60 Frames Per Second
  
}