import Header from './components/Header.jsx';
import Body from './components/Body.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
export default function App() {

  return (
    <>
    <Router>
      <Header />
      <Body />
    </Router>
    </>
  )
}


