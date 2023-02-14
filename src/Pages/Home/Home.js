import React, { useEffect } from "react";
import AnimatedNumber from "../../Components/Animated-Numbers/AnimatedNumber";
import { OrangeThemeBtn } from "../../Components/Buttons/Button";
import ServiceCard from "../../Components/Service-Card/ServiceCard";
import { Data1, Data2 } from "../../Components/Service-Card/ServiceCardData";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {
    //Navigation Of Button
    const history = useNavigate();

    // Parallex - Position
    const parallexPosition = (target) => {
        if (window.screen.availWidth > 850) {
            const moveSpeed = window.scrollY / 50;
            document.querySelector(target).style.backgroundPositionX =
                -70 + moveSpeed + "px";
        }
    };
    //ParallexHandle- Zoom
    const ScrollHandler = () => {
        const zoomSpeed = window.scrollY / 15;
        if (window.screen.availWidth > 850) {
            let initialSize = 150;
            document.querySelector(".hero-section").style.backgroundSize =
                initialSize + zoomSpeed + "%";
        }

        //ParallexHandle - Position
        const moveSpeed = window.scrollY / 40;
        document.querySelector(".overlay-bg").style.backgroundPositionX =
            100 + moveSpeed + "rem";

        parallexPosition("#serviceBg");
        parallexPosition("#overlay-img");
    };
    useEffect(() => {
        window.addEventListener("scroll", ScrollHandler);
        return () => window.removeEventListener("scroll", ScrollHandler);
    });

    // Motion Controller

    return (
        <motion.main
            initial={{
                opacity: 0,
            }}
            transition={{
                delay: 0.1,
                type: "tween",
                stiffness: 100,
                duration: ".5",
            }}
            whileInView={{ opacity: 1 }}
        >
            {/* Hero Section */}
            <section className="container hero-section  flex">
                <div className="hero-text flex">
                    <motion.h1
                        initial={{ x: -50, opacity: 0 }}
                        transition={{
                            delay: 0.3,
                            type: "tween",
                            stiffness: 100,
                            duration: ".7",
                        }}
                        animate={{ x: 0, opacity: 1 }}
                    >
                        SharePoint Consulting,
                        <br /> Business Solutions
                    </motion.h1>
                    <motion.p
                        initial={{ x: -50, opacity: 0 }}
                        transition={{
                            delay: 0.5,
                            type: "tween",
                            stiffness: 100,
                            duration: ".9",
                        }}
                        animate={{ x: 0, opacity: 1 }}
                    >
                        Cut down your complexities with our <br /> simplified
                        solutions
                    </motion.p>
                    <OrangeThemeBtn
                        title={"Get Started"}
                        onClick={() => history("/contact")}
                        delay={0.3}
                    />
                </div>
            </section>
            {/* ---------------------------------------------------- */}
            {/* ---------------------------------------------------- */}
            {/* Service Section */}
            <section className="service-section-primary ">
                <div className="floating-container container">
                    <div
                        id="serviceBg"
                        className="left-side-floating-container flex"
                    >
                        <div className="left-side-text flex ">
                            <motion.h2
                                initial={{
                                    x: -50,
                                    opacity: 0,
                                }}
                                transition={{
                                    delay: 0.4,
                                    type: "tween",
                                    stiffness: 100,
                                    duration: "1",
                                }}
                                whileInView={{ x: 0, opacity: 1 }}
                            >
                                Let Your Data Take Your Business to Higher
                                Grounds
                            </motion.h2>
                            <motion.p
                                initial={{ x: -50, opacity: 0 }}
                                transition={{
                                    delay: 0.4,
                                    type: "tween",
                                    stiffness: 100,
                                    duration: "1",
                                }}
                                whileInView={{ x: 0, opacity: 1 }}
                            >
                                Do you want to accomplish a goal but don't know
                                where to start? Allow us to assist you. Check
                                out the list of services below and get in touch
                                with us if you have any queries or specific
                                requests start? Allow us to assist you. Check
                                out the list of services below and get in touch
                                with us if you have any queries or specific
                                requests
                            </motion.p>
                        </div>
                    </div>
                    <div className="right-side-floating-container flex">
                        <div className="card-container flex">
                            <div className="primary-card-container">
                                {Data1.map((ele, i) => {
                                    return (
                                        <ServiceCard
                                            key={i}
                                            cardTitle={ele.title}
                                            cardDesc={ele.desc}
                                            cardIcon={ele.icon}
                                        />
                                    );
                                })}
                            </div>
                            <div className="secondary-card-container">
                                {Data2.map((ele, i) => {
                                    return (
                                        <ServiceCard
                                            key={i}
                                            cardTitle={ele.title}
                                            cardDesc={ele.desc}
                                            cardIcon={ele.icon}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------------------------------------------- */}
            {/* ---------------------------------------------------- */}
            {/* Service Section 2 */}
            <section className="servic-section-secondary container">
                <div className="grid-container">
                    <div
                        id="overlay-img"
                        className="left-image-overlay-section flex"
                    >
                        <div className="overlay-text">
                            <motion.h2
                                initial={{
                                    y: 50,
                                    opacity: 0,
                                }}
                                transition={{
                                    delay: 0.3,
                                    type: "tween",
                                    stiffness: 100,
                                    duration: ".4",
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                }}
                            >
                                Unprecedented Velocity. Impeccable Reliability.
                            </motion.h2>
                        </div>
                    </div>
                    <div className="right-text-section flex">
                        <div className="inner-text flex">
                            <motion.p
                                initial={{ x: -50, opacity: 0 }}
                                transition={{
                                    delay: 0.5,
                                    type: "tween",
                                    stiffness: 100,
                                    duration: ".6",
                                }}
                                whileInView={{ x: 0, opacity: 1 }}
                            >
                                We have the expertise and experience to meet and
                                surpass your expectations, and we provide a wide
                                range of services that can be tailored to your
                                individual requirements. Find out more about the
                                improvements we can help you make and get in
                                touch with us right now. Do you have a go All
                                you want to accomplish but don't know where to
                                start? Allow me to lead you. Check out our list
                                of services and get in touch with us if you have
                                any queries or specific requirements.
                            </motion.p>

                            <OrangeThemeBtn
                                delay={0.5}
                                title={"Learn More"}
                                onClick={() => history("/vision")}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------------------------------------------- */}
            {/* ---------------------------------------------------- */}
            {/* Clients Section */}
            <section className="client-section">
                <div className="inner-client-section container flex">
                    <div className="inner-text">
                        <h2>We Take Pride in Our Numbers</h2>
                    </div>
                    <div className="animated-container flex">
                        <AnimatedNumber
                            number={4}
                            text={"Years of Experience"}
                        />
                        <AnimatedNumber number={4} text={"Business Partners"} />
                        <AnimatedNumber
                            number={200}
                            text={"Products Installed"}
                        />
                        <AnimatedNumber
                            number={6}
                            text={"Countries World Wide"}
                        />
                        <AnimatedNumber number={5} text={"Industry Awards"} />
                    </div>
                </div>
                <div className="overlay-bg"></div>
            </section>
            {/* ---------------------------------------------------- */}
            {/* ---------------------------------------------------- */}
            {/* Partners Section */}
            <section className="partner-section container">
                <div className="inner-partner-section">
                    {/* <div className="showcase-partner ">
                        <div className="partner-title flex">
                            <motion.h2
                                initial={{
                                    x: -50,
                                    opacity: 0,
                                }}
                                transition={{
                                    delay: 0.4,
                                    type: "tween",
                                    stiffness: 100,
                                    duration: "1",
                                }}
                                whileInView={{ x: 0, opacity: 1 }}
                            >
                                Our <br /> Partners
                            </motion.h2>
                        </div>
                        <motion.div
                            initial={{
                                x: -50,
                                opacity: 0,
                            }}
                            transition={{
                                delay: 0.4,
                                type: "tween",
                                stiffness: 100,
                                duration: "1",
                            }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="partner-one-img partner"
                        ></motion.div>
                        <motion.div
                            initial={{
                                x: -50,
                                opacity: 0,
                            }}
                            transition={{
                                delay: 0.4,
                                type: "tween",
                                stiffness: 100,
                                duration: "1",
                            }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="partner-two-img partner"
                        ></motion.div>
                        <motion.div
                            initial={{
                                x: -50,
                                opacity: 0,
                            }}
                            transition={{
                                delay: 0.4,
                                type: "tween",
                                stiffness: 100,
                                duration: "1",
                            }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="partner-three-img partner"
                        ></motion.div>
                        <motion.div
                            initial={{
                                x: -50,
                                opacity: 0,
                            }}
                            transition={{
                                delay: 0.4,
                                type: "tween",
                                stiffness: 100,
                                duration: "1",
                            }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="partner-four-img partner"
                        ></motion.div>
                    </div> */}
                    <div className="partner-grid-container">
                        <div className="partner-left-section">
                            <div className="partner-image-overlay-section flex">
                                <div className="image-overlay-text">
                                    <motion.h2
                                        initial={{
                                            y: 50,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            delay: 0.4,
                                            type: "tween",
                                            stiffness: 100,
                                            duration: ".6",
                                        }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                    >
                                        Are You Ready to Accelerate Your
                                        Business?
                                    </motion.h2>
                                </div>
                            </div>
                        </div>
                        <div className="partner-right-section flex">
                            <div className="partner-right-text flex">
                                <motion.p
                                    initial={{
                                        x: -50,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        delay: 0.4,
                                        type: "tween",
                                        stiffness: 100,
                                        duration: ".8",
                                    }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                >
                                    My role is to lead you down the path to
                                    success, from making personal decisions to
                                    achieving crucial milestones. Our passion to
                                    perfection drives us to go above and beyond
                                    to ensure that our clients are completely
                                    satisfied with our work. As a competent
                                    Business Management Consultant, We believe
                                    in keeping a positive attitude, forming
                                    strategic alliances, and continually aiming
                                    for major results. Contact us today to
                                    schedule an initial consultation and learn
                                    more about how we can customize our services
                                    to meet your needs.
                                </motion.p>
                                <OrangeThemeBtn
                                    delay={0.6}
                                    title={"Get Started"}
                                    onClick={() => history("#header")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.main>
    );
};

export default Home;
