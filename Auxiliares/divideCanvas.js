class divideCanvas  {

   constructor(){

       //Tipo de division rectangulo horizontal, vertical, circulo
      this.tipoDivision     = 'franjaHorizontal';

      this.numeroDivisiones = 10;
      this.altoCadaDiv      = 0;
      this.anchoCadaDiv     = 0;
      this.separacion       = 5;

      //Canvas
      this.realCanvas       = {'ancho': 600, 'alto': 500 };

      //Margenes
      this.margenes         = {'izq': 20, 'der': 20, 'sup': 20, 'inf': 20};

      //Array de resultados
      this.resulCanvas      = Array();
      this.resulMargenes    = Array();
      this.resulAreas       = Array();

    }//fin constructor


    //Método ...
    dividirEnAreas(){

      if(this.tipoDivision == 'franjaVertical'){
        this.resulCanvas.push({
                                  'x'    : 0  , 
                                  'y'    : 0  ,
                                  'ancho': this.realCanvas.ancho , 
                                  'alto' : this.realCanvas.alto,
        });
        
        var anchoConMargen   = this.realCanvas.ancho - this.margenes.izq - this.margenes.der;
        var altoConMargen    = this.realCanvas.alto  - this.margenes.sup - this.margenes.inf;
        
        this.resulMargenes.push({
                                  'x'    : this.margenes.izq  , 
                                  'y'    : this.margenes.sup  ,
                                  'ancho': anchoConMargen, 
                                  'alto' : altoConMargen,
        });


        var anchoAreas   = anchoConMargen - 2 * this.separacion;
        var altoAreas    = altoConMargen  - 2 * this.separacion;;
        
        var anchoCadaDiv = (anchoAreas/this.numeroDivisiones);
    
        this.resultado        = Array();
        for(let i=1; i<=this.numeroDivisiones; i++) {
          this.resulAreas.push({
                                'x'    : this.separacion + this.margenes.izq + (i-1) * anchoCadaDiv, 
                                'y'    : this.separacion + this.margenes.sup ,
                                'ancho': anchoCadaDiv , 
                                'alto' : altoAreas,
          });

        }// fin de for(let i=1; i<=this.numeroDivisiones;

        return [this.resulCanvas , this.resulMargenes, this.resulAreas];
          
      }//fin  if(this.tipoDivision == 'franjaVertical'
      
      
      if(this.tipoDivision == 'franjaHorizontal'){
        this.resulCanvas.push({
                                  'x'    : 0  , 
                                  'y'    : 0  ,
                                  'ancho': this.realCanvas.ancho , 
                                  'alto' : this.realCanvas.alto,
        });
        
        var anchoConMargen   = this.realCanvas.ancho - this.margenes.izq - this.margenes.der;
        var altoConMargen    = this.realCanvas.alto  - this.margenes.sup - this.margenes.inf;
        
        this.resulMargenes.push({
                                  'x'    : this.margenes.izq  , 
                                  'y'    : this.margenes.sup  ,
                                  'ancho': anchoConMargen, 
                                  'alto' : altoConMargen,
        });


        var anchoAreas   = anchoConMargen - 2 * this.separacion;
        var altoAreas    = altoConMargen  - 2 * this.separacion;;
        
        var altoCadaDiv = (altoAreas/this.numeroDivisiones);
    
        this.resultado        = Array();
        for(let i=1; i<=this.numeroDivisiones; i++) {
          this.resulAreas.push({
                                'x'    : this.separacion + this.margenes.izq , 
                                'y'    : this.separacion + this.margenes.sup + (i-1) * altoCadaDiv,
                                'ancho': anchoAreas , 
                                'alto' : altoCadaDiv,
          });

        }// fin de for(let i=1; i<=this.numeroDivisiones;

        return [this.resulCanvas , this.resulMargenes, this.resulAreas];
          
      }//fin  if(this.tipoDivision == 'franjaHorizontal'


    }//fin dividirEnAreas


}// fin de class divideCanvas