import React from "react";
import { motion } from "framer-motion";
import "./AboutServiceCard.css";
const AboutServiceCard = ({ title, desc, icon }) => {
    return (
        <div className="about-service-card-container ">
            <div className="inner-about-service-left flex">
                <motion.div
                    className="inner-icon-wrapper flex"
                    initial={{
                        y: 50,
                        opacity: 0,
                    }}
                    transition={{
                        delay: 0.2,
                        type: "tween",
                        stiffness: 100,
                        duration: ".6",
                    }}
                    whileInView={{ y: 0, opacity: 1 }}
                >
                    {icon}
                    <div className="icon-bottom-line"></div>
                </motion.div>
            </div>
            <div className="inner-text-wrapper flex">
                <motion.h3
                    initial={{
                        x: -50,
                        opacity: 0,
                    }}
                    transition={{
                        delay: 0.2,
                        type: "tween",
                        stiffness: 100,
                        duration: ".6",
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                >
                    {title}
                </motion.h3>
                <motion.p
                    initial={{
                        x: -50,
                        opacity: 0,
                    }}
                    transition={{
                        delay: 0.2,
                        type: "tween",
                        stiffness: 100,
                        duration: ".6",
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                >
                    {desc}
                </motion.p>
            </div>
        </div>
    );
};

export default AboutServiceCard;
