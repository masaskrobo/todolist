
function CrveniKliker({onCrveniKliker}){
    return(
        <div>
            <button onClick={()=>{onCrveniKliker('obican bod')}}>Crveni</button>
            <button onClick={()=>{onCrveniKliker('pola boda')}}>Pola boda</button>
            <button onClick={()=>{onCrveniKliker('extra bod')}}>Dzoker</button>
        </div>
    )

    
}
export default CrveniKliker;