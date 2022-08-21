# Flask utils
from flask import Flask, redirect, url_for, request, render_template, Response
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer
from camera import ObjectDetection

app = Flask(__name__)
@app.route("/")
def main():
    return render_template("index.html")

def gen(camera):
    while True:
        frame = camera.main()
        if frame != "":
            yield (b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.route('/video_feed')
def video_feed():
    id = 0
    return Response(gen(ObjectDetection("demo.mp4")), mimetype='multipart/x-mixed-replace; boundary=frame')


if __name__ == '__main__':
    # Serve the app with gevent
    app.run(host='127.0.0.1', threaded=True, debug = True)




















# # Flask utils
# from flask import Flask, jsonify, make_response, request, render_template, Response, url_for
# from werkzeug.utils import secure_filename
# from gevent.pywsgi import WSGIServer
# from camera import ObjectDetection
# from flask_restx import Api, Resource, fields
# from flask_cors import CORS
#
# flask_app = Flask(__name__)
# CORS(flask_app)
#
# app = Api(app=flask_app,
#           version="1.0",
#           title="CO2 Emission Real-Time Tracker",
#           description="Tracks the CO2 emitted by cars in Real-Time")
#
#
# name_space = app.namespace('video_feed', description='Prediction APIs')
#
# model = app.model('Prediction params',
#                                     {'Status': fields.String(required=True,
#                                                            description="Run Video or Not",
#                                                            help="Status cannot be blank"),
#                                      })
#
#
# def gen(camera):
#     while True:
#         frame = camera.main()
#         if frame != "":
#             yield (b'--frame\r\n'
#                 b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
#
#
# @name_space.route("/")
# class MainClass(Resource):
#
#     def options(self):
#         response = make_response()
#         response.headers.add("Access-Control-Allow-Origin", "*")
#         response.headers.add('Access-Control-Allow-Headers', "*")
#         response.headers.add('Access-Control-Allow-Methods', "*")
#         return response
#
#     @app.expect(model)
#     def post(self):
#         try:
#             formData = request.json
#             data = [val for val in formData.values()]
#             status = data[0]
#             if status == True:
#                 id = 0
#                 response = jsonify({
#                     "statusCode": 200,
#                     "status": "Prediction made",
#                     # "result": "The type of iris plant is: " + types[prediction[0]]
#                     "result": Response(gen(ObjectDetection("demo.mp4")), mimetype='multipart/x-mixed-replace; boundary=frame')
#                 })
#                 # return Response(gen(ObjectDetection("demo.mp4")), mimetype='multipart/x-mixed-replace; boundary=frame')
#             else:
#                 pass
#             #
#             # arr = np.insert(model_script.x, len(model_script.x), data, 0)
#             # Input = pd.DataFrame(arr, columns=model_script.columns)
#             #
#             # for variable, limit in model_script.one_hot_features.items():
#             #     top_x_labels = [i for i in Input[variable].value_counts().sort_values(ascending=False).head(limit).index]
#             #     model_script.one_hot_encoding_top_x(Input, variable, top_x_labels)
#             #
#             # output = regressor.predict([Input.iloc[-1, :]])
#             # # prediction_text = f"CO2 Emission of the vehicle is : {output}"
#
#             # response = jsonify({
#             #     "statusCode": 200,
#             #     "status": "Prediction made",
#             #     # "result": "The type of iris plant is: " + types[prediction[0]]
#             #     "result": result
#             # })
#             response.headers.add('Access-Control-Allow-Origin', '*')
#             return response
#         except Exception as error:
#             return jsonify({
#                 "statusCode": 500,
#                 "status": "Could not make prediction",
#                 "error": str(error)
#             })
#     # return render_template("index.html")
#
#
#
#
# # @app.route('/video_feed')
# # def video_feed():
# #     id = 0
# #     return Response(gen(ObjectDetection("demo.mp4")), mimetype='multipart/x-mixed-replace; boundary=frame')
# #
# #
# # if __name__ == '__main__':
# #     # Serve the app with gevent
# #     app.run(host='127.0.0.1', threaded=True, debug = True)