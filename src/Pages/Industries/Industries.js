import React from "react";
import AboutCard from "../../Components/About-Card/AboutCard";
import HeroSection from "../../Components/Hero-Section/HeroSection";
import BgImage1 from "../../Images/our-story-img.webp";
import BgImage2 from "../../Images/leadership-img.webp";
import HeroImage from "../../Images/industries-bg.webp";
import { motion } from "framer-motion";

import "./Industries.css";
const Industries = () => {
    return (
        <motion.main
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
            className="industries-main-section"
        >
            <HeroSection
                heroBgImage={HeroImage}
                title={"Our Mission"}
                desc={
                    " I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
                }
            />
            <section className="card-wrapper container">
                <AboutCard
                    title={"Experienced Leadership"}
                    direaction={"row-reverse"}
                    bgImg={BgImage2}
                    p1={
                        "​This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are."
                    }
                />
            </section>
        </motion.main>
    );
};

export default Industries;
