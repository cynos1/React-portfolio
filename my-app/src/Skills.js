import React from 'react';
import { ProgressBar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './skills.css';

function Skills() {
    return (
        <section className="skill-section">
            <h2>Web Technologies</h2><br/>
             <ProgressBar  now="98" variant="success" animated striped label={`HTML - 98% `}/><br/>
             <ProgressBar now= "95" variant="success" animated striped label={`CSS - 95% `}/><br/>
             <ProgressBar now= "90" variant="success" animated striped label={`Javascript - 90% `}/><br/>
             <ProgressBar now= "95" variant="success" animated striped label={`ReactJS - 95% `}/><br/>
             <ProgressBar now= "80" variant="success" animated striped label={`Bootstrap - 80% `}/><br/>
             <ProgressBar now= "70" variant="success" animated striped label={`Jquery - 70% `}/>
        </section>
    )
    
        
    
}

export default Skills;
