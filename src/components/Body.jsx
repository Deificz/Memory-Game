import Home from '../pages/Home/Home.jsx';
import Game from '../pages/Game/Game.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function Body(){

    return(
        <>
         <section id='main-body'>
            <Router>
                <Routes>
                    <Route  path="/" index element = {<Home />} />
                    <Route  path="/game" element = {<Game />} />
                </Routes>
            </Router>
        </section>
        </>
    )
}