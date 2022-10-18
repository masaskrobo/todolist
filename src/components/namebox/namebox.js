import './namebox.css'
function NameBox({osoba}){
    return(
        <div className="name-box">
            <p>Ime: {osoba.ime}</p>
            <p>Prezime: {osoba.prezime}</p>
            <p>Godine: {osoba.godine}</p>
            
        </div>
    )
}
export default NameBox