

import React from "react";

const Languages = () => {
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
            title: "Peruvian School Analysis",
            subtitle: "Knime, Tableau, PowerBI",
            describe: [
                `
                This Project is related with 
                `,
            ],
            img: "https://loremflickr.com/360/640",
            url: "",
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

        <section className="resume-section" id="languages">
            <div className="resume-section-content">
                <h2 className="mb-4">Languages</h2>
                <ul className="fa-ul mb-0">
                    <li className='mb-4'>
                        <h4>
                            <span className="fa-li"><i className="fa-solid fa-file-contract"></i></span>
                            English (fluent speaker)
                        </h4>
                        <ul>
                            <li>
                                <a href="https://certs.duolingo.com/en/e80e4fc3cdbb5af98a7a4535ed4c02e83">
                                    DET 120 (equivalent TOEFL ibt 97-102 IELTS 7)
                                </a>
                            </li>
                            <li>
                                <a href="https://www.parchment.com/u/award/f8319aedfb19f293055f22065721f975">
                                    Studies in University of California, Irvine - USA
                                </a>
                            </li>
                            
                        </ul>
                    </li>
                    <li className='mb-4'>
                        <h4>
                            <span className="fa-li"><i className="fa-solid fa-file-contract"></i></span>
                            Portuguese (fluent speaker)
                        </h4>
                        <ul>
                            <li>
                                <a href="https://dcm.ffclrp.usp.br/culturaeextensao_evento.php?codevento=533">
                                    Master's degree in Applied Computer Science
                                </a>
                            </li>
                            <li>
                                <a href="#experience">
                                    Working in Brazil 
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='mb-4'>
                        <h4>
                            <span className="fa-li"><i className="fa-solid fa-file-contract"></i></span>
                            Spanish (native speaker)
                        </h4>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Languages;