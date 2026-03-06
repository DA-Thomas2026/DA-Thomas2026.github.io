$(document).ready(function () {
  // Your code goes here
  var dieAmount = 1;
  var die2Amount = 1;
  var dieTotal = 2;
  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", 50)
    .css("left", 50)
    .appendTo("#die");
  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "red")
    .css("position", "absolute")
    .css("top", 50)
    .css("left", 50)
    .appendTo("#die2");

  function makeDot(top, left, elementID, color) {
    $("<div>")
      .css("height", 15)
      .css("width", 15)
      .css("background-color", color)
      .css("position", "absolute")
      .css("top", top)
      .css("left", left)
      .appendTo(elementID);
  }

  function rollDie(dieID, colour) {
    $(dieID).empty();
    var randomNum = Math.ceil(Math.random() * 6);
    console.log(randomNum);
    if (randomNum === 1) {
      makeDot(50, 50, dieID, colour); // middle middle
      if (dieID === "#die") {
        dieAmount = 1;
      } else {
        die2Amount = 1;
      }
    } else if (randomNum === 2) {
      makeDot(25, 25, dieID, colour); // top left
      makeDot(75, 75, dieID, colour); // bottom right
      if (dieID === "#die") {
        dieAmount = 2;
      } else {
        die2Amount = 2;
      }
    } else if (randomNum === 3) {
      makeDot(25, 25, dieID, colour); // top left
      makeDot(75, 75, dieID, colour); // bottom right
      makeDot(50, 50, dieID, colour); // middle middle
      if (dieID === "#die") {
        dieAmount = 3;
      } else {
        die2Amount = 3;
      }
    } else if (randomNum === 4) {
      makeDot(75, 75, dieID, colour); // bottom right
      makeDot(25, 25, dieID, colour); // top left
      makeDot(25, 75, dieID, colour); // bottom left
      makeDot(75, 25, dieID, colour); // top right
      if (dieID === "#die") {
        dieAmount = 4;
      } else {
        die2Amount = 4;
      }
    } else if (randomNum === 5) {
      makeDot(50, 50, dieID, colour); // middle middle
      makeDot(75, 75, dieID, colour); // bottom right
      makeDot(25, 25, dieID, colour); // top left
      makeDot(25, 75, dieID, colour); // bottom left
      makeDot(75, 25, dieID, colour); // top right
      if (dieID === "#die") {
        dieAmount = 5;
      } else {
        die2Amount = 5;
      }
    } else if (randomNum === 6) {
      makeDot(75, 75, dieID, colour); // bottom right
      makeDot(25, 25, dieID, colour); // top left
      makeDot(25, 75, dieID, colour); // bottom left
      makeDot(75, 25, dieID, colour); // top right
      makeDot(50, 25, dieID, colour);
      makeDot(50, 75, dieID, colour);
      if (dieID === "#die") {
        dieAmount = 6;
      } else {
        die2Amount = 6;
      }
    }
  }

  function handleClick() {
    rollDie("#die", "black");
    dieTotal = dieAmount + die2Amount;
    $("p").text("Total: " + dieTotal);
  }
  function handleClick2() {
    rollDie("#die2", "red");
    dieTotal = dieAmount + die2Amount;
    $("p").text("Total: " + dieTotal);
  }
  $("#die").on("click", handleClick);
  $("#die2").on("click", handleClick2);
});
