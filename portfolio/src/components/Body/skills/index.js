import React from 'react';
import Separator from '../../common/separator';
import { SkillData } from '../../data/skill';
import "./skills.css";
function Skills() {
    const data = SkillData;
    return <div className="skills">
        <Separator />
        <label className="title">
            Skills
        </label>
        <div className="skill-cont">
            {data.map((item) => {
                return (
                    <div className="skill-sec">
                        <label className="skill-title">{item.type}</label>
                        <div className="skills-list">
                            {item.list.map((skill) => {
                                return (
                                    <label className="skill-name">{skill.name}</label>
                                )
                            })}
                        </div>
                    </div>

                )
            })}
        </div>
    </div>
}

export default Skills;