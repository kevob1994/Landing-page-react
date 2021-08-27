import React from "react";
import { GoThreeBars, GoX } from "react-icons/go";
import { RiShoppingCart2Line } from "react-icons/ri";
import "./index.scss";

const Header = () => {
    const [responsive, setClick] = React.useState(false);

    const handleClick = () => setClick(!responsive);
    const Close = () => setClick(false);

    return (
        <>
            <div
                className={responsive ? "background-container" : ""}
                onClick={() => Close()}
            />
            <nav className="navbar">
                <div className="nav-container">
                    <h2>
                        <a href="#">Audiophile</a>
                    </h2>

                    <ul className={responsive ? "nav-menu active" : "nav-menu"}>
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
					<div className="nav-cart">
						<RiShoppingCart2Line className="nav-cart"/>
					</div>
					
                    <div className="nav-icon" onClick={handleClick}>
						{responsive ? <GoX /> : <GoThreeBars />}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
