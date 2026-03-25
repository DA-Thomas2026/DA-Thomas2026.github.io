$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  const KEY = {
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    A: 65,
    W: 87,
    D: 68,
    S: 83,
  }
  var walker = {
    x: 0,
    y: 0,
    speedX: 0,
    speedY: 0,
    isIt: false,
    ableToBeHit: true,
    speedBoost: 0,
    leftX: 0,
    topY: 0,
    rightX: 0,
    bottomY: 0,
  }
  var talker = {
    x: 400,
    y: 400,
    speedX: 0,
    speedY: 0,
    isIt: true,
    ableToBeHit: false,
    speedBoost: 0,
    leftX: talker.x,
    topY: talker.y,
    rightX: talker.x + 25,
    bottomY: talker.y + 25,
  }
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUP);                            

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision()
    redrawGameItem()
    
  }
  
  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */
  function handleKeyDown(event) {
    console.log(event.which)
    if (event.which === KEY.LEFT){
      walker.speedX = (-5 - walker.speedBoost);
    } else if (event.which === KEY.UP){
      walker.speedY = (-5 - walker.speedBoost);
    } else if (event.which === KEY.RIGHT){
      walker.speedX = (5 + walker.speedBoost);
    } else if (event.which === KEY.DOWN){
      walker.speedY = (5 + walker.speedBoost);
    }
    if (event.which === KEY.A){
      talker.speedX = (-5 - talker.speedBoost);
    } else if (event.which === KEY.W){
      talker.speedY = (-5 - talker.speedBoost);
    } else if (event.which === KEY.D){
      talker.speedX = (5 + talker.speedBoost);
    } else if (event.which === KEY.S){
      talker.speedY = (5 + talker.speedBoost);
    }
  }
  function handleKeyUP(event) {
    console.log(event.which)
    if (event.which === KEY.LEFT){
      walker.speedX = 0;
    } else if (event.which === KEY.UP){
      walker.speedY = 0;
    } else if (event.which === KEY.RIGHT){
      walker.speedX = 0;
    } else if (event.which === KEY.DOWN){
      walker.speedY = 0;
    }
    if (event.which === KEY.A){
      talker.speedX = 0;
    } else if (event.which === KEY.W){
      talker.speedY = 0;
    } else if (event.which === KEY.D){
      talker.speedX = 0;
    } else if (event.which === KEY.S){
      talker.speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  function repositionGameItem(){
    walker.x += walker.speedX
    walker.y += walker.speedY
    talker.x += talker.speedX
    talker.y += talker.speedY
  }
  function redrawGameItem(){
    console.log("Walker position:", walker.x, walker.y);
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y)
    $("#talker").css("left", talker.x);
    $("#talker").css("top", talker.y)
  }
  function wallCollision(){
    if (walker.x < 0){
      walker.x -= walker.speedX;
    }
    if (walker.y < 0) {
      walker.y -= walker.speedY;
    }
    if (walker.x+25 > $("#board").width()){
      walker.x -= walker.speedX;
    }
    if (walker.y+25 > $("#board").height()){
      walker.y -= walker.speedY;
    }
    if (talker.x < 0){
      talker.x -= talker.speedX;
    }
    if (talker.y < 0) {
      talker.y -= talker.speedY;
    }
    if (talker.x+25 > $("#board").width()){
      talker.x -= talker.speedX;
    }
    if (talker.y+25 > $("#board").height()){
      talker.y -= talker.speedY;
    }
  }
  function pCollideCheck(){
    if (walker.leftX < talker.rightX && walker.topY < talker.bottomY && walker.bottomY > talker.topY && walker.rightX > talker.leftX){
      return true;
    } else {
      return false;
    }
  }
}
