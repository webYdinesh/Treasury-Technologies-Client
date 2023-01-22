import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./ResponsiveNavbar.css";
const ResponsiveNavbar = ({ goToPage }) => {
    return (
        <motion.div
            className="mobile-nav-container "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="navbar flex">
                <ul className="nav-items flex">
                    <li>
                        <NavLink onClick={goToPage} to={"/industries"}>
                            Industries
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={goToPage} to={"/services"}>
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={goToPage} to={"/vision"}>
                            Vision
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={goToPage} to={"/about"}>
                            About Us
                        </NavLink>{" "}
                    </li>

                    <li>
                        <NavLink onClick={goToPage} to={"/contact"}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </motion.div>
    );
};

export default ResponsiveNavbar;
