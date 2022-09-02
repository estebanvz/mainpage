import React from "react";

const Skills = () => {
    return (
        <section className="resume-section" id="skills">
            <div className="resume-section-content">
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons mb-4">
                    <li ><i className="fab fa-python"></i> <span>Python, Keras, Tensorflow, Pandas, Numpy </span></li>
                    <li ><i className="fab fa-github"></i> <span>Github, Gitlab, Git, Documentation</span></li>
                    <li ><i className="fab fa-linux"></i> <span>Linux, Shell, Cloud (GCP)</span></li>
                    <li ><i className="fab fa-js"></i> <span> Javascript, React, Vuejs, Angular2</span> </li>
                    <li ><i className="fab fa-php"></i><span> PHP, Laravel </span> </li>
                    <li ><i className="fab fa-html5"></i> <span> Sass, Bootstrap, HTML5, CSS </span> </li>
                    <li ><i className="fa-solid fa-database"></i> <span> MySQL, PostgreSQL, MongoDB</span> </li>
                    <li ><i className="fa-brands fa-google"></i> <span> Google Cloud Platform</span> </li>
                </ul>

            </div>
        </section>
    )
}
export default Skills;