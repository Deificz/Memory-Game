import '../styles/header.css'
import imgLogo from '../assets/Images/logo.png'
import imgCard from '../assets/Images/backcard.png'
import goHome from '../utils/goHome'


export default function Header (){
    return(
        <section id="header">
            <div className="logo">
                <img className="img-logo" src={imgLogo} alt="" onClick={goHome} />
                <img className="img-card" src={imgCard} alt="" onClick={goHome} />
                <h1>Memory Game<span> by Deificz</span></h1>
            </div>
        </section>
    )
}