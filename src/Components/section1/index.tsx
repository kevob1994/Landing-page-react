import React from "react";
import imgSection1 from "./../../assets/images/image-1.jpg";
import "./index.scss";

const Section1 = () => {
    return (
        <div className="content-section">
            <div className="elements">
                <div className="content-image">
                    <img src={imgSection1} alt="headphones" />
                </div>
                <div className="content-text">
                    <p className="text-1">New product</p>
                    <h2 className="title-1">XX99 mark ii headphones</h2>
                    <p className="text-2">
                        The new XX99 Mark II headphones is the pinnacle of
                        pristine audio. If redifines your premium headphone
                        experience by reproducing the balanced depth and
                        precision of studio-quality sound.
                    </p>
                    <p className="text-3">$2,999</p>
                    <div className="content-btn">
                        <div className="count-segment">
                            <button>+</button>
                            <p>1</p>
                            <button>-</button>
                        </div>
                        <button className="btn-orange">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
