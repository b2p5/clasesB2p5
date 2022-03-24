//Clase para detectar la heurística de las transacciones
/////////////////////////////////////////////////////////////////////////

class Heuristic  {
   constructor(){
      this.tipo      = 1 ;
      this.inputs    = Array();
      this.out       = Array();
      this.esOk     = false;
    }

    
    async  reutilizaDirecciones(){

        var lengInputs  = this.inputs.length;
        var lengOut     = this.out.length;
        this.esOk       = false;
    
        if(lengInputs == 1 && lengOut == 2){
          
            if ( this.inputs[0].prev_out.addr && 
                (
                  this.inputs[0].prev_out.addr == this.out[0].addr ||
                  this.inputs[0].prev_out.addr == this.out[1].addr
                )
               ){
              
              this.esOk = true;
              
            }// fin de if (inputs[0].prev_
            
        }//fin de if(lengInputs == 1 && lengOut

    }// fin de reutilizaDirecciones

}// fin de class Heuristic