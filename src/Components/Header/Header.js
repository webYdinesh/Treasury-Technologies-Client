import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CompanyLogo from "../../Images/company-logo.webp";
import ResponsiveNavbar from "../Responsive-Navbar/ResponsiveNavbar";
import "./Header.css";
const Header = () => {
    //Navigate
    const history = useNavigate();
    //Toogle Navbar
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        if (isActive) {
            document.body.style.height = "100vh";
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.width = "auto";
            document.body.style.overflow = "visible";
        };
    }, [isActive]);

    //to fix header
    const fixedNavbarHandler = () => {
        if (window.scrollY >= 150) {
            document.querySelector(".header").classList.add("fixed-nav");
        } else {
            document.querySelector(".header").classList.remove("fixed-nav");
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", fixedNavbarHandler);

        return () => {
            window.removeEventListener("scroll", fixedNavbarHandler);
        };
    });

    return (
        <header className="header" id="#header">
            <div className="wrapper-content flex">
                <div className="company-logo flex">
                    <Link
                        onClick={() => {
                            setIsActive(false);
                        }}
                        to={"/"}
                        className={"logo flex"}
                    >
                        <img
                            width="55px"
                            height="26px"
                            src={CompanyLogo}
                            alt="Companylogo"
                        />
                        <h4>Treasury Technologies</h4>
                    </Link>
                </div>
                <nav>
                    <ul className="flex nav-contents">
                        <li>
                            <NavLink to={"/industries"}>Industries</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/services"}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/vision"}>Vision</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>About Us</NavLink>{" "}
                        </li>
                        <li>
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                <div
                    className={`menu flex ${isActive ? "isActive" : ""}`}
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                >
                    <div className="bars"></div>
                    <div className="bars"></div>
                    <div className="bars"></div>
                </div>
            </div>
            {isActive && (
                <ResponsiveNavbar
                    m={isActive}
                    goToPage={() => {
                        setIsActive(false);
                        history("/contact");
                    }}
                />
            )}
        </header>
    );
};

export default Header;
