var dog;
var dogHappy;
var database; 
var foodS;
var foodStock;

function preload()
{
  this.image = loadImage ("images/doglmg.png");
  this.image2 = loadImage ("images/doglmg1.png");
}

function setup() {
	createCanvas(500, 500);
  foodStock = dataBase.ref ("Food");
 foodStock.on ("value",readStock);
}


function draw() {  
 backGround (46, 139, 87);
 if(KeyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage (dogHappy)
 }
  drawSprites();
  //add styles here

}
 textSize (20)
 Stroke (5);
Fill (10);

function readStock (data){
foodS = data.val ();
}

function writeStock (x){
if (x<-0){
x-0;
}else{
  x = x-1;
}


  database.ref ('/').update({
  Food:x
})
}

