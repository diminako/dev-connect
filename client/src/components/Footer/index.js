import React from "react";
import "./style.css";
import ImagePH from "./FooterAssets/ImagePH.png";



function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-holder">
                    <div className="footerTitle"> Useful Links</div>
                    <div className="footer-content">
                        <div className="footer-section">
                            <p><a href="https://www.google.com/"><img
                                className="logo enlarge" src={ImagePH}
                                alt={"PLACEHOLDER"} />
                            </a>
                            </p>
                        </div>
                        <div className="footer-section">
                            <p><a href="https://www.google.com/"><img
                                className="logo enlarge" src={ImagePH}
                                alt={"PLACEHOLDER"} />
                            </a>
                            </p>
                        </div>
                        <div className="footer-section">

                            <p><a href="https://www.google.com/"><img
                                className="logo enlarge" src={ImagePH}
                                alt={"PLACEHOLDER"} />
                            </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    Group 3 Final Project
             </div>
            </div>
        </div>

    );
}

export default Footer;