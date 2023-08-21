import ScoreBoard from '../../components/ScoreBoard.jsx'
import img_millenium from '../../assets/Images/millenium.png'
import card0 from '../../assets/Images/card-images/card-0.jpg'
import card1 from '../../assets/Images/card-images/card-1.jpg'
import card2 from '../../assets/Images/card-images/card-2.jpg'
import card3 from '../../assets/Images/card-images/card-3.jpg'
import card4 from '../../assets/Images/card-images/card-4.jpg'
import card5 from '../../assets/Images/card-images/card-5.jpg'
import card6 from '../../assets/Images/card-images/card-6.jpg'
import card7 from '../../assets/Images/card-images/card-7.jpg'
import card8 from '../../assets/Images/card-images/card-8.jpg'
import card9 from '../../assets/Images/card-images/card-9.jpg'
import card10 from '../../assets/Images/card-images/card-10.jpg'
import card11 from '../../assets/Images/card-images/card-11.jpg'
import card12 from '../../assets/Images/card-images/card-12.jpg'
import card13 from '../../assets/Images/card-images/card-13.jpg'
import card14 from '../../assets/Images/card-images/card-14.jpg'

import { Link } from 'react-router-dom';
import '../../styles/game.css'
import { useState } from 'react';

export default function Game() {

    const [currentScore, setCurrentScore] = useState(0);
    const [currentBestScore, setBestScore] = useState(0);
    const [quote, setQuote] = useState(false);
    const [win, setWin] = useState(false);
    const [cards, setCards] = useState([
        {id: 0, url: card0, isClicked: false },
        {id: 1, url: card1, isClicked: false },
        {id: 2, url: card2, isClicked: false },
        {id: 3, url: card3, isClicked: false },
        {id: 4, url: card4, isClicked: false },
        {id: 5, url: card5, isClicked: false },
        {id: 6, url: card6, isClicked: false },
        {id: 7, url: card7, isClicked: false },
        {id: 8, url: card8, isClicked: false },
        {id: 9, url: card9, isClicked: false },
        {id: 10, url: card10, isClicked: false },
        {id: 11, url: card11, isClicked: false },
        {id: 12, url: card12, isClicked: false },
        {id: 13, url: card13, isClicked: false },
        {id: 14, url: card14, isClicked: false },

    ]);
    
    //Score counter
    if(currentScore > currentBestScore){
        setBestScore(prevBestScore => prevBestScore + 1)
    }

    function handleClick(prop) {

        //Check if the card is already clicked
        if(prop.isClicked === true){
        
            //Resets isClicked property
            const updatedDeck = cards.map(card => {
                return {...card, isClicked: false};
            })

            const shuffledCards = [...updatedDeck].sort((a,b) => 0.5 - Math.random())
            setCards(shuffledCards);
            setCurrentScore(0);
            setQuote(true);
            setTimeout(setQuote, 2000, false);

            
        }
        
        else {
            //Sets card's isClicked to true
            const updatedDeck = cards.map(card => {
                if(card.id === prop.id){
                    return {...card, isClicked: true}
                }
                return card;
            })
            
            //Shuffle the order of array
            const shuffledCards = [...updatedDeck].sort((a,b) => 0.5 - Math.random())
            setCards(shuffledCards);
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
                    <Link to="/">
                        <img src={img_millenium} alt="" />
                    </Link>
                    
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