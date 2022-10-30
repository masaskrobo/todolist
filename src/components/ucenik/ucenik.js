import './ucenik.css'
function Ucenik({onUcenik}){
    return(
        <div className='container'>
            
           <p className='ucenik'>Ucenik:</p>
           <p className="info">Ime: {onUcenik.ime } ; </p>
           <p className="info">Godiste:  {onUcenik.godiste } ; </p>
           <p className="info">Predmet: {onUcenik.predmet} ; </p>
           <p className="info">Vladanje:  {onUcenik.vladanje} ;</p>
           <p className="info">Razred:  {onUcenik.razred} ; </p>
           
        
           
           
           
          
          
        </div>
    )
}
export default Ucenik;