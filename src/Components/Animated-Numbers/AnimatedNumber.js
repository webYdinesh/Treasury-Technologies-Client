import React from "react";
import { motion } from "framer-motion";
import "./AnimatedNumber.css";
const AnimatedNumber = ({ number, text }) => {
    return (
        <motion.div
            className="animated-number-container flex"
            initial={{
                x: -50,
                opacity: 0,
            }}
            transition={{
                delay: 0.4,
                type: "tween",
                stiffness: 100,
                duration: ".6",
            }}
            whileInView={{ x: 0, opacity: 1 }}
        >
            <h4>{number}</h4>
            <span>{text}</span>
            <div className="border-line"></div>
        </motion.div>
    );
};

export default AnimatedNumber;
