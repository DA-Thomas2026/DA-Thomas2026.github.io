$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(0, 150, 350, 20, "red");
    createPlatform(525, 0, 20, 600, "red");
    createPlatform(150, 390, 380, 20, "red");
    createPlatform(1020, 150, 180, 10, "red");
    createPlatform(1050, 630, 100, 10, "red");
    createPlatform(850, 500, 100, 10, "red");
    createPlatform(530, 395, 100, 10, "red");
    createPlatform(1050, 380, 100, 10, "red");
    createPlatform(900, 250, 100, 10, "red");
    createPlatform(1300, 150, 100, 10, "red");
    createFakePlatform(1200, 150, 100, 10, "red");
    createBadPlatform(0, 739.9, 100, 200, "navy");
    createBadPlatform(700, 739.9, 100, 200, "navy");
    createBadPlatform(1100, 739.9, 300, 200, "navy");
    createFakePlatform(1150, 630, 100, 10, "red");

    // TODO 3 - Create Collectables
    createCollectable("database", 555, 350)
    createCollectable("database", 450, 350)
    createCollectable("database", 1350, 110)
    createCollectable("database", 50, 650)
    createCollectable("database", 600, 150, 0, 0, 600, 800, 7)

    
    // TODO 4 - Create Cannons
    createCannon("left", 50, 2000)
    createCannon("left", 300, 2000)
    createCannon("top", 750, 2000)
    createCannon("top", 1150, 1000)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
