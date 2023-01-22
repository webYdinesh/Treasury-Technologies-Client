import React, { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "./ScrollTop.css";
const ScrollTop = () => {
    const [scrollButton, setScrollButton] = useState(false);
    const ScrollHandler = () => {
        if (window.scrollY > 300) {
            setScrollButton(true);
        } else {
            setScrollButton(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", ScrollHandler);
    }, []);
    const onTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    return (
        <>
            {scrollButton && (
                <div className="scroll-to-top">
                    <BsFillArrowUpCircleFill
                        z={100}
                        onClick={onTop}
                        fill="#899ce4"
                        color={"red"}
                        size={50}
                    />
                </div>
            )}
        </>
    );
};

export default ScrollTop;
