import { Link, Routes, Route} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Home from './Home'
import Characters from './Characters'
import NavMenu from './NavMenu'

const Header = () => {
  return (
    <div>
    <h4>Client Side Programming - Final Assignment</h4>
      <NavMenu />
    </div>
    
  )
}

export default Header