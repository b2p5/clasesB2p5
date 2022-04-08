
class rellenaArea  {
   constructor(){

       //Tipo de division rectangulo horizontal, vertical, circulo
      this.tipoRelleno              = 'Rectangulo';

      //Margenes del área a rellenar
      //Area a rellenar
      this.xyRectangulo             = {'x1': 20, 'y1': 20, 'x2': 300, 'y2': 300};
      this.margenInterno            = 4;
      this.separacionEntreBolas     = 2;

      //Array de contenidos
      this.arrContenidos            = Array();

      //Array de resultados. Contenidos colocados
      this.arrContenidosColocados   = Array();
      this.arrContenidosNoColocados = Array();

    }//fin constructor


    
    //init
    /////////////////////////////////////////////////////////////
    init(){
      for(let i=0; i< 600 ; i++) {
        
        this.arrContenidos.push (  random( 20, 70) );
        // this.arrContenidos.push (  20 );                   //Radio fijo
        // this.arrContenidos.push (randn_bm( 2, 170, 1) );   //Radio dist. gaussiana

      }// fin de for (let i= 
      
      // this.arrContenidos.sort().reverse();

      return  this.arrContenidos;

    }//fin init




    //Método rellenando
    /////////////////////////////////////////////////////////////
    rellenando(){

      //Objetos a colocar y colocados
      var radioTrab       = 0;
      var xTrab           = 0;
      var yTrab           = 0;
      var radioColocada   = 0;
      var xColocada       = 0;
      var yColocada       = 0;

      var colocada        = false;

      //Marco
      var xInf            = this.xyRectangulo.x1;
      var xSup            = this.xyRectangulo.x2;
      var yInf            = this.xyRectangulo.y1;
      var ySup            = this.xyRectangulo.y2;


      //Objetos a colocar - bolas
      for(let i=0; i<this.arrContenidos.length; i++) {

        radioTrab = this.arrContenidos[i] / 2;

        //Colocar Primer objeto - bola en la parte inferior izquierda
        if (i == 0){
          xTrab = xInf + radioTrab + this.margenInterno;
          // yTrab = yInf + radioTrab + this.margenInterno;  //Arriba Abajo
          yTrab = ySup - radioTrab - this.margenInterno;
          this.arrContenidosColocados.push({
                                            'objeto'  : i , 
                                            'x'       : xTrab, 
                                            'y'       : yTrab , 
                                            'radiox2' : 2 * radioTrab ,
          });

          continue;

        }//fin if (i == 0) - Colocar Primer objeto

        
        
        // for(let j=yInf + radioTrab + this.margenInterno;           //Arriba Abajo
        //         j<ySup - radioTrab - this.margenInterno; j++) {

        //Recorremos eje y de xyRectangulo  
        for(let j = ySup - radioTrab - this.margenInterno;              //Abajo Arriba 
                j > yInf + radioTrab + this.margenInterno;   j -= radioTrab) {
          //Recorremos eje x de xyRectangulo
          for(let k = xInf + radioTrab + this.margenInterno; 
                  k < xSup - radioTrab - this.margenInterno; k += radioTrab) {
          

              colocada        = false;
              //Recorremos todo el array de objetos colocados
              for(let l=0; l<this.arrContenidosColocados.length; l++) {

                radioColocada = this.arrContenidosColocados[l].radiox2 / 2;

                xColocada     = this.arrContenidosColocados[l].x;
                yColocada     = this.arrContenidosColocados[l].y;
                xTrab         = k;
                yTrab         = j;
 
    
                colocada = this.distancia ( xColocada,      yColocada , 
                                            xTrab,          yTrab,
                                            radioColocada,  radioTrab);

                if(!colocada) break;

              }// fin de for(let l=0; l<this.arrContenidosColocados.len
              
              if (colocada){

                this.arrContenidosColocados.push({
                                                    'objeto'  : i , 
                                                    'x'       : xTrab, 
                                                    'y'       : yTrab , 
                                                    'radiox2' : 2 * radioTrab ,
                });

                break;
          
              }//fin de if (colocada)  


          }// fin de for(let k=xInf + radioTrab; k<xSup - radioTrab; k
          if(colocada) break;
        }// fin de for(let j=yInf + radioTrab; j<ySup - radioTrab; j

        //Objetos no colocados
        if(!colocada){
          this.arrContenidosNoColocados.push({
                                                'objeto'  : i , 
                                                'radiox2' : 2 * radioTrab ,
          });

        }//fin if(!colocada){

      }// fin de for(let i=0; i<=this.arrContenidos
        
            
      return [this.arrContenidosColocados, this.arrContenidosNoColocados];


    }//fin rellenando



    //Métodos privados
    /////////////////////////////////////////////////////////////
    distancia ( x1, y1 ,  x2, y2 , radioColocada, radioTrab){

              var dis = Math.sqrt((x1-x2)**2 + (y1-y2)**2);
              if(dis > radioColocada + radioTrab + this.separacionEntreBolas ){
                return true;
              }else{
                return false;
              }

    }//fin distancia ( x1, y1 ,  x2, y2 ,


}// fin de class rellenaArea




/////////////////////////////////////////////////////////////
// Funciones
/////////////////////////////////////////////////////////////

//Random con distribución gausiana
/////////////////////////////////////////////////////////////
function randn_bm(min, max, skew) {

  let u = 0, v = 0;
  while(u === 0) u = Math.random() //Converting [0,1) to (0,1)
  while(v === 0) v = Math.random()
  let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
  
  num = num / 10.0 + 0.5 // Translate to 0 -> 1
  if (num > 1 || num < 0) 
    num = randn_bm(min, max, skew) // resample between 0 and 1 if out of range
  
  else{
    num = Math.pow(num, skew) // Skew
    num *= max - min // Stretch to fill range
    num += min // offset to min
  }
  return num;

}//fin de function randn_bm(min, max, skew)