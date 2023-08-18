import ScoreBoard from '../../components/ScoreBoard.jsx'
import imgCard from '../../assets/Images/backcard.png'
import '../../styles/game.css'
export default function Game() {
    return(
        <>
         <ScoreBoard />
        <section id="game-page">
            <div className="card-screen">
                <div className="row">
                    <img className='play-card card1' src={imgCard} alt="" /> 
                    <img className='play-card card2' src={imgCard} alt="" />
                    <img className='play-card card3' src={imgCard} alt="" />
                    <img className='play-card card3' src={imgCard} alt="" />
                </div>
                <div className="row">
                    <img className='play-card card4' src={imgCard} alt="" />
                    <img className='play-card card5' src={imgCard} alt="" />
                    <img className='play-card card6' src={imgCard} alt="" />
                    <img className='play-card card6' src={imgCard} alt="" />
                </div>
                <div className="row">
                    <img className='play-card card7' src={imgCard} alt="" />
                    <img className='play-card card8' src={imgCard} alt="" />
                    <img className='play-card card9' src={imgCard} alt="" />
                    <img className='play-card card6' src={imgCard} alt="" />
                </div>
            </div>
           
        </section>
        </>
    )
}