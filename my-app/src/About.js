import React from 'react'
import {FaGithub} from 'react-icons/fa';
import './about.css';
import cynthia from "./images/cynthia.jpg";
function About() {
    return (
        <div className="body">
        <section className="profile-card">
            <div className="header1">
                <img src={cynthia} alt="cynthia" width="150px" height="200px" className="img"/>
                <h3 className="team-content">Cynthia Nosiri</h3>
                <h4>Web Developer</h4>
            </div>
           
            <div className="profile-bio">
                <p>I'm a recent graduate at Morgan State University with a Bachelor's degree in Electrical and Computer Engineering. 
                    My passion for Front-end web developement began during my sophomore year in college when i realized that i was 
                    more fascinated about the software part of my major compared to working with wires, resistors and circuits.
                    My School didn't offer sufficient web developement classes for my major, so I started learning and practicing by myself.
                    I am passionate about creating responsive and dynamic user experiences.
                </p>
            </div>
            <ul className="social">
                <a target="new" href="https://github.com/cynos1">
                <li className="logo"><FaGithub/></li>
                </a>
                
            </ul>
        
        </section>
        </div>
    )
}

export default About

