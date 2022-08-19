from flask import Flask, request, jsonify, make_response
from flask_restx import Api, Resource, fields
import model_script
import pickle
import numpy as np
import pandas as pd
import sys
from flask_cors import CORS

flask_app = Flask(__name__)
CORS(flask_app)
app = Api(app=flask_app,
          version="1.0",
          title="CO2 Emission Predictor",
          description="Predict the CO2 emitted by cars")

name_space = app.namespace('prediction', description='Prediction APIs')

model = app.model('Prediction params',
                                    {'Make': fields.String(required=True,
                                                           description="Company of the car",
                                                           help="Make cannot be blank"),
                                     'Model': fields.String(required=True,
                                                            description="Model of the car",
                                                            help="Model cannot be blank"),
                                     'Class': fields.String(required=True,
                                                            description="Class of the car",
                                                            help="Class cannot be blank"),
                                     'Engine_Size': fields.Float(required=True,
                                                                 description="Engine_Size of the car",
                                                                 help="Engine_Size cannot be blank"),
                                     'Transmission': fields.String(required=True,
                                                                   description="Transmission of the car",
                                                                   help="Transmission cannot be blank"),
                                     'Fuel_Type': fields.String(required=True,
                                                                description="Fuel_Type of the car",
                                                                help="Fuel_Type cannot be blank"),
                                     'Mileage_KmpL': fields.Float(required=True,
                                                                  description="Mileage_KmpL of the car",
                                                                  help="Mileage_KmpL cannot be blank")})

regressor = pickle.load(open('model.pkl', 'rb'))


@name_space.route("/")
class MainClass(Resource):

    def options(self):
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add('Access-Control-Allow-Headers', "*")
        response.headers.add('Access-Control-Allow-Methods', "*")
        return response

    @app.expect(model)
    def post(self):
        try:
            formData = request.json
            data = [val for val in formData.values()]

            arr = np.insert(model_script.x, len(model_script.x), data, 0)
            Input = pd.DataFrame(arr, columns=model_script.columns)

            for variable, limit in model_script.one_hot_features.items():
                top_x_labels = [i for i in Input[variable].value_counts().sort_values(ascending=False).head(limit).index]
                model_script.one_hot_encoding_top_x(Input, variable, top_x_labels)

            output = regressor.predict([Input.iloc[-1, :]])
            prediction_text = f"CO2 Emission of the vehicle is : {output}"

            response = jsonify({
                "statusCode": 200,
                "status": "Prediction made",
                # "result": "The type of iris plant is: " + types[prediction[0]]
                "result": prediction_text
            })
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        except Exception as error:
            return jsonify({
                "statusCode": 500,
                "status": "Could not make prediction",
                "error": str(error)
            })
