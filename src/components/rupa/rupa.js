import CrveniKliker from "../crveni/crveni";
import PlaviKliker from '../plavi/plavi'
import React, {useState} from "react";

function Rupa(){
const [poeniPlavog,setPoeniPlavog] = useState(0);
const [poeniCrvenog, setPoeniCrveog] = useState(0)

function Plavi(Bodovi){
    
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


function Crveni(Bodovi){
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
}

    return(
        <div>
            <p>Zapocni igru!</p>
            <p>Poeni plavog klikera:{poeniPlavog}</p>
            <p>Poeni crvenog klikera:{poeniCrvenog}</p>
            <PlaviKliker onPlaviKliker={Plavi}/>
            <CrveniKliker onCrveniKliker={Crveni}/>
            
        </div>
    )
}
export default Rupa;