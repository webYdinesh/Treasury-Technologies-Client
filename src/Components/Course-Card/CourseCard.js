import React from "react";
import "./CourseCard.css";
const CourseCard = ({ title, duration, price, image }) => {
    return (
        <div className="course-card">
            <img src={image} alt="courses" />
            <div className="course-details flex">
                <h5>{title}</h5>
                <p>{duration}</p>
                <div className="border-line"></div>
                <strong>{price}</strong>
                <button>Join</button>
            </div>
        </div>
    );
};

export default CourseCard;
