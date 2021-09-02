
// Resources
// import logo from './logo.svg';
import './Footer.css';
import { ReactComponent as SvgFacebook } from "../../static/images/facebook-f-brands.svg";
import { ReactComponent as SvgInstagram } from "../../static/images/instagram-brands.svg";
import { ReactComponent as SvgTwitter } from "../../static/images/twitter-brands.svg";
import { Link } from 'react-router-dom';

// Components

function Footer() {
  return (
    <footer className="Footer">

        

        

        <ul className="Footer-social">
            <li>
                <a href="https://www.facebook.com/" title="Facebook" target="_blank" rel="noreferrer">
                    <SvgFacebook width="25" height="25" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/" title="Instagram" target="_blank" rel="noreferrer">
                    <SvgInstagram width="25" height="25" />
                </a>
            </li>
            <li>
                <a href="https://www.twitter.com/" title="Twitter" target="_blank" rel="noreferrer">
                    <SvgTwitter width="25" height="25" />
                </a>
            </li>
           <li><Link to="/accessibility">Accessbility</Link></li>

        </ul>

        
        
        <p className="copyright"><small>Copyright 2021 Green Team</small></p>
      

    </footer>
  );
}

export default Footer;
