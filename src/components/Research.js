

import React from "react";

const Research = () => {
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

        <section className="resume-section" id="research">
            <div className="resume-section-content">
                <h2 className="mb-4">Research</h2>
                <h3 className="mb-4">Papers</h3>
                <ul className="fa-ul mb-0">
                    <li className='mb-4'>
                        <a href='https://ieeexplore.ieee.org/document/9516463'>

                            <span className="fa-li"><i className="fa-solid fa-file-contract"></i></span>
                            A new network-base high-level classification (Quipus) by modeling attribute-attribute interactions
                        </a>
                    </li>
                    <li className='mb-4'>
                        <a href='https://arxiv.org/pdf/2009.13302.pdf'>
                            <span className="fa-li"><i className="fa-solid fa-file-contract"></i></span>
                            Characterization of Covid-19 Dataset using Complex Networks and Image Processing
                        </a>
                    </li>
                    <li className='mb-4'>
                        <a href='https://arxiv.org/pdf/2010.04877.pdf'>
                            <span className="fa-li"><i className="fa-solid fa-file-contract"></i></span>
                            Analysis of Users Reaction around Impeachment in Peru using Twitter
                        </a>
                    </li>
                    <li className='mb-4'>
                        <a href='https://sol.sbc.org.br/index.php/eniac/article/view/12128'>
                            <span className="fa-li"><i className="fa-solid fa-file-contract"></i></span>
                            A Network-Based High-Level Data Classification Algorithm Using Betweenness Centrality
                        </a>
                    </li>
                </ul>
                <h3 className="mb-4">Articles Medium</h3>
                <ul className="fa-ul mb-0">
                    <li className='mb-4'>
                        <a href='https://medium.com/@esteban.wilfredo.g/music-composition-with-neural-networks-and-transformers-12dac4c57621'>

                            <span className="fa-li"><i className="fa-solid fa-file-contract"></i></span>
                            Music Composition with Neural Networks and Transformers
                        </a>
                    </li>
                    <li className='mb-4'>
                        <a href='https://medium.com/semantixbr/evolving-neural-networks-with-particle-swam-optimization-26a261f49d9f'>
                            <span className="fa-li"><i className="fa-solid fa-file-contract"></i></span>
                            Evolving Neural Networks with Particle Swam Optimization
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Research;