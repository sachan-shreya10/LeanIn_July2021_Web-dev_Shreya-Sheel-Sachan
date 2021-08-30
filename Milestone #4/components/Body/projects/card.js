import React from 'react';
import "./card.css";
function Card({project}) 
{
    return (
        <div className="card">
            <div className="pro-info">
                <label className="pro-title">{project.title}</label>
                <div className="pro-links">
                    {project.demo&&(
                    <a className="pro-link" href={project.demo}>
                        <div className="link-btn">
                        <i class="fi-rr-globe"></i>Demo

                        </div>
                        </a>)}
                        {project.github&&(
                    <a className="pro-link" href={project.github}>
                        <div className="link-btn">
                        <i class="devicon-github-original"></i>Github

                        </div>
                        </a>)}


                </div>
                <p>{project.about}</p>
            </div>
            <img src={project.image} className="pro-pic"/>

        </div>
    )
}
  
export default Card;