//Clase para detectar la heurística de las transacciones
/////////////////////////////////////////////////////////////////////////

class Heuristic  {
   constructor(){
      this.tipo      = 1 ;
      this.inputs    = Array();
      this.out       = Array();
    }

    
    reutilizaDirecciones(){

        var lengInputs  = this.inputs.length;
        var lengOut     = this.out.length;
        var resTxs      = false;

        if(lengInputs == 1 && lengOut == 2){
      
            if ( inputs[0].prev_out.addr && 
                (
                  inputs[0].prev_out.addr == out[0].addr ||
                  inputs[0].prev_out.addr == out[1].addr
                )
               ){
              
              resTxs = true;
              
            }// fin de if (inputs[0].prev_
            
        }//fin de if(lengInputs == 1 && lengOut
      
        return resTxs;

    }// fin de reutilizaDirecciones

}// fin de class Heuristic