
function KingKong({onKingKongHit}){
    return(
        <div>
           <button onClick={()=> {onKingKongHit('slab')}}>Udri KingKonga!</button>
          <button onClick={()=>{onKingKongHit ('jaci') }}> Jaci udarac KingKonga</button>
        </div>
    )
}
export default KingKong;