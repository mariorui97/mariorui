import React from 'react'
import './Socials.css'

function Socials() {
    return (
            <div className="social-container">
                <ul className="social-icons">
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fab fa-github"></i></a></li>
                </ul>                
                <ul className="social-icons" id="cv">
                        <li><a href="#"><i className="far fa-address-card" id="cv-icon"></i></a></li>
                </ul>
                

            </div>        
    )
}

export default Socials
