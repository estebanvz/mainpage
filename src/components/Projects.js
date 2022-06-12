import React from "react";

const Projects = () => {
    let items = [
        {
            title: "Telegram Crypto Market Analizer Bot",
            subtitle: "Python, Keras, Tensorflow, Heroku, Telegram API, Binance API, Pandas, Numpy",
            describe: [
                `
                In this project, a blockchain payment system had to be implemented using the Binance Smart Chain (BSC) blockchain. Each payment gave a certain amount of coins to a Telegram account. Each of these coins could be used to run an AI that, through technical indicators, would warn you of a possible long or short trade. In this project, we use Python, Numpy, Pandas, Etalib, Firebase, Telegram API, Scrapy, Binance API,  Tensorflow, and my own trading algorithm THAL-IA.                `,
            ],
            img: "assets/img/telegram.gif",
            url: "https://t.me/thalia_trading_bot",
            date: "-> Link <-",
        },
        {
            title: "Optimizer Brazilian Stock Portfolio",
            subtitle: "Python, Jupyter, Colab, Pandas, Numpy",
            describe: [
                `
                This experiment focused on determining the best purchase of shares in the Brazilian market each month. We use the next concepts: data pre-processing techniques, time series, neural networks, and financial concepts such as the Sharpe index. Unlike the US market, the Brazilian market presents some anomalies that could be exploited like the SELIC rate. During this project, the purchase of shares was optimized using the prices of the last 3 months, a bio-inspired algorithm that optimized the Sharpe index with a slight modification, and a 1-layer neural network with 5 neurons.                `,
            ],
            img: "assets/img/portafolio.png",
            url: "https://colab.research.google.com/drive/13X7DarOo4SaqaUodcXIPNqiNxSlHSNMA?usp=sharing",
            date: "-> Link <-",
        },
        {
            title: "Analysis of peruvian government awards with only one committe member in 2022",
            subtitle: "Knime, Tableau",
            describe: [
                `
                In this project, public government databases were analyzed to identify possible risks of corruption in Peru. During the analysis of these data provided by the comptroller, it was observed that the number of members who decided the winners in some parts was only one. This represents a risk of corruption since only one person can easily succumb to a corruption attempt. This dashboard shows the most vulnerable departments and that these calls with only one member have the most money in projects.
                `,
            ],
            img: "assets/img/corruption.png",
            url: "https://public.tableau.com/views/Analysisofgovernmentawardswithonecommitteemember2022/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link",
            date: "-> Link <-",
        },
        {
            title: "Trading View Stocks Predictor",
            subtitle: "Crypto, BTC, ETH, Tradingview, Binance",
            describe: [
                `
                For this project, an indicator was created on the Tradingview platform to detect possible long or short trades. For this, time series and technical analysis concepts such as linear regression, ADX, RSI, and EMA were used. Likewise, data visualization concepts were used to improve the interpretability of the indicator. This has been received by the community with 36 people actively using the indicator. This code is available for use and operation in the community.
                `,
            ],
            img: "assets/img/trade.png",
            url: "https://www.tradingview.com/script/1Atl4Yx2/",
            date: "-> Link <-",
        },

    ]
    return (

        <section className="resume-section" id="projects">
            <div className="resume-section-content">
                <h2 className="mb-5">Projects</h2>
                {items.map(function (item, i) {
                    return (
                        <div key={i} className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">{item.title}</h3>
                                <div className="subheading mb-3">{item.subtitle}</div>
                                <div className="row">
                                    <div className="cold-xs-12" centered>
                                        <p className="text_project">
                                            {item.describe}
                                        </p>
                                        <a href={item.url}>

                                        <button type="button" class="btn btn-secondary btn-sm"> Link <i className="fas fa-link"></i></button>

                                        </a>

                                    </div>
                                </div>
                            </div>
                            {/* <div className="flex-shrink-0"><span className="text-primary">{item.date}</span></div> */}
                            <div className="col-md-4 offset-md-2 col-xs-12">
                                <div className="img_project">
                                    <a href={item.url}>
                                        <img src={item.img} alt="gif crypto predictor bot" height={400} width={240}></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
export default Projects;