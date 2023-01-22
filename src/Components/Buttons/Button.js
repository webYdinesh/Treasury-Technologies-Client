import React from "react";
import "./Button.css";
import { motion } from "framer-motion";
const OrangeThemeBtn = ({ title, onClick }) => {
    const varients = {
        initial: {
            x: -100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <motion.div
            variants={varients}
            initial="initial"
            transition={{
                delay: 1.2,
                type: "tween",
                duration: "1",
            }}
            animate="animate"
        >
            <button className="customButton" onClick={onClick}>
                {title}
            </button>
        </motion.div>
    );
};

export { OrangeThemeBtn };
