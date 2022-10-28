
function Kuca({boja, onNumber, onCar, Dvoriste,onTime}){
    return(
        <div>
            <p>Kuca je {boja} boje.</p>
            <button onClick={onNumber}>Klikni</button>
            <p>Automobili :{onCar}</p>
            <p>{Dvoriste}</p>
            <p>{onTime}</p>
            
        </div>
    )
}
export default Kuca;