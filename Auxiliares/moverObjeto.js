class moverObjeto  {

   constructor(){

       //Tipo de movimiento
       this.tipoMovimiento           = 'Lineal';

       //Area a rellenar
       this.xyRectangulo             = {'x1': 20, 'y1': 20, 'x2': 300, 'y2': 300};

       //Margenes del área a rellenar
       this.margenInterno            = 4;

      //Array de contenidos
      this.arrObjetosAMover          = Array();
      this.arrDeDestinos             = Array();

      //Vectores localizacion, velocidad y aceleracion
      this.localizacion              = createVector(0,0);
      this.velocidad                 = createVector(1,1);
      this.aceleracion               = 0.0007;
      this.velocidadMaxStart         = 20;
      this.velocidadMaxStop          = 2;

      //Array de resultados
      this.arrObjetosMovidos         = Array();

    }//fin constructor


    //Init
    /////////////////////////////////////////////////////////////
    init(){
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
      
      return  this.arrObjetosAMover;

    }//fin init




    //Método ...
    mover(){



    }//fin mover()

    


}// fin de class moverObjeto