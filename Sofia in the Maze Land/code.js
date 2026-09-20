

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6059a726-831e-434c-bde3-3cac01205922"],"propsByKey":{"6059a726-831e-434c-bde3-3cac01205922":{"name":"kid_8_1","sourceUrl":"assets/api/v1/animation-library/gamelab/2awrE08DyLIkEuVyTjHEgOP8jAg6gCCs/category_characters/kid_8.png","frameSize":{"x":239,"y":342},"frameCount":1,"looping":true,"frameDelay":2,"version":"2awrE08DyLIkEuVyTjHEgOP8jAg6gCCs","loadedFromSource":true,"saved":true,"sourceSize":{"x":239,"y":342},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2awrE08DyLIkEuVyTjHEgOP8jAg6gCCs/category_characters/kid_8.png"}}};
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

//creating the game object
  var Sofia = createSprite(20,25,18,18);  
  Sofia.shapeColor = "orange";


//creating the maze
  var cardboard1 = createSprite(10,70,100,20);
   cardboard1.shapeColor = "brown";
  var cardboard2 = createSprite(100,50,20,100);
  cardboard2.shapeColor = "brown";
  var cardboard3 = createSprite(80,130,100,20);
  cardboard3.shapeColor = "brown";
  var cardboard4 = createSprite(50,250,20,100);
  cardboard4.shapeColor = "brown";
  var cardboard5 = createSprite(130,210,100,20);
   cardboard5.shapeColor = "brown";
  var cardboard6 = createSprite(10,250,100,20);
   cardboard6.shapeColor = "brown";
  var cardboard7 = createSprite(160,120,20,100);
   cardboard7.shapeColor = "brown";
  var cardboard8 = createSprite(150,20,100,20);
   cardboard8.shapeColor = "brown";
  var cardboard9 = createSprite(250,70,20,100);
   cardboard9.shapeColor = "brown";
  var cardboard10 = createSprite(270,150,100,20);
   cardboard10.shapeColor = "brown";
  var cardboard11 = createSprite(330,50,100,20);
   cardboard11.shapeColor = "brown";
  var cardboard12 = createSprite(340,125,20,100);
   cardboard12.shapeColor = "brown";
  var cardboard13 = createSprite(220,250,20,100);
   cardboard13.shapeColor = "brown";
  var cardboard14 = createSprite(330,210,150,20);
   cardboard14.shapeColor = "brown";
  var cardboard15 = createSprite(100,300,20,100);
   cardboard15.shapeColor = "brown";
  var cardboard16 = createSprite(180,310,100,20);
   cardboard16.shapeColor = "brown";
  var cardboard17 = createSprite(30,352,20,100);
   cardboard17.shapeColor = "brown";
  var cardboard18 = createSprite(175,352,20,100);
   cardboard18.shapeColor = "brown";
  var cardboard19 = createSprite(280,290,20,100);
   cardboard19.shapeColor = "brown";
  var cardboard20 = createSprite(350,270,120,20);
   cardboard20.shapeColor = "brown";
  var cardboard21 = createSprite(250,390,100,20);
   cardboard21.shapeColor = "brown";
  var cardboard22 = createSprite(330,370,20,100);
   cardboard22.shapeColor = "brown";
  var target = createSprite(395,375,10,50);
  target.shapeColor = "yellow";
  
function draw() {
  //setting the background color to white 
  background("pink");
  
Sofia.velocityX=0;
Sofia.velocityY=0;
if ( Sofia.bounce(target))  
{
  textSize(40);
  stroke("red");
  text("You Win", 200,200);
  }
stroke(rgb(128, 128, 128));

if (keyDown("UP_ARROW")) {
  
Sofia.velocityX=0;
Sofia.velocityY=-4;
}
if (keyDown(DOWN_ARROW)) {
  
Sofia.velocityX=0;
Sofia.velocityY=4;
}
if (keyDown(LEFT_ARROW)) {
  
Sofia.velocityX=-4;
Sofia.velocityY=0;
}
if (keyDown(RIGHT_ARROW)) {
  
Sofia.velocityX=4;
Sofia.velocityY=0;
}

Sofia.bounceOff(cardboard1);
Sofia.bounceOff(cardboard2);
Sofia.bounceOff(cardboard3);
Sofia.bounceOff(cardboard4);
Sofia.bounceOff(cardboard5);
Sofia.bounceOff(cardboard6);
Sofia.bounceOff(cardboard7);
Sofia.bounceOff(cardboard8);
Sofia.bounceOff(cardboard9);
Sofia.bounceOff(cardboard10);
Sofia.bounceOff(cardboard11);
Sofia.bounceOff(cardboard12);
Sofia.bounceOff(cardboard13);
Sofia.bounceOff(cardboard14);
Sofia.bounceOff(cardboard15);
Sofia.bounceOff(cardboard16);
Sofia.bounceOff(cardboard17);
Sofia.bounceOff(cardboard18);
Sofia.bounceOff(cardboard19);
Sofia.bounceOff(cardboard20);
Sofia.bounceOff(cardboard21);
Sofia.bounceOff(cardboard22);

Sofia.collide(target);




createEdgeSprites();
Sofia.bounceOff(edges);

textSize(19);
textFont("Helvetica");
text("Cup", 360, 340);
textSize(19);
text("Sofia",30,43);

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
