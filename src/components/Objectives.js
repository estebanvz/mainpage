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
                <div className="lead mb-5">
                    I am a data scientist, currently working on the development of machine learning algorithms to detect anomalies in time series and classify events in videos using deep neural networks.
                    <hr />
                    I am passionate about solving business problems by detecting insights in data through artificial intelligence algorithms such as neural networks, bio-inspired optimization, and data visualization.
                    <hr />
                    With the use of agile methodologies such as scrum, my experience in various areas of computing such as front-end and back-end, my specialization in the field of machine learning and my academic training focused on artificial intelligence, I am able to design and implement solutions technology of high added value to my clients.
                    <hr/>
                    In my free time, I love to learn about vanguard technologies like artificial intelligence, big data, and blockchain.
                </div>
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