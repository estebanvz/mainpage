import React from 'react';
const Objectives = () => {
    return (
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    Esteban
                    <span className="text-primary"> Vilca</span>
                </h1>
                <div className="subheading mb-5">
                    {/* 3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 · */}
                    <a href="mailto:name@email.com">esteban.wilfredo.g@gmail.com</a>
                </div>
                <p className="lead mb-5">
                    I am a Data Scientist with 4 years of experience solving business problems using artificial intelligence, machine learning, data visualization, and deep learning. Moreover, I love to teach and spread data science technologies. I participate actively as a data scientist instructor on online platforms and participate as speaker in conferences.                </p>
                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/estebanvz/"><i className="fab fa-linkedin-in"></i></a>
                    <a className="social-icon" href="https://github.com/estebanvz/"><i className="fab fa-github"></i></a>
                    <a className="social-icon" href="https://twitter.com/ds_estebanvz"><i className="fab fa-twitter"></i></a>
                    <a className="social-icon" href="https://www.youtube.com/c/unanalistadedatosperuano"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </section>
    )
}
export default Objectives;