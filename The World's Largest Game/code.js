

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
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

var wall1 = createSprite(50, 190, 5, 50)
var wall2 = createSprite(75, 165, 50, 5)
var wall3 = createSprite(75, 215, 50, 5)
var wall4 = createSprite(100, 130, 5, 70)
var wall5 = createSprite(100, 250, 5, 70)
var wall6 = createSprite(205, 95, 220, 5)
var wall7 = createSprite(205, 280, 220, 5)
var wall8 = createSprite(335, 165, 50, 5)
var wall9 = createSprite(335, 215, 50, 5)
var wall10 = createSprite(100, 130, 5, 70)
var wall11 = createSprite(100, 250, 5, 70)
var wall12 = createSprite(360, 190, 5, 50)
var wall13 = createSprite(310, 130, 5, 70)
var wall14 = createSprite(310, 250, 5, 70)

var obstacle1 = createSprite(130, 180, 15, 15);
var obstacle2 = createSprite(180, 180, 15, 15);
var obstacle3 = createSprite(220, 180, 15, 15);
var obstacle4 = createSprite(270, 180, 15, 15);
var runner = createSprite(70, 190, 15, 15);

runner.shapeColor = "green";
obstacle1.shapeColor = "red";
obstacle2.shapeColor = "red";
obstacle3.shapeColor = "red";
obstacle4.shapeColor = "red";

obstacle1.velocityY = 5;
obstacle2.velocityY = -5;
obstacle3.velocityY = 5;
obstacle4.velocityY = -5;

var count = 0;

function draw() {
background("white");
 drawSprites();
 createEdgeSprites();
 
if(runner.isTouching(obstacle1)||runner.isTouching(obstacle2)||runner.isTouching(obstacle3)
||runner.isTouching(obstacle4)||runner.isTouching(wall6)||runner.isTouching(wall7)){
  runner.x = 70;
  runner.y = 190;
  count = count+1
}
text("Death =", 200, 60);
text(count, 260, 60);

if (keyDown("right")){
  runner.x = runner.x+4
}
if (keyDown("left")){
  runner.x = runner.x-4
}
  obstacle1.bounceOff(wall6);
  obstacle1.bounceOff(wall7);
  obstacle2.bounceOff(wall6);
  obstacle2.bounceOff(wall7);
  obstacle3.bounceOff(wall6);
  obstacle3.bounceOff(wall7);
  obstacle4.bounceOff(wall6);
  obstacle4.bounceOff(wall7);
  runner.bounceOff(wall6);
  runner.bounceOff(wall7);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
 

                                 
     
     
     
     
     
     
     
     
     
     
     
     
     
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
