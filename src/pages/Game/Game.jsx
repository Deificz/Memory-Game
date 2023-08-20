import ScoreBoard from '../../components/ScoreBoard.jsx'
import img_millenium from '../../assets/Images/millenium.png'
import data from '../../data/filtered_cards.json' 
import goHome from '../../utils/goHome.js'

import '../../styles/game.css'
import { useState } from 'react';

export default function Game() {

    const [currentScore, setCurrentScore] = useState(0);
    const [currentBestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState(data.card);
    const [quote, setQuote] = useState(false);
    const [win, setWin] = useState(false);

    
    //Score counter
    if(currentScore > currentBestScore){
        setBestScore(prevBestScore => prevBestScore + 1)
    }

    function handleClick(prop) {
        //Shuffle the order of array
        const shuffledCards = [...cards].sort((a,b) => 0.5 - Math.random())
        setCards(shuffledCards);

        //Check if the card is already clicked
        if(prop.isClicked === true){
        
            //Resets isClicked property
            prop.isClicked = false;

            setCurrentScore(0);
            setCards(data.card);
            setQuote(true);
            setTimeout(setQuote, 2000, false);
        }
        else{
            prop.isClicked = true;
            setCurrentScore(prevCurrentScore => prevCurrentScore + 1);

            if(currentScore == 14){
                setWin(true);
            }   
        }
    }
    return(
        <>
        {win ? 
               <>
                <div className='end-screen'>
                    <h1>you've earned this :)</h1>
                    <img src={img_millenium} onClick={goHome} alt="" />
                </div>
               </>
             :
               <>
                <ScoreBoard currentScore={currentScore} bestScore={currentBestScore} quote={quote}/>
                <section id="game-page">
                    <div className="card-screen">
                        {cards.map((card) => 
                            <img key={card.id} src={card.url} onClick={() => handleClick(card)} className='play-card' alt="" /> 
                        )}
                    </div>
                </section>
                </>
        }
        </>
    )
}