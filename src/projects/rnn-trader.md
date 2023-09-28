---
title: "Quantitative AI Stock Trading Bot"
image: "/images/rnn-trader.png"
date: "2022-01-01"
github: "https://github.com/bvsam/rnn-trader"
keywords: ["Keras", "Tensorflow", "scikit-learn", "React", "Typescript"]
---

A bidirectional LSTM-based stock trading bot that's able to make predictions on future stock price movement based on previous price data and supplementary features. The bot can be backtested on historical stock data using a reactive web interface with charts.

Stock data was collected from Yahoo Finance and used to train various LSTM models using Keras, scikit-learn and Tensorflow. Their task: given _X_ previous days of price data for ticker _Y_ (and price data for various other tickers as supplementary features), predict whether the price of stock _Y_ will be higher or lower _Z_ days in the future. 3 models were trained with varying architectures, sizes and training data cutoff end dates.

Using Flask, an REST API was then created to interface with the trained model, allowing one to predict daily stock price movement during a given time period. Each model could be used to predict tickers that they weren't trained on (e.g. using a model trained primarily on _SPY_ to predict price movement of _ABNB_), usually with a moderate degree of success.

A web interface was also created using React, Tailwind CSS, Fluent UI, and visx to make it easier to call the model for inference using the Flask API. This also allows one to see the day-by-day returns of the model, and compare them to a benchmark.
