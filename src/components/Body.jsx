import Home from '../pages/Home/Home.jsx';
import Game from '../pages/Game/Game.jsx';
import Header from '../components/Header.jsx';
import { Route, Routes } from 'react-router-dom';
export default function Body(){

    return(
        <>
         <section id='main-body'>
            <Routes>
                <Route  path="/" index element = {<Home />} />
                 <Route  path="/game" element = {<Game />} />
            </Routes>
        </section>
        </>
    )
}