
var miRellenaArea;
var objetosAColocar     = Array();
var todosLosObjetos     = Array();
var objetosColocados    = Array();
var objetosSinColocar   = Array();


function setup(){

   anchoTrabajo = windowWidth - 10;
   altoTrabajo  = windowHeight - 20;

   createCanvas(anchoTrabajo , altoTrabajo);
   background(255);altoTrabajo

   miRellenaArea   = new rellenaArea();
   miRellenaArea.xyRectangulo.x2 = anchoTrabajo - 10;
   miRellenaArea.xyRectangulo.y2 = altoTrabajo  - 10;
   

   //Inicializa
   objetosAColocar = miRellenaArea.init();
// console.log(objetosAColocar);
    
   stroke(0,255, 255);
   strokeWeight(5);
   rect(miRellenaArea.xyRectangulo.x1 , miRellenaArea.xyRectangulo.y1 , 
        miRellenaArea.xyRectangulo.x2 - miRellenaArea.xyRectangulo.x1 , 
        miRellenaArea.xyRectangulo.y2 - miRellenaArea.xyRectangulo.y1);

   //Coloca objetos
   var start = Date.now();
       
   todosLosObjetos   = miRellenaArea.rellenando();
   objetosColocados  = todosLosObjetos[0];
   objetosSinColocar = todosLosObjetos[1];


   var end = Date.now();
   console.log((end - start)/1000);

   
   //Objetos colocados
   for(let i=0; i<objetosColocados.length; i++) {
      stroke(255,0, 255);
      strokeWeight(1);
      ellipse( objetosColocados[i].x , 
               objetosColocados[i].y , 
               objetosColocados[i].radiox2, 
               objetosColocados[i].radiox2, );
      // strokeWeight(1);    
      // textSize(12);           
      // text( str(objetosColocados[i].objeto+1), 
      //       objetosColocados[i].x , 
      //       objetosColocados[i].y ,
      //       );

   }// fin de for(let i=0; i<objetosColocados.

   //Objetos sin colocar
   // for(let i=0; i<objetosSinColocar.length; i++) {
   //    stroke(0,0, 255);
   //    strokeWeight(1);
   //    x = random(0,anchoTrabajo);
   //    y = random(0,altoTrabajo );
   //    ellipse( x , 
   //             y , 
   //             objetosSinColocar[i].radiox2, 
   //             objetosSinColocar[i].radiox2, );
   //    strokeWeight(1);    
   //    textSize(12);           
   //    text( str(objetosSinColocar[i].objeto+1), 
   //          x , 
   //          y ,
   //          );

   // }// fin de for(let i=0; i<objetosSinColocar.le
  console.log('objetosSinColocar: ', objetosSinColocar);
         
   noLoop(); 
   

    

}//fin function setup(


function draw(){

   

   


}//fin function draw(


//windowResized
/////////////////////////////////////////////////////////////////////////////
function windowResized() {
    resizeCanvas(windowWidth -10, windowHeight - 20 );
    setup();
    draw();
    noLoop();
}
