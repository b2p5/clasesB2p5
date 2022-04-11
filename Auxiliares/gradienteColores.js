//https://p5js.org/examples/color-hue.html
//https://p5js.org/examples/color-lerp-color.html
//https://www.geeksforgeeks.org/p5-js-colormode-function/

//
// const Y_AXIS = 1;
// const X_AXIS = 2;

class gradienteColores  {

  constructor(){

    //Canvas
    this.realCanvas           = {'ancho': 600, 'alto': 500 };
    //Area a rellenar
    this.xyRectangulo         = {'x1': 40, 'y1': 40, 'x2': 300, 'y2': 300};
    //Margenes
    this.margenes             = {'izq': 20, 'der': 20, 'sup': 20, 'inf': 20};

    

    //Array de contenidos
    this.arrObjetos           = Array();

    this.arrColor1            = Array();
    this.arrColor2            = Array();
    this.arrColor3            = Array();
    this.arrColor4            = Array();

    this.objectColor;


  }//fin constructor


  //Creamos objetos a mover
  /////////////////////////////////////////////////////////////
  initObjetos(){
    this.arrObjetos = Array();

    for(let i=0; i< 100 ; i++) {
      
      this.arrObjetos.push ({
                              'objeto'  : i , 
                              'x'       : random( this.margenes.izq + 30,  this.realCanvas.ancho - this.margenes.der - 30), 
                              'y'       : random( this.margenes.sup + 30,  this.realCanvas.alto  - this.margenes.inf - 30) , 
                              'radiox2' : random( 100, 100) ,
      } );



      this.arrColor1.push ({
                              'color'   : [ random( 0, 255), random( 0, 255),random( 0, 255),random( 0, 255)] ,
      } );  
      this.arrColor2.push ({
                              'color'   : [ random( 0, 255), random( 0, 255),random( 0, 255) ] ,
      } );  
      let commonShade = lerpColor(color('0000ff'), color('#ff00ff') , 0.5);
      this.arrColor3.push ({
                              'color'   :  commonShade  ,
      } );  

     
    
    }// fin de for (let i= 0; i< 1000 ; i++
        

  }//fin initObjetos

  
  //Método prepara ....
  /////////////////////////////////////////////////////////////
  gradienteObjetos(miGradienteColores){ 

    for(let i=0; i < miGradienteColores.arrObjetos.length; i++) {  
         
      stroke(255);
      noStroke();


      this.objectColor = this.arrColor1[i].color;
      this.objectColor = this.arrColor2[i].color;
      // this.objectColor = this.arrColor3[i].color;


      fill(this.objectColor);

      ///////
      // fill(mouseY, mouseX , height);


    
      ellipse(  miGradienteColores.arrObjetos[i].x, 
                miGradienteColores.arrObjetos[i].y, 
                miGradienteColores.arrObjetos[i].radiox2, 
                miGradienteColores.arrObjetos[i].radiox2);


    }//fin for(let i=0; i < miChocaObjetos.arrObjetos.length; 

    

  }//fin gradienteObjetos(miGradienteColores)



}// fin de class gradienteColores


/////////////////////////////////////////////////////////////////////////////
//Funciones
/////////////////////////////////////////////////////////////////////////////

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

// var from = color(255, 0, 0, 0.2 * 255);
// var to = color(0, 0, 255, 0.2 * 255);
// var c1 = lerpColor(from, to, 0.33);
// var c2 = lerpColor(from, to, 0.66)
// fill(c2);