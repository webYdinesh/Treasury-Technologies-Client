import React, { useEffect } from "react";
import AboutServiceCard from "../../Components/AboutPageCard/AboutServiceCard";
import ourTeamData from "../../Components/AboutPageCard/OurTeamData";
import HeroSection from "../../Components/Hero-Section/HeroSection";
import HeroImage from "../../Images/industries-bg.webp";
import { motion } from "framer-motion";

import "./About.css";
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
            className="about-container"
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
                title={"Dive Into the New Age of Accelerated Analytics"}
                desc={"Our Team"}
                lineGap={1.2}
                lineHeight={3}
                fontWeight={500}
            />
            <section className="services-wrapper container">
                <div className="card-conatiner">
                    {ourTeamData.map(({ icon, heading, text }, i) => {
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
                <div className="about-card-wrapper">
                    <div className="inner-about-overlay-image flex">
                        <div className="inner-about-card-text ">
                            <h2>We Integrate With Your Ecosystem</h2>
                        </div>
                    </div>
                    <div className="inner-about-text-section flex">
                        <div className="inner-about-text">
                            <p>
                                At TT, we are a collection of highly motivated,
                                goal-oriented experts. Our professional team is
                                made up of experts with extensive and verified
                                experience in a wide range of business
                                development and automation. We guarantee our
                                team's honesty and dedication to the client and
                                their project. Our dedicated team strives to
                                give the best possible results for our clients.
                                Success from "End" to "End", TT provides
                                advisory services to men and women in business
                                in the Middle East, as well as individuals, and
                                guide them step by step to success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.main>
    );
};

export default About;
