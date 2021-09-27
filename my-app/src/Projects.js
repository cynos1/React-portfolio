import React, {useState} from 'react';
import data from './projects.json';
import './projects.css';

function Projects() {
    const [proj] = useState(data);
    return (
        <section className="project-section">
            <div>
                {proj.map((x, id)=> {
                    return(
                        <div key={id}>
                            <a href={x.link} key={x.image} className="link">
                                <h1>{x.title}</h1>
                                <img alt={x.title} src={x.image} className="img2" width="400px"/>
                            </a>
                            
                            <p>{x.subtitle}</p>
                            <p>{x.description}</p><hr/><br/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;
