import React from "react";

const CloudIcon = ({ color }) => {
    return (
        <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="19.868 38.586 160.264 121.194"
            viewBox="19.868 38.586 160.264 121.194"
            height="34"
            width="46"
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="presentation"
            aria-hidden="true"
            aria-labelledby="svgcid-1yzkci-8bgi96"
        >
            <defs>
                <style>
                    #comp-kk2skte2 svg [data-color="1"] fill:
                    {color ? color : "#FD6262"};
                </style>
            </defs>
            <title id="svgcid-1yzkci-8bgi96"></title>
            <g>
                <path
                    d="M149.73 83.547c-2.538-25.284-24.211-44.961-49.73-44.961S52.808 58.263 50.269 83.547c-17.67 3.837-30.401 19.54-30.401 37.674 0 21.261 17.297 38.559 38.559 38.559h83.146c21.261 0 38.559-17.297 38.559-38.559 0-18.135-12.732-33.838-30.402-37.674zm-8.157 64.423H58.427a26.755 26.755 0 0 1-16.198-5.482l21.237-21.114 13.181 13.19 36.505-35.875 8.081 8.047 6.076-30.357-30.353 6.177 8.281 8.243-28.512 28.025-13.236-13.239-28.56 28.399a26.646 26.646 0 0 1-3.252-12.763c0-13.887 10.85-25.598 24.701-26.661l5.452-.419v-5.488l-.003-.16C61.868 67.486 78.992 50.395 100 50.395c21.047 0 38.171 17.078 38.172 38.069l-.004 5.677 5.453.419c13.851 1.063 24.701 12.774 24.701 26.661 0 14.749-11.999 26.749-26.749 26.749z"
                    fill={color ? color : "#FD6262"}
                    data-color="1"
                ></path>
            </g>
        </svg>
    );
};

export default CloudIcon;
