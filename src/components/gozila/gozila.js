
function Gozila({onGozilaHit}){
    return(
        <div>
           <button onClick={()=>{onGozilaHit('slab')}}>Napad Gozile!</button>
           <button onClick={()=>{onGozilaHit('jaci')}}> Jaci udarac Gozile</button>
        </div>
    )
}
export default Gozila;
