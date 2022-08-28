//aqui van las variables
var bloquesin;
 var raqueta;
  var raqueta2;
  var mitad;
 function setup() {//setup=configuracion
  createCanvas(1350, 620);//area de trabajo
 bloquesin=createSprite(900,300,50,50);//variablenombre=createSprite(x,y,ancho,alto)
 bloquesin.shapeColor="darkgray";
 raqueta2=createSprite(27,200,50,200);
raqueta=createSprite(1315,350,50,200);
mitad=createSprite(675,310,20,1000);
} 
function draw() {//draw=dibujar
  // Rellena el lienzo con un gris claro, cubriendo las imágenes previas
  background("black");//fondo
  drawSprites();
}