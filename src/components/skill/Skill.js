import React from 'react'
import Title from '../layouts/Title';

import skills from "./SkillList";

const Resume = () => {
  return (
    <section id="skills" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          des="SKILLS"
        />
      </div>
      <div className="skill-section row">
        {skills && skills.map((skill) => {
            return (
                <div className="skill-list-item col-2 mt-3">
                    <img src={skill.url} width="100px"/>
                    <p>{skill.name}</p>
                </div>
            )
        })}
      </div>
    </section>
  );
}

export default Resume