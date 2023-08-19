export default function ScoreBoard(props) {

    return (
        <>
        <div className="score-counter">
            <div className="score-board">
                    <h1 className="best-score">best score: <span> {props.bestScore}</span></h1>
                    <h1 className="current-score">score: <span> {props.currentScore}</span></h1>
            </div>
            {props.quote && 
                <div className="motivation">
                    <p>Break ur own limits! <br></br>u built diff boh</p>
                </div>
            }
        </div>
        </>
    )
}