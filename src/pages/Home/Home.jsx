import '../../styles/home.css'
import { Link } from 'react-router-dom';

export default function Home() {

    return (
       <div className="home-page">
            <h1>Greetings, Duelist</h1>
            <p> you need to avoid clicking the same card twice as much as possible, goodluck!</p>
            <Link to="/game">
                <button>PLAY</button>
            </Link>
            
       </div>
    )
}