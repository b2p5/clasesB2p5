
class rellenaArea  {
   constructor(){

       //Tipo de division rectangulo horizontal, vertical, circulo
      this.tipoRelleno            = 'Rectangulo';

      //Margenes del área a rellenar
      //Area a rellenar
      this.xyRectangulo           = {'x1': 20, 'y1': 20, 'x2': 300, 'y2': 300};
      this.margenInterno          = 5;

      //Array de contenidos
      this.arrContenidos          = Array();

      //Array de resultados. Contenidos colocados
      this.arrContenidosColocados   = Array();
      this.arrContenidosNoColocados = Array();

    }//fin constructor


    
    //init
    /////////////////////////////////////////////////////////////
    init(){
      for(let i=0; i<50; i++) {
        this.arrContenidos.push (  random( 5, 50) );
        // this.arrContenidos.push (  20 );
      }// fin de for (let i= 
        
      return  this.arrContenidos;

    }//fin init




    //Método rellenando
    /////////////////////////////////////////////////////////////
    rellenando(){

      var radioTrab       = 0;
      var xTrab           = 0;
      var yTrab           = 0;
      var radioColocada   = 0;
      var xColocada       = 0;
      var yColocada       = 0;

      var colocada        = false;

      var xInf            = this.xyRectangulo.x1;
      var xSup            = this.xyRectangulo.x2;
      var yInf            = this.xyRectangulo.y1;
      var ySup            = this.xyRectangulo.y2;


      //Objetos a colocar - bolas
      for(let i=0; i<this.arrContenidos.length; i++) {

        radioTrab = this.arrContenidos[i] / 2;

        //Colocar Primer objeto - bola
        if (i == 0){
          xTrab = xInf + radioTrab + this.margenInterno;
          yTrab = yInf + radioTrab + this.margenInterno;
          this.arrContenidosColocados.push({
                                            'objeto'  : i , 
                                            'x'       : xTrab, 
                                            'y'       : yTrab , 
                                            'radiox2' : 2 * radioTrab ,
          });

          continue;

        }//fin if (i == 0) - Colocar Primer objeto

        
        //Recorremos eje y de xyRectangulo
        for(let j=yInf + radioTrab + this.margenInterno; 
                j<ySup - radioTrab - this.margenInterno; j++) {
          //Recorremos eje x de xyRectangulo
          for(let k=xInf + radioTrab + this.margenInterno; 
                  k<xSup - radioTrab - this.margenInterno; k++) {
          

              colocada        = false;
              //Recorremos todo el array de objetos colocados
              for(let l=0; l<this.arrContenidosColocados.length; l++) {

                radioColocada = this.arrContenidosColocados[l].radiox2 / 2;

                xColocada     = this.arrContenidosColocados[l].x;
                yColocada     = this.arrContenidosColocados[l].y;
                xTrab         = k;
                yTrab         = j;
 
    
                colocada = this.distancia ( xColocada, yColocada , 
                                            xTrab, yTrab,
                                            radioColocada, radioTrab);

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
        
   console.log(this.arrContenidosNoColocados);
            
      return [this.arrContenidosColocados, this.arrContenidosNoColocados];


    }//fin rellenando



    //Métodos privados
    /////////////////////////////////////////////////////////////
    distancia ( x1, y1 ,  x2, y2 ,
                radioColocada, radioTrab){

              var dis = Math.sqrt((x1-x2)**2 + (y1-y2)**2);
              if(dis > radioColocada + radioTrab + 1){
                return true;
              }else{
                return false;
              }

    }//fin distancia ( x1, y1 ,  x2, y2 ,


}// fin de class rellenaArea