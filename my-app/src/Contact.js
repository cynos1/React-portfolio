import React from 'react';
import './contact.css';
import {FaPhone, FaMailBulk} from 'react-icons/fa';
function Contact() {
    return (
        <div className="contact-section">
            <h3>GET IN TOUCH</h3>
            <em><FaMailBulk/> Email: cynthianosiri8@gmail.com</em>
            <p><FaPhone/> CellPhone: 443-540-7568</p>

        </div>
    )
}

export default Contact
