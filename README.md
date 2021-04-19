# Sentiment-Analysis
A simple Tensorflow AI which uses the IMDB dataset to predict if a statement is positive or negative.


It uses Python to train the model from the premade keras dataset.

This model is then imported by "tensorflow.js" and the server is created for the frontend application.


In this app, 2 different servers are created. 1 server is meant for deploying the current model state, to be imported by the JS model.


The other server is the UI, where the user can type their sentences and see the prediction of the model.



## Development

To run this script on your local PC, install the "IMDB Dataset" and copy the "imdb.vocab" file into the root directory of this project.

Go into the config folder and change the variables so they match your project structure.



To train the model:

```
python -m pip install requirements.txt
```

```
python main.py
```


To start the server:

```
npm start
```
