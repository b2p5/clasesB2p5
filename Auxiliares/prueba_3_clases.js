
var miMoverObjetos;
var objetosAMover     = Array();
var arrLocalizaciones = Array();
var arrVelocidades    = Array();
var arrAceleraciones  = Array();
var arrVelocidadMax   = Array();

var unaXVelocidad ;
var unaYVelocidad ;
var unaXAceleracion ;
var unaYAceleracion ;

var distanciaADestino;

var objetosFin        = Array();

var start;
var end;



function setup(){

   //Tiempo ini de proceso
   start = Date.now();

   var anchoTrabajo = windowWidth  - 10;
   var altoTrabajo  = windowHeight - 20;

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
   miMoverObjetos.init();


   //Objetos colocados
   for(let i=0; i < miMoverObjetos.arrObjetosAMover.length; i++) {

      //Vectores localización y velocidad
      //Localizaciones
      arrLocalizaciones.push( createVector(miMoverObjetos.arrObjetosAMover[i].x,
                                           miMoverObjetos.arrObjetosAMover[i].y  ));
      //Velocidad
      unaXVelocidad = (miMoverObjetos.arrDeDestinos[i].x - miMoverObjetos.arrObjetosAMover[i].x);
      unaYVelocidad = (miMoverObjetos.arrDeDestinos[i].y - miMoverObjetos.arrObjetosAMover[i].y);
      //Velocidad normalizada      
      velocidadNormalizada = createVector(unaXVelocidad, unaYVelocidad ).normalize();

      //Ecuación e=v*t
      arrVelocidades.push( velocidadNormalizada );


      //Aceleración normalizada 
      aceleracionNormalizada =   createVector( miMoverObjetos.aceleracion * unaXVelocidad,  
                                               miMoverObjetos.aceleracion * unaYVelocidad );
      arrAceleraciones.push( aceleracionNormalizada );

      //Velocidad Máxima
      arrVelocidadMax.push(miMoverObjetos.velocidadMaxStart);


      objetosFin.push(false);


   }// fin de for(let i=0; i<objetosColocados.
   
   
   frameRate(35);    

}//fin function setup(




function draw(){

      background(255);


      //Objetos colocados
      stroke(0);
      fill(175);
      for(let i=0; i < miMoverObjetos.arrObjetosAMover.length; i++) {  

         
         //Aplicar velocidad y aceleración
         arrVelocidades[i].add(arrAceleraciones[i]);
         arrVelocidades[i].limit(arrVelocidadMax[i]);
         arrLocalizaciones[i].add(arrVelocidades[i]);

         
         if(!objetosFin[i]){
            //Con Movimiento
            ellipse( arrLocalizaciones[i].x, 
                     arrLocalizaciones[i].y, 
                     miMoverObjetos.arrObjetosAMover[i].radiox2, 
                     miMoverObjetos.arrObjetosAMover[i].radiox2);

         }else{  
            //Parado
            ellipse( miMoverObjetos.arrDeDestinos[i].x, 
                     miMoverObjetos.arrDeDestinos[i].y, 
                     miMoverObjetos.arrObjetosAMover[i].radiox2, 
                     miMoverObjetos.arrObjetosAMover[i].radiox2);

         }//fin if(!objetosFin[i]


         distanciaADestino = calculaDistancia ( 
                                 (arrLocalizaciones[i].x) ,           (arrLocalizaciones[i].y) ,
                                 (miMoverObjetos.arrDeDestinos[i].x), (miMoverObjetos.arrDeDestinos[i].y) 
                                 );
    
         if( int(distanciaADestino)  < 77  ) {

               arrAceleraciones[i]               = 0.0001;
               arrVelocidadMax[i]                = miMoverObjetos.velocidadMaxStop;

         }//fin   if( int(distanciaADestino)  < 100

         if( (distanciaADestino)  < 2  ) {
            objetosFin[i] = true;
         }//fin if( int(distanciaADestino)  < 2                 


         //Dibuja Destinos
         stroke(100);
         strokeWeight(2);
         ellipse( miMoverObjetos.arrDeDestinos[i].x , 
                  miMoverObjetos.arrDeDestinos[i].y , 
                  1,  1 );

      }//fin for(let i=0; i < miMoverObjetos.arrObjetosAMover.length



      //Parar el loop
      var todoQuieto = true;
      for(let i=0; i < objetosFin.length; i++) {
        if(!objetosFin[i]){
         todoQuieto = false;
         break;
        }
      }// fin de for (let i= 
      if(todoQuieto){
         end = Date.now();
         console.log((end - start)/1000 , ' segundos.');
         // console.log('finalizado');
         noLoop();
      }//fin de if(todoQuieto)
        
        
}//fin function draw(


//windowResized
/////////////////////////////////////////////////////////////////////////////
function windowResized() {
    resizeCanvas(windowWidth -10, windowHeight - 20 );
    setup();
    draw();

}//fin function windowResized


function calculaDistancia ( x1, y1, x2, y2 ) {

      return Math.sqrt((x1-x2)**2 + (y1-y2)**2);

}//fin de function posicionado
