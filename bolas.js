
/////////////////////////////////////////////////////////////////////////////////
// clase Bolas
/////////////////////////////////////////////////////////////////////////////////
class Bolas {

    constructor() {
      this.diameter     = 15;
      this.x            = random( 10,windowWidth - 10 );
      this.y            = 10;
  
      this.altoFranja   = 100;
  
      this.margenVertI  = 40;
      this.margenVertD  = 90;
  
      this.myColor      = 'red';
      this.tipHeur      = 1;
  
      this.arrPosYTxtI  = new Array(10).fill(0);
      this.arrPosYTxtD  = new Array(10).fill(0);
      this.arrPorcen    = new Array(10).fill(0);
      this.cuentaTxts;
  
    }//fin constructor
  
    //cabeceraGeneral
    ///////////////////////////////////////////////////////////////////////
    cabeceraGeneral(){
  
      var posiYCabecera = 0;
      
      var cabeceraLin1 = 'Bloque: ' +idBlock + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'  + 
                         ' Nº Txs.: ' + (dataBlock[0].n_tx).toLocaleString("en-EN");
      txtDeBloque = createP( cabeceraLin1 );
      txtDeBloque.position(17, posiYCabecera);
      txtDeBloque.style('font-size', '16px');
  
      var cabeceraLin2 = 'Nº de Bloque: ' + (dataBlock[0].block_index).toLocaleString("es-ES");
      txtDeBloque = createP(cabeceraLin2 );
      txtDeBloque.position(textWidth(cabeceraLin1)+ 40, posiYCabecera);
      txtDeBloque.style('font-size', '16px');
      
      var cabeceraLin3 = 'Peso: ' + (dataBlock[0].weight).toLocaleString("es-ES");
      txtDeBloque = createP(cabeceraLin3 );
      txtDeBloque.position( textWidth(cabeceraLin1)+ textWidth(cabeceraLin2)+ 160, 3);
      txtDeBloque.style('font-size', '16px');
  
      var cabeceraLin4 = 'Time: ' + myTime(dataBlock[0].time) ;
      txtDeBloque = createP(cabeceraLin4 );
      txtDeBloque.position( textWidth(cabeceraLin1)+ textWidth(cabeceraLin2)+ 
                            textWidth(cabeceraLin3)+ 200, 3);
      txtDeBloque.style('font-size', '16px');
  
      buttExcel = createButton('Descarga fichero Excel con las heurísticas');
      buttExcel.position(17, posiYCabecera + 37);
      buttExcel.mousePressed(ejecutaExcel);
      
    }//fin cabeceraGeneral
  
  
    //Textos
    ///////////////////////////////////////////////////////////////////////
    preparaTextos(){
      this.altoFranja = ( (windowHeight - margenInf) / 10 );
  
      for(let i=1; i<=cuentaTxts.length; i++) {
        this.arrPosYTxtI[i] = int((i+1) *  this.altoFranja) - (this.altoFranja ) ;
        this.arrPosYTxtD[i] = int((i+1) *  this.altoFranja) - (this.altoFranja/2);
        this.arrPorcen[i]   = ((this.cuentaTxts[i]/ this.cuentaTxts[0])*100).toFixed(1) + ' %' ;
  
      }// fin de for(let i=0; i<=cuentaTxts.leng
  
    }//fin preparaTextos
  
    displayTextos() {
      fill(0);
  
      for(let i=1; i< cuentaTxts.length; i++) {
        textSize(18);
        textStyle(BOLD);
        text(i , 10, this.arrPosYTxtI[i]);
        textStyle(NORMAL);
        text(str(this.arrPorcen[i]) , windowWidth- 80, this.arrPosYTxtD[i]);
  
        textSize(15);
        text(literalHeur[i] , 30, this.arrPosYTxtI[i] );
        text( '( ' +(cuentaTxts[i]).toLocaleString("es-ES")+' Txs. )', textWidth(literalHeur[i]) +  40, this.arrPosYTxtI[i] );
        
            
      }//fin for(let i=1; i<=cuentaTxts.leng
  
    }//fin displayTextos()
  
  
    //Bolas
    ///////////////////////////////////////////////////////////////////////
    preparaBolas(){
  
      this.altoFranja = ( (windowHeight - margenInf) / 10 );
  
      this.y  = random( (( this.tipHeur + 0 ) * this.altoFranja ) + ((this.diameter/2) + 3 ) , 
                        (( this.tipHeur + 1 ) * this.altoFranja ) - ((this.diameter/2) + 12) ) ;
  
      this.x  = random(  ( this.diameter/2) + this.margenVertI , 
                           windowWidth - (this.diameter/2) - this.margenVertD );                      
  
    }//fin preparaBolas
  
    displayBolas() {
      strokeWeight(0.5);
      // stroke(127, 63, 120);
      // noStroke();
      fill(this.myColor);
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }//fin displayBolas


    // doubleClicked(){
    //   var d = dist (mouseX, mouseY, this.x, this.y);
    //   if (d < (this.diameter)/2){
    //     this.myColor ='gray';
    //     // this.diameter = 25;
    //     this.displayBolas();
    //   }
    // }//fin doubleClicked
  
    // dist(x1, y1, x2, y2){
    //   return Math.sqrt((x1-x2)**2, (y1-y2)**2);
    // } // fin dist
    
  
  }//fin class Bolas
  