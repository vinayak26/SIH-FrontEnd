##IMPORTING MODULES
import numpy as np
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
import pickle








##LOADING DATASET
dataset = pd.read_csv("FuelConsumption.csv")








##CLEANING AND PREPARING DATASET FOR TRAINING
# Finding IQR
Q1 = dataset.iloc[:, -1].quantile(0.25)
Q3 = dataset.iloc[:, -1].quantile(0.75)
IQR = Q3 - Q1
LB = Q1 - 1.5 * IQR
UB = Q3 + 1.5 * IQR



#Counting number of outliers
req_val = []
outliers = []
for i in dataset.iloc[:, -1]:
    if i > UB:
        outliers.append(i)
    elif i < LB:
        outliers.append(i)
    else:
        req_val.append(i)



#Removing outliers
df = dataset[~((dataset.iloc[:, -1] < LB) | (dataset.iloc[:, -1] > UB))]



#Building Feature and Target dataframes
X = df.iloc[:, :-1]
y = df.iloc[:, -1]



#Removing highly correlated and not useful features
X.drop(["MODELYEAR", "CYLINDERS", "FUELCONSUMPTION_CITY", "FUELCONSUMPTION_HWY", "FUELCONSUMPTION_COMB"], axis=1,
       inplace=True)
x = X.copy()
columns = x.columns
x = x.values



#OneHotEncoding
#aking Dictionary of Categorical features with required number of important unique labels
one_hot_features = {"MAKE": 35, "MODEL": 10, "VEHICLECLASS": 15, "TRANSMISSION": 5, "FUELTYPE": 5}

#Function to perform One_Hot_Encoding_Top_X
def one_hot_encoding_top_x(df, variable, top_x_labels):
    for label in top_x_labels:
        df[variable + '_' + label] = np.where(df[variable] == label, 1, 0)
    df.drop([variable], axis=1, inplace=True)

#Performing One_Hot_Encoding_Top_X
for variable, limit in one_hot_features.items():
    top_x_labels = [x for x in X[variable].value_counts().sort_values(ascending=False).head(limit).index]
    one_hot_encoding_top_x(X, variable, top_x_labels)



#TrainTestSplit
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.5, random_state=1)







##TRAINING MODEL
# Random Forest
from sklearn.ensemble import RandomForestRegressor
regressor_rf = RandomForestRegressor(n_estimators=10, random_state=0)
regressor_rf.fit(X_train, y_train)








##BUILDING PICKLE FILE
pickle.dump(regressor_rf, open('model.pkl', 'wb'))




















# input_df = np.insert(x, len(x), ['LAMBORGHINI', 'ILX', 'COMPACT', 2.0, 'AS5', 'Z', 33], 0)

# Input = pd.DataFrame(input_df, columns = columns)


# for variable, limit in one_hot_features.items():
#     print(variable, limit)
#     top_x_labels = [i for i in Input[variable].value_counts().sort_values(ascending=False).head(limit).index]
#     one_hot_encoding_top_x(Input, variable, top_x_labels)
#
# print(Input.head())
# print(regressor_rf.predict([Input.iloc[-1, :]]))

