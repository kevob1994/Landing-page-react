import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import "./index.scss";

const Footer = () => {
    return (
        <div className="footer content-section">
            <div className="footer-content">
                <h2>Audiophile</h2>
                <ul>
                    <li className="nav-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Headphones</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Speakers</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Earphones</a>
                    </li>
                </ul>
            </div>
            <div className="footer-content">
                <p className="text-2">
                    Audiophile is an all in one stop to fulfill your audio
                    needs. We‘re a small team of music lovers and sound
                    specialists who are devoted to helping you get the most out
                    of personal audio. Come and visit our demo facility - we‘re
                    open 7 days a week.
                </p>
                <div className="content-icons">
                    <div className="icons"><AiOutlineFacebook /></div>
                    <div className="icons"><FiTwitter /></div>
                    <div className="icons"><FiInstagram /></div>
                </div>
            </div>
            <div className="footer-content">
                <p className="text-copyright">Copyright 2021. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
