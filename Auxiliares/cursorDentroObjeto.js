class cursorDentroObjeto  {

  constructor(){

    //Canvas
    this.realCanvas                = {'ancho': 600, 'alto': 500 };

    //Margenes
    this.margenes                  = {'izq': 20, 'der': 20, 'sup': 20, 'inf': 20};

    //Radio de objetos             
    this.radioMax                  = 60;
    this.radioMin                  = 5;
    
    this.margenAdicional           = (this.radioMax/2) + 2;

    //Array de contenidos
    this.arrObjetos          = Array();

    this.distanciaADestino;


  }//fin constructor


  //Creamos objetos a mover
  /////////////////////////////////////////////////////////////
  initObjetos(){
    this.arrObjetos = Array();

    for(let i=0; i< 100 ; i++) {
      
      this.arrObjetos.push ({
                              'objeto'  : i , 
                              'x'       : random( this.margenes.izq + this.margenAdicional, this.realCanvas.ancho - this.margenes.der - this.margenAdicional), 
                              'y'       : random( this.margenes.sup + this.margenAdicional, this.realCanvas.alto  - this.margenes.inf - this.margenAdicional) , 
                              'radiox2' : random( this.radioMin , this.radioMax ) ,
      } );

    }// fin de for (let i= 0; i< 1000 ; i++
    

  }//fin initObjetos

  
  //Método muestraObjetos 
  /////////////////////////////////////////////////////////////
  muestraObjetos(miCursorDentroObjetos){ 


    for(let i=0; i < miCursorDentroObjetos.arrObjetos.length; i++) {  

      stroke(0,255, 0);
    
      ellipse(  miCursorDentroObjetos.arrObjetos[i].x, 
                miCursorDentroObjetos.arrObjetos[i].y, 
                miCursorDentroObjetos.arrObjetos[i].radiox2, 
                miCursorDentroObjetos.arrObjetos[i].radiox2);

    }//fin for(let i=0; i < miCursorDentroObjetos.arrObjetos.length; 

  }//fin muestraObjetos


  //Método cursorDentroObj 
  /////////////////////////////////////////////////////////////
  cursorDentroObj(miCursorDentroObjetos){ 


    for(let i=0; i < miCursorDentroObjetos.arrObjetos.length; i++) {  
    
      if ( estaDentroObjeto(  mouseX, mouseY, 
                              miCursorDentroObjetos.arrObjetos[i].x, 
                              miCursorDentroObjetos.arrObjetos[i].y, 
                              miCursorDentroObjetos.arrObjetos[i].radiox2) ){

        stroke(255 ,255, 0);
        ellipse(  miCursorDentroObjetos.arrObjetos[i].x, 
                  miCursorDentroObjetos.arrObjetos[i].y, 
                  miCursorDentroObjetos.arrObjetos[i].radiox2, 
                  miCursorDentroObjetos.arrObjetos[i].radiox2);

      }//fin if ( estaDentroObjeto

    }//fin for(let i=0; i < miCursorDentroObjetos.arrObjetos.length; 

  }//fin muestraObjetos  


}// fin de class cursorDentroObjeto


/////////////////////////////////////////////////////////////////////////////
//Funciones
/////////////////////////////////////////////////////////////////////////////
function estaDentroObjeto ( x1, y1, x2, y2 , radio) {

  return  (Math.sqrt((x1-x2)**2 + (y1-y2)**2) < (radio/2) ) ;

}//fin de function posicionado