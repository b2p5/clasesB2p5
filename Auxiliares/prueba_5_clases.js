
var miChocaObjetos;


var start;
var end;


function setup(){

   //Tiempo ini de proceso
   start = Date.now();

   var anchoTrabajo                    = windowWidth  - 20;
   var altoTrabajo                     = windowHeight - 20;

   createCanvas(anchoTrabajo , altoTrabajo);
   background(255);

   miChocaObjetos                     = new chocaObjetos();

   miChocaObjetos.xyRectangulo.x1     = 40;
   miChocaObjetos.xyRectangulo.y1     = 40;
   miChocaObjetos.xyRectangulo.x2     = anchoTrabajo - 40;
   miChocaObjetos.xyRectangulo.y2     = altoTrabajo  - 40;  

   miChocaObjetos.realCanvas.ancho    = anchoTrabajo  ;
   miChocaObjetos.realCanvas.alto     = altoTrabajo   ; 

   //Inicializa objetos  
   miChocaObjetos.initObjetos();

// console.log(miChocaObjetos.arrObjetos);
    
   miChocaObjetos.muestraObjetos(miChocaObjetos);


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
        miChocaObjetos.realCanvas.ancho , 
        miChocaObjetos.realCanvas.alto);
    
    //Margenes
    stroke(255,0, 255);
    strokeWeight(3);
    rect (miChocaObjetos.margenes.izq, 
          miChocaObjetos.margenes.sup, 
          miChocaObjetos.realCanvas.ancho - miChocaObjetos.margenes.izq - miChocaObjetos.margenes.der ,
          miChocaObjetos.realCanvas.alto  - miChocaObjetos.margenes.sup - miChocaObjetos.margenes.inf );


    // miChocaObjetos.muestraObjetos(miChocaObjetos);


    miChocaObjetos.mueveObjetos(miChocaObjetos);

    
    
    
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

