import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./Spinner.css";
const Spinner = () => {
    return (
        <div className="sweet-loading flex">
            <ClipLoader
                color="#899ce4"
                cssOverride={{
                    borderWidth: "5px",
                }}
            />
        </div>
    );
};

export default Spinner;
