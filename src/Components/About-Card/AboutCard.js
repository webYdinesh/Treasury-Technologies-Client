import React, { useEffect } from "react";
import "./AboutCard.css";
const AboutCard = ({ direaction, title, marginTop, bgImg, p1, p2, p3, p4 }) => {
    const customBg = {
        backgroundImage: `url("${bgImg}")`,
    };
    const customizeCard = {
        flexDirection: direaction,
        marginTop,
    };

    const HandleBgOnScroll = () => {
        const parallexImages = document.querySelectorAll("#triggerScroll");
        parallexImages.forEach((image) => {
            if (window.screen.availWidth > 850) {
                const moveSpeed = window.scrollY / 20;
                image.style.backgroundPositionX = -130 + moveSpeed + "px";
            }
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", HandleBgOnScroll);
        return () => window.removeEventListener("scroll", HandleBgOnScroll);
    }, []);

    return (
        <div style={customizeCard} className="inner-card-component  flex">
            <div
                id="triggerScroll"
                style={customBg}
                className="card-component-img-overlay flex"
            >
                <div className="card-text">
                    <h2>{title}</h2>
                </div>
            </div>
            <div className="card-component-text-side flex">
                <div className="card-text flex">
                    <p>{p1}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;
