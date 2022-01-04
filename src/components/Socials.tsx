import React from 'react'
import './Socials.css'

function Socials() {
    return (
            <div className="social-container">
                <ul className="social-icons">
                    <li><a href="https://www.instagram.com/mario_ruii/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com/paiigrande" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/mario-rui/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/mariorui97" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
                </ul>                
                <ul className="social-icons" id="cv">
                        <li><a href="../marioResume.pdf" download="marioResume"><i className="far fa-address-card" id="cv-icon"></i></a></li>
                </ul>
                

            </div>        
    )
}

export default Socials
