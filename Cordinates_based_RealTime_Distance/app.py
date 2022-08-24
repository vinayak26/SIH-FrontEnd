from flask import Flask, request, jsonify, make_response
from flask_restx import Api, Resource, fields
# import module
from geopy.geocoders import Nominatim
from geopy import distance
# import model_script
# import pickle
# import numpy as np
# import pandas as pd
import sys
from flask_cors import CORS

flask_app = Flask(__name__)
CORS(flask_app)
app = Api(app=flask_app,
          version="1.0",
          title="CO2 Emission Tracker (Coordinates)",
          description="Tracks the real-time co2 emission.")

name_space = app.namespace('distance', description='Prediction APIs')

model = app.model('Prediction params',
                                    {'currentlocation': fields.String(required=True,
                                                           description="Current Location",
                                                           help="Make cannot be blank"),
                                     'targetlocation': fields.String(required=True,
                                                            description="Destination Location",
                                                            help="Model cannot be blank"),
                                     })

# regressor = pickle.load(open('model.pkl', 'rb'))


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

            # arr = np.insert(model_script.x, len(model_script.x), data, 0)
            # Input = pd.DataFrame(arr, columns=model_script.columns)

            # for variable, limit in model_script.one_hot_features.items():
            #     top_x_labels = [i for i in Input[variable].value_counts().sort_values(ascending=False).head(limit).index]
            #     model_script.one_hot_encoding_top_x(Input, variable, top_x_labels)

            # output = regressor.predict([Input.iloc[-1, :]])
            # prediction_text = f"CO2 Emission of the vehicle is : {output}"

            # initialize Nominatim API
            geolocator = Nominatim(user_agent="geoapiExercises")

            # place input
            # Input_place1 = input("Enter Your Location: ")
            # Input_place2 = input("Enter Your Destination: ")
            Input_place1 = data[0]
            Input_place2 = data[1]

            # Get location of the input strings
            place1 = geolocator.geocode(Input_place1)
            place2 = geolocator.geocode(Input_place2)

            # Get latitude and longitude
            Loc1_lat, Loc1_lon = (place1.latitude), (place1.longitude)
            Loc2_lat, Loc2_lon = (place2.latitude), (place2.longitude)

            location1 = (Loc1_lat, Loc1_lon)
            location2 = (Loc2_lat, Loc2_lon)

            # display the distance
            # print(distance.distance(location1, location2).km, " kms")
            prediction_text = distance.distance(location1, location2).km

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

# # import module
# from geopy.geocoders import Nominatim
# from geopy import distance

# # initialize Nominatim API
# geolocator = Nominatim(user_agent="geoapiExercises")

# # place input
# # Input_place1 = input("Enter Your Location: ")
# # Input_place2 = input("Enter Your Destination: ")
# Input_place1 = "delhi"
# Input_place2 = "patna"

# # Get location of the input strings
# place1 = geolocator.geocode(Input_place1)
# place2 = geolocator.geocode(Input_place2)

# # Get latitude and longitude
# Loc1_lat, Loc1_lon = (place1.latitude), (place1.longitude)
# Loc2_lat, Loc2_lon = (place2.latitude), (place2.longitude)

# location1 = (Loc1_lat, Loc1_lon)
# location2 = (Loc2_lat, Loc2_lon)

# # display the distance
# print(distance.distance(location1, location2).km, " kms")
# for i in range(round(distance.distance(location1, location2).km)):
#     print(i)
# # print(round(2.34))