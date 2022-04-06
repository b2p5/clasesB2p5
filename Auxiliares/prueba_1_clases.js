
var miDivideCanvas;
var miMouse;
var resultado;

var anchoTrabajo = 800;
var altoTrabajo  = 500;

function setup(){

   anchoTrabajo = windowWidth - 10;
   altoTrabajo  = windowHeight - 20;

   createCanvas(anchoTrabajo , altoTrabajo);


   miDivideCanvas                     = new divideCanvas();
   miDivideCanvas.realCanvas.ancho    = anchoTrabajo;
   miDivideCanvas.realCanvas.alto     = altoTrabajo;
   miDivideCanvas.tipoDivision        = 'franjaHorizontal';
   miDivideCanvas.tipoDivision        = 'franjaVertical';
   


}//fin function setup(


function draw(){

   background(255);

   resultado                          = miDivideCanvas.dividirEnAreas();

   var resulCanvas                     = resultado[0][0];
   var resulMargenes                   = resultado[1][0];
   var resulAreas                      = resultado[2];

   //Canvas
   stroke(0,255, 255);
   strokeWeight(3);
   rect(resulCanvas.x , resulCanvas.y , resulCanvas.ancho , resulCanvas.alto);

   //Margenes
   stroke(255,0, 255);
   strokeWeight(3);
   rect (resulMargenes.x, resulMargenes.y, resulMargenes.ancho,resulMargenes.alto);

   //Areas
   stroke(255,255, 0);
   strokeWeight(3);  
    for(let i=0; i<miDivideCanvas.numeroDivisiones; i++) {

       rect (resulAreas[i].x, resulAreas[i].y, resulAreas[i].ancho,resulAreas[i].alto);

    }// fin de for(let i=0; i<=arrAreas.lengh 


    noLoop();

}//fin function draw(


//windowResized
/////////////////////////////////////////////////////////////////////////////
function windowResized() {
    resizeCanvas(windowWidth -10, windowHeight - 20 );
    setup();
    draw();
    noLoop();
}
