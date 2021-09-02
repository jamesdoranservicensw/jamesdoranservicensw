
// Resources
import { Link } from 'react-router-dom';
import logo from '../../static/images/servicensw-logo.png';
import './Header.css';




// Components

function Header() {
  return (
    <header className="Header">

        <Link to="/" className="Header-logo">
            <img src={logo} alt="Service NSW logo" width="180" height="70"></img>
        </Link>

        

        <nav className="Header-nav">
            <ul>
                
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/application">Application</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="dot"></div>
        </nav>
      

    </header>
  );
}

export default Header;
