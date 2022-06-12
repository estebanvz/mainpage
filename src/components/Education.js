import React from "react";

const Education = () => {
    let items = [
        {
            title: "University of São Paulo",
            subtitle: "Phd Computer Science",
            describe: [
            `
                In this doctoral degree, I am focusing on deep learning, complex networks, and transformers applied to stock portafolio optimization. 
                I started this degree receptly. So, I still running my experiements.
                However, there are some experiments that you can test in the projects section. 
             `   
            ],
            date: "Sep 2021 - Present",
        },
        {
            title: "University of São Paulo",
            subtitle: "MSc Computer Science",
            describe: [
                `
                In this master degree, I focused on learning about machine learning, deep learning, complex networks, and cloud computing. 
                My researches were focused on complex network applied to supervised machine learning problems.
                This Master of Science was challenging and push my knowladge to new math fields like complex networks and their properties. 
                I applied my research using technologies like python, particle swarm optimization, PCA, convolutional neural networks, and tensorflow. 
                `
            ],
            date: "Mar 2019 - Sep 2021",
        },
        {
            title: "University of California, Irvine",
            subtitle: "Certificate in Innovation Management & Entrepreneurship",
            describe: [
                `
                In this certificate, I learned about business structure, MVP analysis, marketing fundaments, and innovation techniques. During the course, various cases of how companies handled problems in such a way that they managed to emerge stronger from difficult situations were put into practice. In addition, workshops were held where I had to work as a team with people from different countries to design an MVP.
                `
            ],
            date: "Mar 2018 - Jun 2018",
        },
        {
            title: "University of California, Irvine",
            subtitle: "Certificate in Data Science & Predictive Analytics",
            describe: [
                `
                In this certificate, I learned about machine learning techniques. Various exercises were carried out where we solved real business problems using data analysis and machine learning algorithms. These analyzes were carried out in telecommunications companies (churn prediction), online sales (recommendations), banking (customer analysis), and government (anomaly detection). Likewise, various tools were used such as Knime, Weka, Python, and R.
                 `
            ],
            date: "Jan 2018 - Mar 2018",
        },
        {
            title: "Peruvian University of Applied Sciences",
            subtitle: "Bachelor Computer Science",
            describe: [
            `
            In this bachelor's, I focused on learning about back-end, front-end, cloud computing, and machine learning fundamentals. During the degree, I was able to carry out professional internships in areas of Back-end, front-end, and mobile development. During the degree, I was able to focus on learning new technologies related to artificial intelligence.                
            `
            ],
            date: "Jan 2011 - Mar 2018",
        },
        // {
        //     title: "Deep Learning Instructor",
        //     subtitle: "Alura - Technology Online Courses",
        //     describe: [
        //         `
        //     Design and structure deep learning course suing Python, Keras, Tensorboard, and Jupyter notebook.
        //     `,
        //         `
        //     Improvement of soft-skills.
        //     `,
        //         `
        //     Effective communication skills to keep student attention.
        //     `,
        //     ],
        //     date: "Nov 2021 - Present",
        // },
        // {
        //     title: "Crypto Market Data Scientist",
        //     subtitle: "Private Capital",
        //     describe: [
        //         `
        //     Python data tools management like Numpy, Pandas, and Matplotlib.            `,
        //         `
        //     Time series analysis using Deep Learning Networks (LSTM, CCN, and GRU) with Tensorflow.            `,
        //         `
        //     Binance Broker API integration for long and short trades.
        //     `,
        //         `
        //     Development of trading metrics on Trading view using pine-script.
        //     `,
        //     ],
        //     date: "Jul 2021 - Oct 2021",
        // },
        // {
        //     title: "Data Analyst",
        //     subtitle: "Eyachay Software Education",
        //     describe: [
        //         `
        //     Python developer using Scikit-learn, Numpy, adn Pandas.
        //     `,
        //         `
        //     Build Dashboards with Excel, PowerBI, Metabase, Tableau, and DataJS.           `,
        //         `
        //     Full-stack developer with PHP Laravel, MySQL, VueJS.
        //     `,
        //         `
        //     Cloud administration with GCP ( Compute Engine, Cloud Storage ).
        //     `,
        //     ],
        //     date: "Sep 2020 - Sep 2021",
        // },
        // {
        //     title: "Full Stack",
        //     subtitle: "Notaria Vilca",
        //     describe: [
        //         `
        //     Full-stack developer with PHP Laravel, MySQL, Angular2.
        //     `,
        //         `
        //     Cloud administration with GCP( Compute Engine, Cloud Storage ).
        //     `,
        //         `
        //     Python developer using Scikit-learn, Flask.
        //     `,
        //         `
        //     Build Dashboards with Excel, and DataJS.
        //     `,
        //     ],
        //     date: "Sep 2018 - Sep 2020",
        // },
    ]
    return (
        // <section className="resume-section" id="experience">
        //     <div className="resume-section-content">
        //         <h2 className="mb-5">Education</h2>
        //         {items.map(function (item, i) {
        //             return (
        //                 <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        //                     <div className="flex-grow-1">
        //                         <h3 className="mb-0">{item.title}</h3>
        //                         <div className="subheading mb-3">{item.subtitle}</div>
        //                         <ul>
        //                             {item.describe.map(function (point, i) {
        //                                 return (<li className="container">{point}</li>)
        //                             })
        //                             }
        //                         </ul>
        //                     </div>
        //                     <div className="flex-shrink-0"><span className="text-primary">{item.date}</span></div>
        //                 </div>
        //             );
        //         })}

        //     </div>
        // </section>
        <section className="resume-section" id="education">
            <div className="resume-section-content">
                <h2 className="mb-5">Education</h2>
                {items.map(function (item, i) {
                    return (
                        <div key={i} className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">{item.title}</h3>
                                <div className="subheading mb-3">{item.subtitle}</div>
                                <div>{item.describe}</div>
                            </div>
                            <div className="flex-shrink-0"><span className="text-primary">{item.date}</span></div>
                        </div>);
                })}
                {/* <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">James Buchanan High School</h3>
                        <div className="subheading mb-3">Technology Magnet Program</div>
                        <p>GPA: 3.56</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">August 2002 - May 2006</span></div>
                </div> */}
            </div>
        </section>
    )
}
export default Education;