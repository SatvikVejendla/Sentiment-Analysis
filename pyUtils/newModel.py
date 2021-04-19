from tensorflow import keras

class Model:
    def __init__(self, xs, ys, val_data):
        self.create()
        self.train(xs, ys, val_data)

    def create(self):
        model = keras.Sequential()
        model.add(keras.layers.Embedding(88000, 64))
        model.add(keras.layers.GlobalAveragePooling1D())
        model.add(keras.layers.Dense(64, activation="relu"))
        model.add(keras.layers.Dense(1, activation="sigmoid"))
        self._model = model
        self.compile()
        
    def compile(self):
        
        self._model.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])

    def evaluate(self, xs, ys):
        return self._model.evaluate(xs, ys)

    def predict(self, xs):
        return self._model.predict(xs)

    def train(self, xs, ys, val_data, verbose=1):
        self._model.fit(xs,ys, epochs=30, batch_size=512, validation_data=val_data, verbose=verbose)
