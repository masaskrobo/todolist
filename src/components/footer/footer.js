import './footer.css'
function Footer ({onFotterTask}){

    function buttonFunction(){
        onFotterTask()

    }
    return (
        <footer>
            <button onClick={buttonFunction}>Click</button>
            <p>Masa Skrobo</p>
        </footer>
    )
}
export default Footer;