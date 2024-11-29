import Logo from '../assets/Alliance.png';
import './navbar.css';
// import { Link, } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-bar">
        <div className="logo">
            <img src={Logo} alt="LOGO" />
        </div>
        <div className="nav-contents">
            <ul className="nav-list">
                <li className="nav-item">Home</li>
                <li className="nav-item">Profile</li>
                <li className="nav-item">Events</li>
                <li className="nav-item">News</li>
            </ul>

        </div>
      
    </div>
  )
}

export default Navbar
