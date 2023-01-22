import React from "react";
import AboutCard from "../../Components/About-Card/AboutCard";
import HeroSection from "../../Components/Hero-Section/HeroSection";
import BgImage2 from "../../Images/leadership-img.webp";
import HeroImage from "../../Images/industries-bg.webp";
import { motion } from "framer-motion";
import "./Vision.css";
const Vision = () => {
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
            className="vision-main-section"
        >
            <HeroSection
                heroBgImage={HeroImage}
                title={"Our Mission"}
                desc={
                    " I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
                }
            />
            <section className="card-wrapper container">
                {/* <AboutCard
                    title={"Our Story"}
                    marginTop={"-104px"}
                    bgImg={BgImage1}
                    p1={
                        "Integrity- We uphold the highest professional and ethical standards and place a premium on transparency and honesty in our communications, relationships, and actions."
                    }
                /> */}
                <div className="story-card-component  flex">
                    <div
                        id="triggerScroll"
                        className="card-component-img-overlay flex"
                    >
                        <div className="card-text">
                            <h2>Our Story</h2>
                        </div>
                    </div>
                    <div className="card-component-text-side flex">
                        <div className="card-text flex">
                            <p>
                                <strong>Integrity</strong> - We uphold the
                                highest professional and ethical standards and
                                place a premium on transparency and honesty in
                                our communications, relationships, and actions.
                            </p>
                            <p>
                                <strong>Accountability</strong> - We are
                                responsible for the quality and long-term impact
                                of our work, as well as the commitments we make
                                to our participants, partners, donors, and one
                                another.
                            </p>
                            <p>
                                <strong>Respect</strong> - Everyone's unique
                                talents, experience, and perspective are valued
                                and celebrated, and we treat our participants,
                                partners, donors, and each other with compassion
                                and respect.
                            </p>
                            <p>
                                <strong>Creativity</strong> - We go beyond
                                traditional concepts and practices in order to
                                foster new possibilities and creativity,
                                resulting in actual and enduring beneficial
                                change.
                            </p>
                        </div>
                    </div>
                </div>
                <AboutCard
                    title={"Experienced Leadership"}
                    direaction={"row-reverse"}
                    p1={
                        "From my point of view , Leadership has more to it than I can possibly imagine. I define leadership as the art of enabling a group of people get to a specific destination. As a leader your main focus was to enable your followers lead themselves. As i think deeper i realise a person cannot choose to be a leader. I think a lot of the time people take on leadership positions without knowing. For example The role of leading your siblings because you are the first child is not by choice you just become a leader in that situation by birth. Although someone might argue that for some leadership positions a person has to choose to run for that position. I think this perception only applies to big leadership positions which constitute a minimal number of leadership positions."
                    }
                    bgImg={BgImage2}
                />
            </section>
        </motion.main>
    );
};

export default Vision;
