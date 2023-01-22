import React from "react";
import { motion } from "framer-motion";

import "./ServiceCard.css";
const ServiceCard = ({ cardTitle, cardDesc, cardIcon }) => {
    return (
        <div className="service-card-container">
            <motion.div
                className="service-card-inner flex"
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
                {cardIcon}
                <motion.div className="service-card-text flex">
                    <motion.h3>{cardTitle}</motion.h3>
                    <motion.p>{cardDesc}</motion.p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ServiceCard;
