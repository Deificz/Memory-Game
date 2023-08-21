import '../styles/header.css'
import imgLogo from '../assets/Images/logo.png'
import imgCard from '../assets/Images/backcard.png'
import { Link } from 'react-router-dom';

export default function Header (){
    return(
        <section id="header">
            <div className="logo">
                <Link className="link-logo" to="/">
                    <img className="img-logo" src={imgLogo} alt=""/>
                </Link>

                <Link className="link-card" to="/">
                    <img className="img-card" src={imgCard} alt=""/>
                </Link>
                <h1>Memory Game<span> by Deificz</span></h1>
            </div>
        </section>
    )
}