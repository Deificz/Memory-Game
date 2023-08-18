import '../styles/header.css'
import imgLogo from '../assets/Images/logo.png'
import imgCard from '../assets/Images/backcard.png'
function backHome() {
    window.location.href = '/'
}


export default function Header (){
    return(
        <section id="header">
            <div className="logo">
                <img className="img-logo" src={imgLogo} alt="" onClick={backHome} />
                <img className="img-card" src={imgCard} alt="" onClick={backHome} />
                <h1>Memory Game<span> by Deificz</span></h1>
            </div>
        </section>
    )
}