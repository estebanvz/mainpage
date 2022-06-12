import React from "react";

const Experience = () => {
    let items = [
        {
            title: "Data Scientist",
            subtitle: "Semantix - All about data",
            describe: [
                "Build and design Machine Learning algorithms for Image and Video Classification using OpenCV, YOLO, and Keras.",
                "Edge devices configuration and developer for artificial intelligence (Raspberry pi and Nvidia Jetson).",
                "Docker containers development and GCP cloud administration (Compute Engine, Cloud Storage).",
            ],
            date: "Oct 2021 - Present",
        },
        {
            title: "Deep Learning Instructor",
            subtitle: "Alura - Technology Online Courses",
            describe: [
            `
            Design and structure deep learning course suing Python, Keras, Tensorboard, and Jupyter notebook.
            `,
            `
            Improvement of soft-skills.
            `,
            `
            Effective communication skills to keep student attention.
            `,
            ],
            date: "Nov 2021 - Present",
        },
        {
            title: "Crypto Market Data Scientist",
            subtitle: "Private Capital",
            describe: [
            `
            Python data tools management like Numpy, Pandas, and Matplotlib.            `,
            `
            Time series analysis using Deep Learning Networks (LSTM, CCN, and GRU) with Tensorflow.            `,
            `
            Binance Broker API integration for long and short trades.
            `,
            `
            Development of trading metrics on Trading view using pine-script.
            `,
            ],
            date: "Jul 2021 - Oct 2021",
        },
        {
            title: "Data Analyst",
            subtitle: "Eyachay Software Education",
            describe: [
            `
            Python developer using Scikit-learn, Numpy, adn Pandas.
            `,
            `
            Build Dashboards with Excel, PowerBI, Metabase, Tableau, and DataJS.           `,
            `
            Full-stack developer with PHP Laravel, MySQL, VueJS.
            `,
            `
            Cloud administration with GCP ( Compute Engine, Cloud Storage ).
            `,
            ],
            date: "Sep 2020 - Sep 2021",
        },
        {
            title: "Full Stack",
            subtitle: "Notaria Vilca",
            describe: [
            `
            Full-stack developer with PHP Laravel, MySQL, Angular2.
            `,
            `
            Cloud administration with GCP( Compute Engine, Cloud Storage ).
            `,
            `
            Python developer using Scikit-learn, Flask.
            `,
            `
            Build Dashboards with Excel, and DataJS.
            `,
            ],
            date: "Sep 2018 - Sep 2020",
        },
    ]
    return (
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>
                {items.map(function (item, ii) {
                    return (
                        <div key={ii} className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">{item.title}</h3>
                                <div className="subheading mb-3">{item.subtitle}</div>
                                <ul>
                                    {item.describe.map(function (point, i) {
                                        return (<li key={i} className="container">{point}</li>)
                                    })
                                    }
                                </ul>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">{item.date}</span></div>
                        </div>
                    );
                })}

            </div>
        </section>
    )
}
export default Experience;