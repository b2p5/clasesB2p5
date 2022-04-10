
class chocaObjetos  {

  constructor(){

    //Canvas
    this.realCanvas           = {'ancho': 600, 'alto': 500 };
    //Area a rellenar
    this.xyRectangulo         = {'x1': 40, 'y1': 40, 'x2': 300, 'y2': 300};
    //Margenes
    this.margenes             = {'izq': 20, 'der': 20, 'sup': 20, 'inf': 20};

    this.distancia ;
    this.pendiente ;
    this.velocidad            = 4;

    //Array de contenidos
    this.arrObjetos           = Array();


  }//fin constructor


  //Creamos objetos a mover
  /////////////////////////////////////////////////////////////
  initObjetos(){
    this.arrObjetos = Array();

    for(let i=0; i< 250 ; i++) {
      
      this.arrObjetos.push ({
                              'objeto'  : i , 
                              'x'       : random( this.margenes.izq + 30,  this.realCanvas.ancho - this.margenes.der - 30), 
                              'y'       : random( this.margenes.sup + 30,  this.realCanvas.alto  - this.margenes.inf - 30) , 
                              'radiox2' : random( 5, 60) ,
      } );

    }// fin de for (let i= 0; i< 1000 ; i++
    

  }//fin initObjetos

  

  //Método prepara ....
  /////////////////////////////////////////////////////////////
  muestraObjetos(miChocaObjetos){ 


    for(let i=0; i < miChocaObjetos.arrObjetos.length; i++) {  
         
      stroke(0,255, 0);
    
      ellipse(  miChocaObjetos.arrObjetos[i].x, 
                miChocaObjetos.arrObjetos[i].y, 
                miChocaObjetos.arrObjetos[i].radiox2, 
                miChocaObjetos.arrObjetos[i].radiox2);


    }//fin for(let i=0; i < miChocaObjetos.arrObjetos.length; 


  }//fin muestraObjetos



  //Método prepara ....
  /////////////////////////////////////////////////////////////
  mueveObjetos(miChocaObjetos){ 

    for(let i=0; i < miChocaObjetos.arrObjetos.length; i++) {  
      
      for(let j=i+1; j<miChocaObjetos.arrObjetos.length; j++) {

        this.distancia = seTocanObjetos ( miChocaObjetos.arrObjetos[i].x, 
                                          miChocaObjetos.arrObjetos[i].y,
                                          miChocaObjetos.arrObjetos[j].x, 
                                          miChocaObjetos.arrObjetos[j].y,
                                          miChocaObjetos.arrObjetos[i].radiox2, 
                                          miChocaObjetos.arrObjetos[j].radiox2, );
        
        if (this.distancia < 0){

          this.pendiente = createVector(
                              miChocaObjetos.arrObjetos[i].x - miChocaObjetos.arrObjetos[j].x,
                              miChocaObjetos.arrObjetos[i].y - miChocaObjetos.arrObjetos[j].y
                            ).normalize();

          miChocaObjetos.arrObjetos[i].x += this.pendiente.x * this.velocidad;
          miChocaObjetos.arrObjetos[i].y += this.pendiente.y * this.velocidad;
          miChocaObjetos.arrObjetos[j].x -= this.pendiente.x * this.velocidad;
          miChocaObjetos.arrObjetos[j].y -= this.pendiente.y * this.velocidad;

        }//fin if (distancia < 0

        
      }// fin de for(let j=i+1; j<=miCursorDentroObjetos.arrObjetos.length 
        
      //Movimiento de los objetos => aleatorio de 2 puntos
      stroke(255,255, 255);
      miChocaObjetos.arrObjetos[i].x += random(-2 , 2 );
      miChocaObjetos.arrObjetos[i].y += random(-2 , 2 );

      ellipse(  miChocaObjetos.arrObjetos[i].x, 
                miChocaObjetos.arrObjetos[i].y, 
                miChocaObjetos.arrObjetos[i].radiox2, 
                miChocaObjetos.arrObjetos[i].radiox2);

      
    }//fin for(let i=0; i < miChocaObjetos.arrObjetos.length; 


  }//fin mueveObjetos(miChocaObjetos


  checkEdges(i) {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }//fin if (this.position.x >
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    } else if (this.position.y < 0) {
      this.velocity.y *= -1;
      this.position.y = 0;
    }//fin if (this.position.y > heig
  }//fin checkEdges(i)

}// fin de class chocaObjetos


/////////////////////////////////////////////////////////////////////////////
//Funciones
/////////////////////////////////////////////////////////////////////////////
function seTocanObjetos ( x1, y1, x2, y2 , radio1, radio2 ) {

  var sumaRadios = (radio1 + radio2)/2;
  var distancia  = Math.sqrt((x1-x2)**2 + (y1-y2)**2) - sumaRadios;

  return  distancia ;

}//fin de function seTocanObjetos