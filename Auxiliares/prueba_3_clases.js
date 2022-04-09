
var miMoverObjetos;

var arrLocalizaciones = Array();
var arrVelocidades    = Array();
var arrAceleraciones  = Array();
var arrVelocidadMax   = Array();
var arrObjetosFin     = Array();

var unaXVelocidad ;
var unaYVelocidad ;
var unaXAceleracion ;
var unaYAceleracion ;

var distanciaADestino;

var start;
var end;


function setup(){

   //Tiempo ini de proceso
   start = Date.now();

   var anchoTrabajo                          = windowWidth  - 10;
   var altoTrabajo                           = windowHeight - 20;

   createCanvas(anchoTrabajo , altoTrabajo);
   background(255);

   miMoverObjetos                            = new moverObjeto();

   miMoverObjetos.tipoMovimiento             = 'Lineal';
   miMoverObjetos.xyRectangulo.x2            = anchoTrabajo - 10;
   miMoverObjetos.xyRectangulo.y2            = altoTrabajo  - 10;   
   miMoverObjetos.aceleracion                = 0.0007;
   miMoverObjetos.velocidadMaxStart          = 20;
   miMoverObjetos.velocidadMaxStop           = 2;

   //Inicializa objetos a mover y pun
   miMoverObjetos.initObjetos();

   miMoverObjetos.preparaMovLineal(miMoverObjetos);
   
   arrLocalizaciones = miMoverObjetos.arrLocalizaciones;
   arrVelocidades    = miMoverObjetos.arrVelocidades;
   arrAceleraciones  = miMoverObjetos.arrAceleraciones;
   arrVelocidadMax   = miMoverObjetos.arrVelocidadMax;
   arrObjetosFin     = miMoverObjetos.arrObjetosFin;
    

   // frameRate(35);    

}//fin function setup(




function draw(){

      background(255);

      stroke(0);
      fill(175);

      miMoverObjetos.movimientoLineal(miMoverObjetos);

        
}//fin function draw(


//windowResized
/////////////////////////////////////////////////////////////////////////////
function windowResized() {
    resizeCanvas(windowWidth -10, windowHeight - 20 );
    setup();
    draw();

}//fin function windowResized

