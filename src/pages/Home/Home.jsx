import '../../styles/home.css'
import startGame from '../../utils/startGame'

export default function Home() {

    return (
       <div className="home-page">
            <h1>Greetings, Duelist</h1>
            <p> you need to avoid clicking the same card twice as much as possible, goodluck!</p>
            <button onClick={startGame} >PLAY</button>
       </div>
    )
}