
function PlaviKliker({onPlaviKliker}){
    return(
        <div>
            <button onClick={() => {onPlaviKliker('obican bod')}}>Plavi</button>
            <button onClick={()=> {onPlaviKliker('pola boda')}}>Pola boda</button>
            <button onClick ={()=> {onPlaviKliker('extra bod')}}>Dzoker</button>
        </div>
    )

    
}
export default PlaviKliker;