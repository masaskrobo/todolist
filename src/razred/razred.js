import Ucenik from  '../components/ucenik/ucenik.js';
import Profesor from '../components/profesor/profesor.js'
import './razred.css'
function Razred(){

    const profesori=[{
            ime:'Ana Markovic',
            predmet:'srpski',
            
        },
        {
            ime:'Stefan Dukic',
            predmet:'fizicko',

        },
        {
            ime:'Mila Jovanovic',
            predmet:'muzicko',
        }]
   
    const ucenici=[{
        ime:'Masa',
        godiste:'2002',
        predmet: 'srpski',
        vladanje:'5',
        razred:'2'
    },
    {
        ime:'Luka',
        godiste:'2000',
        predmet: 'fizicko',
        vladanje:'4',
        razred: '4'
    }]

    
    return(
        <div>
            <p className='razred'>Razred</p>

            {profesori.map(function (item){
                return <Profesor onProfesor={item} />
            })}
            
           
          {ucenici.map(function(item){
                return <Ucenik onUcenik={item} />
               })} 
        
           
        </div>
    )
}
export default Razred;