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

//variables
var color1 = (randomNumber(0, 255));
var color2 = (randomNumber(0, 200));
var color3 = (randomNumber(0, 225));
var x = randomNumber(150, 170);
var y = randomNumber(150, 170);
var z = 200;
var x1 = randomNumber(215, 250);
var y1 = randomNumber(150, 165);


//background and the triangle colors
background(rgb (color1, color2, color3));
color1 = (randomNumber(0, 255));
color2 = (randomNumber(0, z));
color3 = (randomNumber(0, 225));
fill(rgb (color1, color2, color3));
regularPolygon(z, 250, 3, z);

//robot body color and shape/size
color1 = (randomNumber(0, 255));
color2 = (randomNumber(0, z));
color3 = (randomNumber(0, 225));
fill(rgb(color1, color2, color3));
rect(100, 350, z, z);

//eyes
fill("black");
regularPolygon(150, z, 5, 25);
regularPolygon(250, z, 5, 25);

//nose
color1 = (randomNumber(0, 255));
color2 = (randomNumber(0, z));
color3 = (randomNumber(0, 225));
fill(rgb (color1, color2, color3));
ellipse(z, 250, 30, 30);

//mouth
color1 = (randomNumber(0, 255));
color2 = (randomNumber(0, z));
color3 = (randomNumber(0, 225));
fill(rgb (color1, color2, color3));
arc(z, 300, 75, 75, 360, 180);

//hair
line(170, 100, 135, 60);
line(230, 100, 260, 60);
line(140, 150, 100, 105);
line(260, 150, 300, 105);
line(112, 200, 75, 150);
line(288, 200, 325, 150);
line(200, 15, 200, 50);

//antenna
fill ("yellow");
ellipse(200, 15, 8, 8);

//eyebrows
fill("brown");
rect(x, y, 30, 7);
rect(x1, y1, 30, 7);



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
