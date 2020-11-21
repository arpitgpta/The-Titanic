import numpy as np
import sys
import joblib



loaded_model = joblib.load("model_joblib")
# array = [5, 3, 1.0, 0.0, 35.0, 0, 0, 8.0500, 1.0, 0.0, 0.0]
array = sys.argv[1:]

a = np.asarray(array).reshape(1,-1)
predicted_value= loaded_model.predict(a)

print("Predicted Value",predicted_value)
