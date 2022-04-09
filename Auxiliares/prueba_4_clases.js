
var miCursorDentroObjetos;

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

    miCursorDentroObjetos                     = new cursorDentroObjeto();

    miCursorDentroObjetos.realCanvas.ancho    = anchoTrabajo  ;
    miCursorDentroObjetos.realCanvas.alto     = altoTrabajo   ; 

    //Inicializa objetos  
    miCursorDentroObjetos.initObjetos();


    frameRate(5);    

}//fin function setup(




function draw(){

    background(255);

    stroke(0);
    fill(175);


    //Canvas
    stroke(0,255, 255);
    strokeWeight(3);
    rect (0 , 0 , 
          miCursorDentroObjetos.realCanvas.ancho , 
          miCursorDentroObjetos.realCanvas.alto);
    
    //Margenes
    stroke(255,0, 255);
    strokeWeight(3);
    rect (miCursorDentroObjetos.margenes.izq, 
          miCursorDentroObjetos.margenes.sup, 
          miCursorDentroObjetos.realCanvas.ancho - miCursorDentroObjetos.margenes.izq - miCursorDentroObjetos.margenes.der ,
          miCursorDentroObjetos.realCanvas.alto  - miCursorDentroObjetos.margenes.sup - miCursorDentroObjetos.margenes.inf );


    miCursorDentroObjetos.muestraObjetos(miCursorDentroObjetos);


    miCursorDentroObjetos.cursorDentroObj(miCursorDentroObjetos)




    // end = Date.now();
    // console.log((end - start)/1000 , ' segundos.');

    // noLoop();
        
}//fin function draw(


//windowResized
/////////////////////////////////////////////////////////////////////////////
function windowResized() {
    resizeCanvas(windowWidth -10, windowHeight - 20 );
    setup();
    draw();

}//fin function windowResized

