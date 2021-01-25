import React from "react";
import "./style.css";
import ImagePH from "./FooterAssets/ImagePH.png";



function Footer() {
    return (
        // <div><span className="footer">
        //     <a href="https://www.google.com/"><img
        //         className="logo enlarge" src={ImagePH}
        //         alt={"PLACEHOLDER"} />
        //     </a></span>
        //     <span className="footer">
        //         <a href="https://www.google.com/"><img
        //             className="logo enlarge" src={ImagePH}
        //             alt={"PLACEHOLDER"} />
        //         </a></span>
        //     <span className="footer">
        //         <a href="https://www.google.com/"><img
        //             className="logo enlarge" src={ImagePH}
        //             alt={"PLACEHOLDER"} />
        //         </a></span>

        // </div>






        /////////////////////////////RANDY'S/////////////////////////////////
        <div className="footer">
            <div className="footer-holder">
                <div className="footerTitle"> Useful Links</div>
                <div className="footer-content">
                    <div className="footer-section">
                        <a href="https://www.google.com/"><img
                            className="logo enlarge" src={ImagePH}
                            alt={"PLACEHOLDER"} />
                        </a>

                    </div>
                    <div className="footer-section">
                        <a href="https://www.google.com/"><img
                            className="logo enlarge" src={ImagePH}
                            alt={"PLACEHOLDER"} />
                        </a>

                    </div>
                    <div className="footer-section">

                        <a href="https://www.google.com/"><img
                            className="logo enlarge" src={ImagePH}
                            alt={"PLACEHOLDER"} />
                        </a>

                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                Group 3 Final Project
            </div>
        </div>

    );
}

export default Footer;