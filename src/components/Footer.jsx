import { FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-column">
                    <h2 className="footer-logo">
                         <Link to="/">
                          <img src="/oxbow.png" alt="oxbow"/>
                         </Link> 
                    </h2>
                

                    <div className="social-icons">
                     <a href="https://www.instagram.com/oxbow_creation/">
                     <FaInstagram/>
                     </a>
                     
                     <FaWhatsapp />
                     <FaFacebook />
                 
                    </div>
              </div>

            <div className="footer-column">
                <h3>Shop</h3>
                <ul className="footer-links">
                    <li><Link to ="/category/sarees">Sarees</Link></li>
                    <li><Link to ="/category/anarkali">Anarkali</Link></li>
                    <li><Link to ="/category/kurtis">Kurtis</Link></li> 
                    <li><Link to ="/category/salwar-suits">Salwar-Suits</Link></li>                                
                </ul>
            </div>

            <div className="footer-column">
                <h3>Support</h3>
            <ul>
                <li>Contact Us</li>
                <li>Size Guide</li>
                <li>FAQ</li>
            </ul>
            </div>

            <div className="footer-column">
                <h3>Company</h3>
                <ul>
                    <li>About Us</li>
                        <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>

         </div>

<hr />          
            <div className="footer-bottom">

      
                 © 2026 Oxbow. All rights reserved.
            </div>

            </footer>
    )
}

export default Footer;
