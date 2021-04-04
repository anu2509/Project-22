var starImg,bgImg;
var star, starBody,fairy,fairyImg,fs,fairy_options;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairy.png")
	fs = loadSound("sound/JoyMusic.mp3")
	//load animation for fairy here
}

function setup() {
	createCanvas(600, 600);

	//write code to play fairyVoice sound
      fs.play();
	//create fairy sprite and add animation for fairy
	fairy = createSprite(100,430);
	fairy.addImage("fairy",fairyImg);
	fairy.scale = 0.2;

	star = createSprite(450,30);
	star.addImage(starImg);
	star.scale = 0.2;

	

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(450 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
 


	
	Engine.run(engine);


}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

 

  //write code to stop star in the hand of fairy
 if (star.y > 370 && starBody.position.y > 370){

	Matter.Body.setStatic(starBody,true);
 } 




  drawSprites();

  
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === RIGHT_ARROW){

		fairy.x = fairy.x + 20
	}

	if (keyCode === LEFT_ARROW){

		fairy.x = fairy.x - 20
	}

	//write code to move fairy left and right
	
}
