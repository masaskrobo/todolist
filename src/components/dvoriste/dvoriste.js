import Kuca from '../kuca/kuca.js'
function Dvoriste(){
    function BrojKuce(){
        alert('Broj kuce je 8')
    }
    const Automobili=['audi ','bmw ','fiat ']

    const oDvoristu={
        velicinaPlaca:'30ari',
        kuca:'na dva sprata',
        sobe:'5',
        terase:'dve vece',
        basta:'ispred kuce prepuna biljaka'
    }
    function Alarm(time){
        if(time == 20){
            alert('Kapija se zakljucava')
        }else{
            alert('Kapija je otkljucana')
        }
    }

    return(
        <div>
            <p>Dvoriste</p>
            <Kuca boja='bele' onNumber={BrojKuce} onCar={Automobili} dvoriste={oDvoristu} onTime={Alarm} />
        </div>
    )
}
export default Dvoriste;