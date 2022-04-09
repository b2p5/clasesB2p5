class moverObjeto  {

   constructor(){

      //Tipo de movimiento
      this.tipoMovimiento            = 'Lineal';
      //Area a rellenar
      this.xyRectangulo              = {'x1': 20, 'y1': 20, 'x2': 300, 'y2': 300};
      //Margenes del área a rellenar
      this.margenInterno             = 4;
      //Vectores localizacion, velocidad y aceleracion
      this.aceleracion               = 0.0007;
      this.velocidadMaxStart         = 20;
      this.velocidadMaxStop          = 2;

      //Array de contenidos
      this.arrObjetosAMover          = Array();
      this.arrDeDestinos             = Array();

      this.distanciaADestino;
      this.todoQuieto;

      // //Array de vectores vel., acel., vel. max. etc
      this.arrLocalizaciones         =  Array();
      this.arrVelocidades            =  Array();
      this.arrAceleraciones          =  Array();
      this.arrVelocidadMax           =  Array();
      this.arrObjetosFin             =  Array();
      

    }//fin constructor


    //Creamos objetos a mover
    /////////////////////////////////////////////////////////////
    initObjetos(){
      this.arrObjetosAMover = Array();
      this.arrDeDestinos    = Array();

      for(let i=0; i< 70 ; i++) {
        
        this.arrObjetosAMover.push ({
                                      'objeto'  : i , 
                                      'x'       : random( this.xyRectangulo.x1, this.xyRectangulo.x2), 
                                      'y'       : random( this.xyRectangulo.y1, this.xyRectangulo.y2) , 
                                      'radiox2' : random( 5, 60) ,
        } );
        this.arrDeDestinos.push ({
                                      'objeto'  : i , 
                                      'x'       : random( this.xyRectangulo.x1, this.xyRectangulo.x2), 
                                      'y'       : random( this.xyRectangulo.y1, this.xyRectangulo.y2) , 
        } );


      }// fin de for (let i= 0; i< 1000 ; i++
      

    }//fin init


    //Método prepara Movimiento Lineal
    /////////////////////////////////////////////////////////////
    preparaMovLineal(miMoverObjetos){

      var unaXVelocidad ;
      var unaYVelocidad ;
      var velocidadNormalizada;
      var aceleracionNormalizada;
      
            
      //Mover los Objetos 
      for(let i=0; i < miMoverObjetos.arrObjetosAMover.length; i++) {
      
          //Vectores localización, velocidad y aceleración
          //Localizaciones
          this.arrLocalizaciones.push( createVector(miMoverObjetos.arrObjetosAMover[i].x,
                                                    miMoverObjetos.arrObjetosAMover[i].y  ));
          //Velocidades ejes X e Y
          unaXVelocidad = (miMoverObjetos.arrDeDestinos[i].x - miMoverObjetos.arrObjetosAMover[i].x);
          unaYVelocidad = (miMoverObjetos.arrDeDestinos[i].y - miMoverObjetos.arrObjetosAMover[i].y);
          //Velocidad normalizada      
          velocidadNormalizada = createVector(unaXVelocidad, unaYVelocidad ).normalize();
          
          //Ecuación e=v*t
          this.arrVelocidades.push( velocidadNormalizada );
          
          //Aceleración normalizada = vector velocidad * aceleración
          aceleracionNormalizada =   createVector( miMoverObjetos.aceleracion * unaXVelocidad,  
                                                   miMoverObjetos.aceleracion * unaYVelocidad );
          
          this.arrAceleraciones.push( aceleracionNormalizada );
          
          //Velocidad Máxima
          this.arrVelocidadMax.push(miMoverObjetos.velocidadMaxStart);
          
          
          this.arrObjetosFin.push(false);
          
          
      }// fin de for(let i=0; i<objetosColocados.



    }//fin preparaMovLineal()




    //Método movimientoLineal
    /////////////////////////////////////////////////////////////
    movimientoLineal(miMoverObjetos){

      for(let i=0; i < miMoverObjetos.arrObjetosAMover.length; i++) {  

         
        //Aplicar velocidad y aceleración
        this.arrVelocidades[i].add(this.arrAceleraciones[i]);
        this.arrVelocidades[i].limit(this.arrVelocidadMax[i]);
        this.arrLocalizaciones[i].add(this.arrVelocidades[i]);

        
        if(!this.arrObjetosFin[i]){
           //Con Movimiento
           ellipse( this.arrLocalizaciones[i].x, 
                    this.arrLocalizaciones[i].y, 
                    miMoverObjetos.arrObjetosAMover[i].radiox2, 
                    miMoverObjetos.arrObjetosAMover[i].radiox2);

        }else{  
           //Parado
           ellipse( miMoverObjetos.arrDeDestinos[i].x, 
                    miMoverObjetos.arrDeDestinos[i].y, 
                    miMoverObjetos.arrObjetosAMover[i].radiox2, 
                    miMoverObjetos.arrObjetosAMover[i].radiox2);

        }//fin if(!arrObjetosFin[i]


        this.distanciaADestino = calculaDistancia ( 
                                (this.arrLocalizaciones[i].x) ,      (this.arrLocalizaciones[i].y) ,
                                (miMoverObjetos.arrDeDestinos[i].x), (miMoverObjetos.arrDeDestinos[i].y) 
                                );
   
        if( int(this.distanciaADestino)  < 77  ) {

          this.arrAceleraciones[i]        = 0.0001;
          this.arrVelocidadMax[i]         = miMoverObjetos.velocidadMaxStop;

        }//fin   if( int(this.distanciaADestino)  < 100

        if( (this.distanciaADestino)  < 2  ) {
          this.arrObjetosFin[i] = true;
        }//fin if( int(this.distanciaADestino)  < 2                 


        //Dibuja Destinos
        stroke(100);
        strokeWeight(2);
        ellipse( miMoverObjetos.arrDeDestinos[i].x , 
                 miMoverObjetos.arrDeDestinos[i].y , 
                 1,  1 );

      }//fin for(let i=0; i < miMoverObjetos.arrObjetosAMover.length

      //Parar el loop
      this.todoQuieto = true;
      for(let i=0; i < this.arrObjetosFin.length; i++) {
        if(!this.arrObjetosFin[i]){
          this.todoQuieto = false;
         break;
        }
      }// fin de for (let i= 
      if(this.todoQuieto){
         end = Date.now();
         console.log((end - start)/1000 , ' segundos.');
        //  console.log('finalizado');
         noLoop();
      }//fin de if(todoQuieto)



    }//fin movimientoLineal()



}// fin de class moverObjeto


/////////////////////////////////////////////////////////////////////////////
//Funciones
/////////////////////////////////////////////////////////////////////////////
function calculaDistancia ( x1, y1, x2, y2 ) {

  return Math.sqrt((x1-x2)**2 + (y1-y2)**2);

}//fin de function posicionado