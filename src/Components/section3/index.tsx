import React from "react";
import image1 from "./../../assets/images/image-2.jpg";
import image2 from "./../../assets/images/image-3.jpg";
import image3 from "./../../assets/images/image-4.jpg";
import "./index.scss";

const Section3 = () => {
    return (
        <div className="content-section">
            <div className="grid">
                <div className="item">
                    <img src={image1} alt="headphones" />
                </div>
                <div className="item">
                    <img src={image2} alt="headphones" />
                </div>
                <div className="item">
                    <img src={image3} alt="headphones" />
                </div>
            </div>
        </div>
    );
};

export default Section3;
