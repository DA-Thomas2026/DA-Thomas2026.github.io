function moveScenery() {
  // TODO 2: Move background scenery based on current level speed
  for (var i = 0; i < scenery.building.instances.length; i++) {
    var buildingInstance = scenery.building.instances[i];
    buildingInstance.x = buildingInstance.x + buildingInstance.speedX - currentLevel.speed
    if (buildingInstance.x + buildingInstance.width < 0){
      buildingInstance.x = scenery.building.loopWidth;
    }
  }
  for (var i = 0; i < scenery.lamp.instances.length; i++) {
    var lampInstance = scenery.lamp.instances[i];
    lampInstance.x = lampInstance.x + lampInstance.speedX - currentLevel.speed
    if (lampInstance.x + lampInstance.width < 0){
      lampInstance.x = scenery.lamp.loopWidth;
    }
  }
}

function generateLevel() {
  // TODO 3: Generate the current level's game objects
  for (var i = 0; i < currentLevel.gameObjects.length; i++) {
    var currentObject = currentLevel.gameObjects[i]
    create(currentObject)
    // console.log(currentObject.type)
    // console.log(currentObject.kind)
  }
}

function create(obj) {
  // TODO 4: Create a game object based on its type and kind
  if(obj.type === "obstacle") {
    makeObstacle(obj)
  } else if(obj.type === "enemy") {
    makeEnemy(obj)
  } else if(obj.type === "powerup") {
    makePowerup(obj)
  } else if(obj.type === "goal") {
    makeGoal(obj)
  } else if(obj.type === "platform") {
    makePlatform(obj)
  }
}

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type
  var anArray = [];
  for (var i = 0; i < gameObjects.length; i++) {
    if(gameObjects[i].type === type){
      anArray.push(gameObjects[i]);
    }
  }
  //console.log(anArray)
  return anArray;
}

function moveGameObjects(objectList) {
  //  TODO 6: Move all game objects of a single type based on speeds
  for (var i = 0; i < objectList.length; i++){
    var easyAccessObject = objectList[i]
    //console.log(easyAccessObject)
    easyAccessObject.x += easyAccessObject.speedX
    easyAccessObject.x -= currentLevel.speed
  }
}

function handleProjectileCollisions() {
  // TODO 8: Handle collisions between projectiles and enemies
  for (var i = 0; i < gameObjects.length; i++){
    var currentObject = gameObjects[i]
    for (var j = 0; j < projectiles.length; j++){
      var currentProjectile = projectiles[j]
      if (isCollidingWithProjectile(currentObject, currentProjectile) === true){
        handleProjectileObjectCollision(j, i)
      }
    }
  }
}

function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
  for (var i = 0; i < gameObjects.length; i++){
    var currentObject = gameObjects[i]
    if (currentObject.type !== "platform" && currentAnimationType !== animationTypes.frontDeath){
      if(isGenericCollision(currentObject) === true){
        handleHallebotGenericCollision(i)
      }
    }
  }
}

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
  currentLevelIndex += 1
  currentLevel = LEVELS[currentLevelIndex];
  gameObjects = [];
  if (currentLevelIndex >= LEVELS.length){
    player.winConditionMet = true;
  } else {
    generateLevel();
  }
}
