---
title: "Handwriting Recognition App"
image: "/images/handwriting-recognition.png"
date: "2022-01-02"
github: "https://github.com/bvsam/handwriting-recognition"
demo: "https://bvsam.github.io/handwriting-recognition/"
keywords: ["Keras", "Tensorflow", "Bootstrap"]
---

A simple web app that recognizes user-drawn digits and letters.

Using Keras, a CNN (convolutional neural network) model was developed and trained on the EMNIST ByClass dataset, which contains pictures of letters and digits, to classify single handwritten letters and digits. The test accuracy of the trained model was 87%.

A web app was then made using Bootstrap and Fabric.js to provide a canvas for the user to draw on. Letters and digits drawn by the user would be captured and represented as a tensor. Using Tensorflow.js, the trained model could then attempt to classify the handwritten digit or letter. The model's prediction would then be appended to an input field at the top of the app, where the text could be copied or cleared.

Using Tensorflow.js, model inference happens in the browser, instead of requiring a backend. This likely reduces costs, although this implementation would be unfeasible for larger models.
