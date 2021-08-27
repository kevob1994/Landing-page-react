import React from "react";
import image1 from "./../../assets/images/image-5.jpg";
import image2 from "./../../assets/images/image-6.jpg";
import "./index.scss";

const Section4 = () => {
    return (
        <div className="content-section">
            <h3 className="title-2 center-title">You may also like</h3>
            <div className="content-grid">
                <div className="item">
                    <div className="content-img">
                        <img src={image1} alt="headphones" />
                    </div>
                    <p className="title-1 center-title">YX1</p>
                    <button className="btn-orange">SEE PRODUCT</button>
                </div>
                <div className="item">
                    <div className="content-img">
                        <img src={image1} alt="headphones" />
                    </div>
                    <p className="title-1 center-title">YX1</p>
                    <button className="btn-orange">SEE PRODUCT</button>
                </div>
                <div className="item">
                    <div className="content-img">
                        <img src={image1} alt="headphones" />
                    </div>
                    <p className="title-1 center-title">YX1</p>
                    <button className="btn-orange">SEE PRODUCT</button>
                </div>
            </div>

            <div className="content-grid2">
                <div className="item">
                    <div className="content-img">
                        <img src={image2} alt="headphones" />
                        <div className="footer-content">
                            <p className="footer-title">EARPHONES</p>
                            <p className="footer-shop">SHOP <span>&gt;</span></p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="content-img">
                        <img src={image2} alt="headphones" />
                        <div className="footer-content">
                            <p className="footer-title">EARPHONES</p>
                            <p className="footer-shop">SHOP <span>&gt;</span></p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="content-img">
                        <img src={image2} alt="headphones" />
                        <div className="footer-content">
                            <p className="footer-title">EARPHONES</p>
                            <p className="footer-shop">SHOP <span>&gt;</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;
