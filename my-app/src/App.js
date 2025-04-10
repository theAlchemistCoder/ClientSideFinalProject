import logo from './logo.svg';
import './App.css';
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import { Link, Routes, Route} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Characters from './Characters'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
