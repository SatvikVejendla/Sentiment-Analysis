from accessor.variables import getModel
import tensorflowjs as tfjs

def saveModel():
    model = getModel()._model
    tfjs.converters.save_keras_model(model, "../public/state")