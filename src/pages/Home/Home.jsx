import '../../styles/home.css'

export default function Home() {

    function startGame() {
        window.location.href = '/game'
    }

    return (
       <div className="home-page">
            <h1>Greetings, Duelist</h1>
            <p> you need to avoid clicking the same card that you clicked in the first round  as much as possible, goodluck!</p>
            <button onClick={startGame} >PLAY</button>
       </div>
    )
}