import React from 'react';

const skillsData = [
  { name: 'HTML', value: 95, color: 'bg-primary' },
  { name: 'CSS', value: 85, color: 'bg-warning' },
  
  { name: 'Javascript', value: 90, color: 'bg-danger' },
  { name: 'Python', value: 90, color: 'bg-danger' },
  { name: 'React JS', value: 95, color: 'bg-dark' },
  { name: 'Mango db', value: 85, color: 'bg-info' },
];

const Skills = () => {
  return (
    <div className="container bg-white py-5">
      <div className="row px-3">
        <div className="col-12">
          <h2 className="title position-relative pb-2 mb-4">Skills</h2>
        </div>
        {['left', 'right'].map((side, index) => (
          <div className="col-sm-6" key={side}>
            {skillsData.slice(index * 3, index * 3 + 3).map((skill, i) => (
              <div className="skill mb-4" key={i}>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">{skill.name}</p>
                  <p className="mb-2">{skill.value}%</p>
                </div>
                <div className="progress">
                  <div
                    className={`progress-bar ${skill.color}`}
                    role="progressbar"
                    style={{ width: `${skill.value}%` }}
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
