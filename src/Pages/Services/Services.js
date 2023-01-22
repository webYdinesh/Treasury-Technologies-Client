import React, { useEffect } from "react";
import AboutServiceCard from "../../Components/AboutPageCard/AboutServiceCard";
import AboutServiceCardData from "../../Components/AboutPageCard/AboutServiceCardData";
import HeroSection from "../../Components/Hero-Section/HeroSection";
import HeroImage from "../../Images/industries-bg.webp";
import { motion } from "framer-motion";

import "./Services.css";
const About = () => {
    const ScrollHandler = () => {
        const moveSpeed = window.scrollY / 20;
        document.querySelector(
            ".inner-about-overlay-image"
        ).style.backgroundPositionX = -150 + moveSpeed + "px";
    };
    useEffect(() => {
        window.addEventListener("scroll", ScrollHandler);
        return () => window.removeEventListener("scroll", ScrollHandler);
    }, []);
    return (
        <motion.main
            className="service-container"
            initial={{
                opacity: 0,
            }}
            transition={{
                delay: 0.2,
                type: "tween",
                stiffness: 100,
                duration: "1",
            }}
            whileInView={{ opacity: 1 }}
        >
            <HeroSection
                heroBgImage={HeroImage}
                title={"Dive into the New Age of Accelerated Development"}
                desc={"Our Services"}
                lineGap={1.2}
                lineHeight={3}
                fontWeight={500}
            />
            <section className="services-wrapper container">
                <div className="card-conatiner">
                    {AboutServiceCardData.map(({ icon, heading, text }, i) => {
                        return (
                            <AboutServiceCard
                                key={i}
                                icon={icon}
                                title={heading}
                                desc={text}
                            />
                        );
                    })}
                </div>
                <div className="services-card-wrapper">
                    <div className="inner-about-overlay-image flex">
                        <div className="inner-about-card-text ">
                            <h2>We Integrate With Your Ecosystem</h2>
                        </div>
                    </div>
                    <div className="inner-about-text-section flex">
                        <div className="inner-about-text">
                            <p>
                                Simply put, ecosystem integration is a strategy
                                that connects and integrates a company's key
                                revenue-generating business processes with those
                                of its ecosystem partners by combining B2B and
                                EDI, data and application integration, and
                                secure file transfer technologies into a single
                                software platform. It aids the development of
                                automated systems that can quickly react to
                                market disruptions. <br /> This modern approach
                                to multi-enterprise integration empowers
                                organizations to drive business outcomes and
                                value, such as faster partner or application
                                onboarding, business process optimization,
                                improved agility.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.main>
    );
};

export default About;
