import Gozila from "../gozila/gozila";
import KingKong from "../kingkong/kingkong";
import React, {useState} from "react";

function Igra(){
    const[bodoviGozile,setBodoviGozile]= useState(0)
    const [bodoviKingKonga, setBodoviKingKonga] = useState(0);


    function dodajBodGozili(tipUdarca){
        if(tipUdarca == 'jaci'){
            setBodoviGozile(bodoviGozile +2)
        }else{
            setBodoviGozile(bodoviGozile +1)
        }
        
        if(bodoviGozile >= 10){
            alert('Pobedila Gozila')
        }
    }

    function dodajBodKingKongu(tipUdarca){
       if(tipUdarca == 'jaci'){
           setBodoviKingKonga(bodoviKingKonga +2)
       }else{
        setBodoviKingKonga(bodoviKingKonga +1)

       }

        
        if(bodoviKingKonga >= 10){
            alert('Pobedilo KingKong')
        }
    }

    return(
        <div>
            
            <p>Igra</p>
            <p>Bodovi Gozile: {bodoviGozile}</p>
            <p>Bodovi KingKonga: {bodoviKingKonga}</p>
           <Gozila onGozilaHit={dodajBodGozili}/>
           <KingKong onKingKongHit={dodajBodKingKongu}/>
            
        </div>
    )
}
export default Igra;