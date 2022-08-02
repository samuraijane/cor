import { NavLink } from 'react-router-dom';
import "./navbar.css";


function Navbar() {
  return (
    <div className="nav">
      <img src="/cor-logo.png" alt={"Cor Logo"} />
      <ul className="link-group">
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/mentor">Mentor</NavLink></li>
        <li><NavLink to="/mentee">Mentee</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar;