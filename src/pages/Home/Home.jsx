import '../../styles/home.css'
import { Link } from 'react-router-dom';
import AnimatedPage from '../../components/AnimatedPage';
export default function Home() {

    return (
       <AnimatedPage>
            <div className="home-page">
                <h1>Greetings, Duelist</h1>
                <p> you need to avoid clicking the same card twice as much as possible, goodluck!</p>
                <Link to="/Memory-Game/game">
                    <button>PLAY</button>
                </Link>
            </div>
       </AnimatedPage>
    )
}