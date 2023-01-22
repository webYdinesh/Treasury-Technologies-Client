import React, { useEffect } from "react";
import "./HeroSection.css";
const HeroSection = ({
    heroBgImage,
    title,
    desc,
    lineHeight,
    lineGap,
    fontWeight,
}) => {
    const customizeBgImg = {
        background: `url("${heroBgImage}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
    };
    const customizePTag = {
        lineHeight,
        fontWeight,
    };
    const customizeHeading = {
        lineHeight: lineGap,
    };

    // Parallex Scroll
    const ScrollHandler = () => {
        if (window.screen.availWidth > 850) {
            const zoomSpeed = window.scrollY / 15;
            const initialSize = 100;
            document.querySelector(
                ".component-hero-section"
            ).style.backgroundSize = initialSize + zoomSpeed + "%";
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", ScrollHandler);
        return () => window.removeEventListener("scroll", ScrollHandler);
    }, []);

    return (
        <section style={customizeBgImg} className="component-hero-section flex">
            <div className="component-hero-section-text container">
                <h1 style={customizeHeading}>{title}</h1>
                <p style={customizePTag}>{desc}</p>
            </div>
        </section>
    );
};

export default HeroSection;
