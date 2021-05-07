var garden, gardenImg;
var tom, tomImg1, tomImg2, jerry, jerryImg1, jerryImg2;
var tomImg3, jerryImg3;
function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");
    tomImg1 = loadAnimation("cat1.png");
    jerryImg1 = loadAnimation("mouse1.png");
    tomImg2 = loadAnimation("cat2.png", "cat3.png");
    jerryImg2 = loadAnimation("mouse2.png", "mouse3.png");
    tomImg3 = loadAnimation("cat4.png");
    jerryImg3 = loadAnimation("mouse4.png");
}

function setup() {
    createCanvas(1050, 800);

    garden = createSprite(500, 400);
    garden.addImage(gardenImg);
    garden.scale = 1.135;
    //create tom and jerry sprites here
    //tom
    tom = createSprite(930, 600);
    tom.addAnimation("tom_sleeping", tomImg1);
    tom.scale = 0.18;
    //jerry
    jerry = createSprite(170, 600);
    jerry.addAnimation("jerry_walking", jerryImg1);
    jerry.scale = 0.14;
}

function draw() {

    background(0);

    //Write condition here to evalute if tom and jerry collide
    if (tom.x - jerry.x < (tom.width - jerry.width) / 2) {
        tom.addAnimation("happy", tomImg3);
        tom.changeAnimation("happy");
        tom.x = 270;

        jerry.addAnimation("happy", jerryImg3);
        jerry.changeAnimation("happy");
    }

    drawSprites();
}


function keyPressed() {

    //For moving and changing animation write code here
    if (keyCode === LEFT_ARROW) {
        jerry.addAnimation("teasing", jerryImg2);
        jerry.changeAnimation("teasing");
        jerry.frameDelay = 10;


        tom.addAnimation("cat_running", tomImg2);
        tom.changeAnimation("cat_running");
        tom.frameDelay = 10;
        tom.x = tom.x - 20;
    }

    if (keyCode === RIGHT_ARROW) {
        jerry.addAnimation("teasing", jerryImg2);
        jerry.changeAnimation("teasing");
        jerry.frameDelay = 10;


        tom.addAnimation("cat_running", tomImg2);
        tom.changeAnimation("cat_running");
        tom.frameDelay = 10;
        tom.x = tom.x - 20;
    }

}
