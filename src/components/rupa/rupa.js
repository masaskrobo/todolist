import CrveniKliker from "../crveni/crveni";
import PlaviKliker from '../plavi/plavi'
import React, {useState} from "react";
import Kliker from '../kliker/kliker.js'

function Rupa(){
const [poeniPlavog,setPoeniPlavog] = useState(0);
const [poeniCrvenog, setPoeniCrveog] = useState(0)

function Boje(Bodovi){
    
     if(Bodovi == 'extra bod'){
        setPoeniPlavog(poeniPlavog +3)
     } else if(Bodovi == 'pola boda'){
        setPoeniPlavog(poeniPlavog +0.5)
     } else(
        setPoeniPlavog(poeniPlavog +1)
     )


    if(poeniPlavog >= 10){
        alert('Pobedio Plavi Kliker')
    }
}


function Boje(Bodovi){
   if( Bodovi == 'extra bod'){
      setPoeniCrveog(poeniCrvenog +3)
   } else if(Bodovi == 'pola boda'){
    setPoeniCrveog (poeniCrvenog +0.5)
   }else{
    setPoeniCrveog(poeniCrvenog +1)
   }

    if(poeniCrvenog >= 10){
        alert('Pobedio Crveni Kliker')
    }

    function BojeKlikera(){
      alert('Koja je boja?')
    }
}

    return(
        <div>
            <p>Zapocni igru!</p>
            <p>Poeni plavog klikera:{poeniPlavog}</p>
            <p>Poeni crvenog klikera:{poeniCrvenog}</p>
           
            <Kliker onKliker={ Boje}/>

        </div>
    )
}
export default Rupa;