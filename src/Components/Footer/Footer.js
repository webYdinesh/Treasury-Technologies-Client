import React from "react";
import { Link } from "react-router-dom";
import LinkedIn from "../../Images/Linkedin.webp";
import FaceBook from "../../Images/facebook.webp";
import Twitter from "../../Images/twitter.webp";
import CompanyLogo from "../../Images/company-logo.webp";
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="container footer">
            <div className="footer-section footer-section-one flex">
                <div className="footer-logo flex">
                    <img src={CompanyLogo} alt="Companylogo" />
                    <h4>Treasury Technologies</h4>
                </div>
                <h3>123-456-7890</h3>
                <a href="mailto:Info@mysite.com">Info@mysite.com</a>
                <h3>500 Terry Francois St</h3>
                <h3>San Francisco, CA 94158</h3>
            </div>
            <div className="footer-section footer-section-two flex">
                <nav className="footer-nav flex">
                    <Link to={"/industries"}>Industries</Link>
                    <Link to={"/services"}>Services</Link>
                    <Link to={"/vision"}>Vision</Link>
                    <Link to={"/about"}>About Us</Link>
                    <Link to={"/contact"}>Contact</Link>
                </nav>
            </div>

            <div className="footer-section footer-section-three flex">
                <div className="social-links">
                    <h3>Follow us On:</h3>
                    <div className="social-icons flex">
                        <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/"
                            target="_blank"
                        >
                            <img src={LinkedIn} alt="LinkedIn" />
                        </a>
                        <a
                            rel="noreferrer"
                            href="https://www.facebook.com/"
                            target="_blank"
                        >
                            <img src={FaceBook} alt="FaceBook" />
                        </a>
                        <a
                            rel="noreferrer"
                            href="https://twitter.com/"
                            target="_blank"
                        >
                            <img src={Twitter} alt="Twitter" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
