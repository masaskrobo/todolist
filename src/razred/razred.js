import Ucenik from  '../components/ucenik/ucenik.js'
function Razred(){
    const ucenik1={
        ime:'Masa',
        godiste:'2002',
        omiljeniPredmet: 'srpski',
        vladanje:'5',
        razred:'2'


    }
    const ucenik2={
        ime:'Luka',
        godiste:'2000',
        omiljeniPredmet: 'fizicko',
        vladanje:'4',
        razred: '4'

    }
    return(
        <div>
            <p>Razred</p>
            <Ucenik onUcenik={ucenik1}/>
            <Ucenik onUcenik={ucenik2}/>
        </div>
    )
}
export default Razred;