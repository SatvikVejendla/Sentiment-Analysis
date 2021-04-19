from tensorflow import keras
import tensorflow.keras.datasets.imdb as data

from pyUtils.newModel import Model
from accessor.variables import setWords
from accessor.variables import setModel
from pyUtils.save import saveModel
from tensorflow.keras.preprocessing.sequence import pad_sequences

import warnings

warnings.filterwarnings("ignore")


(xs, ys), (test_xs, test_ys) = data.load_data(num_words=88000)


word_index = data.get_word_index()
word_index = {k:(v+3) for k, v in word_index.items()}

setWords(word_index)


xs = pad_sequences(xs, value=0, padding="post", maxlen=250)
test_xs = pad_sequences(test_xs, value=0, padding="post", maxlen=250)


x_val = xs[:10000]
x_train = xs[10000:]

y_val = ys[:10000]
y_train = ys[10000:]

model = Model(x_train, y_train, (x_val, y_val))

model.evaluate(test_xs, test_ys)

setModel(model)

saveModel()
