
var miGradienteColores;


var start;
var end;

const Y_AXIS = 1;
const X_AXIS = 2;
var b1, b2;

function setup(){

   //Tiempo ini de proceso
   start = Date.now();

   var anchoTrabajo                    = windowWidth  - 20;
   var altoTrabajo                     = windowHeight - 20;

   createCanvas(anchoTrabajo , altoTrabajo);
   background(255);

   miGradienteColores                     = new gradienteColores();

   miGradienteColores.xyRectangulo.x1     = 40;
   miGradienteColores.xyRectangulo.y1     = 40;
   miGradienteColores.xyRectangulo.x2     = anchoTrabajo - 40;
   miGradienteColores.xyRectangulo.y2     = altoTrabajo  - 40;  

   miGradienteColores.realCanvas.ancho    = anchoTrabajo  ;
   miGradienteColores.realCanvas.alto     = altoTrabajo   ; 

   //Inicializa objetos  
   miGradienteColores.initObjetos();


   frameRate(10);    

}//fin function setup(




function draw(){

    background(255);

    stroke(0);
    fill(255);


    //Canvas
    stroke(0);
    strokeWeight(3);
    rect (0 , 0 , 
        miGradienteColores.realCanvas.ancho , 
        miGradienteColores.realCanvas.alto);
    
    //Margenes
    stroke( 255);
    strokeWeight(3);
    rect (miGradienteColores.margenes.izq, 
          miGradienteColores.margenes.sup, 
          miGradienteColores.realCanvas.ancho - miGradienteColores.margenes.izq - miGradienteColores.margenes.der ,
          miGradienteColores.realCanvas.alto  - miGradienteColores.margenes.sup - miGradienteColores.margenes.inf );


    //Gradiente de fondo
    b1 = color(255);
    b2 = color(0);
    // Background
    setGradient(0, 0, width / 2, height, b1, b2, X_AXIS);
    setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS);


    miGradienteColores.gradienteObjetos(miGradienteColores);

    noLoop();
        
}//fin function draw(


//windowResized
/////////////////////////////////////////////////////////////////////////////
function windowResized() {
    resizeCanvas(windowWidth -10, windowHeight - 20 );
    setup();
    draw();

}//fin function windowResized


    // end = Date.now();
    // console.log((end - start)/1000 , ' segundos.');

    // noLoop();
