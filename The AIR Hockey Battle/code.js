
var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b61c9935-ae77-4b91-b1b9-8497355cb5be"],"propsByKey":{"b61c9935-ae77-4b91-b1b9-8497355cb5be":{"name":"soccer_bw_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      //shrink the source image itself so the sprite is genuinely small,
      //not just given a smaller collider on top of a huge image
      var targetSize = 30;
      image.resize(targetSize, targetSize);
      var spriteSheet = loadSpriteSheet(
          image,
          targetSize,
          targetSize,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var goalline1 = createSprite(200, 20, 400, 5);
var goalline2 = createSprite(200, 380, 400, 5);
var sideline1 = createSprite(20, 200, 5, 400);
var sideline2 = createSprite(380, 200, 5, 400);
var centerline = createSprite(200, 200, 400, 5);
var computergoal = createSprite(200, 20, 80, 40);
var playergoal = createSprite(200, 380, 80, 40);
var computer = createSprite(200, 50, 70, 10);
var player = createSprite(200, 350, 70, 10);
var football = createSprite(200, 200, 20, 20);

football.setAnimation("soccer_bw_1");

football.velocityX = 3;
football.velocityY = 3;

//tracks whether the ball has gone out (into a goal)
var gameOver = false;





goalline1.shapeColor = "white"
goalline2.shapeColor = "white"
sideline1.shapeColor = "white"
sideline2.shapeColor = "white"
centerline.shapeColor = "white"
computergoal.shapeColor = "orange"
playergoal.shapeColor = "orange"
computer.shapeColor = "blue"
player.shapeColor = "blue"




function draw() {
background("green");
   drawSprites(); 

   if (gameOver) {
  textSize(40);
  fill("white");
  textAlign(CENTER, CENTER);
  text("Game Over", 200, 200);
  return;
}

   player.x = World.mouseX;
   computer.x = football.x
   football.bounceOff(computer);
football.bounceOff(player);

football.bounceOff(sideline1);
football.bounceOff(sideline2);
computer.bounce(sideline1);
computer.bounce(sideline2);
player.bounce(sideline1);
player.bounce(sideline2);

   //ball goes out - passes the goal line at either end of the field
   if (football.y < 10 || football.y > 390) {
     gameOver = true;
     football.velocityX = 0;
     football.velocityY = 0;
   }

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
