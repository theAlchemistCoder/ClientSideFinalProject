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
      {/* <div style={{ backgroundColor: '#f0f8ff'}}> */}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>

      <Footer />
      {/* </div> */}
    </>
  );
}

export default App;
