import React from 'react';
import Separator from '../../common/separator';
import { ProjectData } from '../../data/project';
import Card from './card';
import "./projects.css";
function Projects(){
    const data = ProjectData;
    return <div className="projects">
        <Separator />
        <label className="title">
            Projects
        </label>
        <div>
            {data.map((project) => {
                return <Card project={project} />
            })}
        </div>
    </div>
}

export default Projects;
