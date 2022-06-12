import React from "react";

const Awards = () => {
    let items = [
        `Scholarship CAPES Brazilian Government `,
        `Speaker of "Neural Networks to Predict Sales"  at public university Micaela Bastidas from Apurimac`,
        `Speaker of "Artificial Intelligence as Business Core" at "Entrepreneurial partner"`,
        `Speaker of "Random Forest introduction" at "Data Science Research Perú"`,
        `First place in the group of graduates UPC`,
    ]
    return (
        <section className="resume-section" id="awards">
            <div className="resume-section-content">
                <h2 className="mb-5">Awards - Talks</h2>
                <ul className="fa-ul mb-0">
                    {items.map(function (item, index) {
                        return (

                            <li key={index}>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                {item}
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </section>
    )
}
export default Awards;