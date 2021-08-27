import React from "react";
import imgSection5 from "./../../assets/images/image-2.jpg";
import "./index.scss";

const Section5 = () => {
    return (
        <div className="content-section">
            <div className="elements">
                <div className="content-text">
                    <h2 className="title-3">
                        BRINGING YOU THE <span>BEST</span> AUDIO GEAR
                    </h2>
                    <p className="text-2">
                        Located at the heart of New York City, Audiophile is the
                        premier store for high end headphones, earphones,
                        speakers, and audio accessories. We have a large
                        showroom and luxury demonstration rooms available for
                        you to browse and experience a wide range of our
                        products. Stop by our store to meet some of the
                        fantastic people who make Audiophile the best place to
                        buy your portable audio equipment.
                    </p>
                </div>
                <div className="content-image">
                    <img src={imgSection5} alt="headphones" />
                </div>
            </div>
        </div>
    );
};

export default Section5;
