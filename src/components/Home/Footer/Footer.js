import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Facial Care" , link: "/facial"},
        {name: "Body Scrub" , link: "/scrub"},
        {name: "Hair Treatment" , link: "/treatment"},
        {name: "Body Massage" , link: "/body"},
        {name: "Hair Colour" , link: "/colour"}
    ]
    const ourAddress = [
        {name: "Dhaka - 2020 Banani" , link: "//google.com/map"},
        {name: "24/A" , link: "//google.com/map"},
       
    ]
    const services = [
        {name: "Facial Care" , link: "/facial"},
        {name: "Body Scrub" , link: "/scrub"},
        {name: "Hair Treatment" , link: "/treatment"},
        {name: "Body Massage" , link: "/body"},
        {name: "Hair Colour" , link: "/colour"}
    ]
    const specialty = [
        {name: "Facial Care" , link: "/facial"},
        {name: "Body Scrub" , link: "/scrub"},
        {name: "Hair Treatment" , link: "/treatment"},
        {name: "Body Massage" , link: "/body"},
        {name: "Hair Colour" , link: "/colour"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Quick Links"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Skin Health" menuItems={specialty}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+88016161616</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;