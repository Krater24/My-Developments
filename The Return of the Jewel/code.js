
var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ee2f21b4-351d-4e88-b555-a7e5222fc5eb","5d048187-3608-460b-874d-07f12b4071e5"],"propsByKey":{"ee2f21b4-351d-4e88-b555-a7e5222fc5eb":{"name":"diamond","sourceUrl":"sticker_14.png","frameSize":{"x":246,"y":192},"frameCount":1,"looping":true,"frameDelay":2,"version":"1ve8xcSUavvVvLC6Vl.mojAV9PqyYTDU","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":246,"y":192},"rootRelativePath":"sticker_14.png"},"5d048187-3608-460b-874d-07f12b4071e5":{"name":"theif","sourceUrl":"rpgcharacter_11.png","frameSize":{"x":252,"y":332},"frameCount":1,"looping":true,"frameDelay":2,"version":"8AmDG487lonn5isbI5elQ3ee8xDHqDsZ","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":252,"y":332},"rootRelativePath":"rpgcharacter_11.png"}}};
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

 var theif = createSprite(10, 390, 15, 15);
 var laser1 = createSprite(105, 200, 200, 5);
 var laser2 = createSprite(300, 200, 200, 5);

 //the diamond sitting right on top of the decorative shape in the corner
 var diamond = createSprite(390, 10, 20, 20);
 diamond.setAnimation("diamond");
 diamond.scale = 0.1;

 //tracks whether the player has already won
 var hasWon = false;





laser1.velocityY = 3;
laser2.velocityY =-3;


laser1.shapeColor = "red";
laser2.shapeColor = "red";



  




function draw() {
  
  background("yellow");
  
 shape(390, 0, 380, 10, 390, 20, 400, 10);

 //subtle hint, doesn't give away the actual win condition
 textSize(10);
 fill(120);
 text("This thief slips past every edge.", 10, 555);
 fill(0);
 textSize(12);

  if (hasWon) {
    text("You Won!", 160, 200);
    drawSprites();
    return;
  }
  
  if(keyWentDown("RIGHT_ARROW")){
  theif.velocityX = 2;
  theif.velocityY = 0;
}
if(keyWentDown("LEFT_ARROW")){
  theif.velocityX = -2;
  theif.velocityY = 0;
}
if(keyWentDown("UP_ARROW")){
  theif.velocityX = 0;
  theif.velocityY = -2;
}
if(keyWentDown("DOWN_ARROW")){
  theif.velocityX = 0;
  theif.velocityY = 2;
}

   if(theif.isTouching(laser1)||theif.isTouching(laser2)){
  text("theif is caught", 170, 200);
  laser1.velocityY = 0;
  laser2.velocityY = 0;
   }

  //win condition - reaching the diamond (distance check, not isTouching)
  if(dist(theif.x, theif.y, diamond.x, diamond.y) < 10){
    hasWon = true;
    theif.velocityX = 0;
    theif.velocityY = 0;
    laser1.velocityY = 0;
    laser2.velocityY = 0;
  }
  
 createEdgeSprites();
  
laser1.bounceOff(topEdge);
laser1.bounceOff(bottomEdge);  
laser2.bounceOff(topEdge);
laser2.bounceOff(bottomEdge);
  
 theif.bounce(rightEdge);
 theif.bounce(leftEdge);
 theif.bounce(topEdge);
 theif.bounce(bottomEdge);
                 
  

 drawSprites();
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
