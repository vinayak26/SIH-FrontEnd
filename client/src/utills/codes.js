const detectingoutliners = 
    `#Finding IQR
Q1 = dataset.iloc[:, -1].quantile(0.25)
 Q3 = dataset.iloc[:, -1].quantile(0.75)
IQR = Q3 - Q1
LB = Q1 - 1.5*IQR
UB = Q3 + 1.5*IQR
print(f'Range = ({LB}, {UB})
                `



const handelingoutliners = `#Counting number of outliers
req_val = []
outliers = []
for i in dataset.iloc[:, -1]:
if i > UB:
outliers.append(i)
elif i < LB:
outliers.append(i)
else:
req_val.append(i) 
  print(f'Number of outliers = {len(outliers)}')
  print(f"Total number of requireed rows = {len(req_val)}")`

const numberofoutliners =`
Number of outliers = 6
Total number of requireed rows = 1062
`
const removingoutliners = `#Removing outliers
df = dataset[~((dataset.iloc[:, -1] < LB) |(dataset.iloc[:, -1] > UB))]`

const findingcorrelation = `#Findind Correlation among features
plt.figure(figsize=(12,10))
cor = X.corr()
sns.heatmap(cor, annot=True, cmap=plt.cm.CMRmap_r)
plt.show()`

const findingcorrelation2 = `#With the following function we can select highly correlated features
#it will remove the first feature that is correlated with anything other feature

def correlation(dataset, threshold):
col_corr = set()  # Set of all the names of correlated columns
corr_matrix = dataset.corr()
for i in range(len(corr_matrix.columns)):for j in range(i):
if abs(corr_matrix.iloc[i, j]) > threshold: # we are interested in absolute coeff value
colname = corr_matrix.columns[i]  # getting the name of column
col_corr.add(colname)
return col_corr`

const findingcorrelation3 = `#Removing highly correlated and not useful features
X.drop(["MODELYEAR","CYLINDERS","FUELCONSUMPTION_CITY","FUELCONSUMPTION_HWY","FUELCONSUMPTION_COMB"], axis=1, inplace=True)`

const findingcorrelation4 = `#Removing highly correlated and not useful features
X.drop(["MODELYEAR","CYLINDERS","FUELCONSUMPTION_CITY","FUELCONSUMPTION_HWY","FUELCONSUMPTION_COMB"], axis=1, inplace=True)`

const findingcorrelation5 = `#Total features we will get after performing One Hot Encoding on current data
print("Total number of Features to be resulted after Standard One Hot Encoding : ", pd.get_dummies(X, drop_first = True).shape[1])
output > Total number of Features to be resulted after Standard One Hot Encoding :  744`

const findingcorrelation6 = `<h6 className="result-text">corr_features = correlation(X, 0.8)
corr_features</h6>`

const findingcorrelation7 = `{'CYLINDERS',
'FUELCONSUMPTION_CITY',
'FUELCONSUMPTION_COMB',
'FUELCONSUMPTION_COMB_MPG',
'FUELCONSUMPTION_HWY'}`

const uniquelables = `#Total features before performing One Hot Encoding on current data
print("Total number of Features resulted after One_Hot_Encoding_Top_X : ", len(X.columns))`

const uniquelables2 = `#Making Dictionary of Categorical features with required number of important unique labels 
one_hot_features = {"MAKE":35, "MODEL":10, "VEHICLECLASS":15, "TRANSMISSION":5, "FUELTYPE":5}`

const uniquelables3 = `#Total number of unique labels in each feature
labels = []
features = []
limits = []
for col, limit in one_hot_features.items():
labels.append(len(X[col].unique()))
features.append(col)
limits.append(limit)
`
const uniquelables4=`#Plotting Bar Graph to represent number of unique labels before One_Hot_Encoding_Top_X
sns.barplot(x = features, y = labels)
sns.set(rc = {'figure.figsize':(20,12)})
plt.show()`

const uniquelables5 = `#Total features we will get after performing One Hot Encoding on current data
print("Total number of Features to be resulted after Standard One Hot Encoding : ", pd.get_dummies(X, drop_first = True).shape[1])`


export {detectingoutliners,handelingoutliners,numberofoutliners,removingoutliners}
export {findingcorrelation,findingcorrelation2,findingcorrelation3,findingcorrelation4,findingcorrelation5,findingcorrelation6,findingcorrelation7}
export {uniquelables,uniquelables2,uniquelables3,uniquelables4,uniquelables5}

const hotencoding = `#Function to perform One_Hot_Encoding_Top_X
def one_hot_encoding_top_x(df, variable, top_x_labels):
for label in top_x_labels:
df[variable+'_'+label] = np.where(df[variable] == label, 1, 0)
df.drop([variable], axis=1, inplace=True)`

const hotencoding2 = `#Performing One_Hot_Encoding_Top_X
for variable, limit in one_hot_features.items():
top_x_labels = [x for x in X[variable].value_counts().sort_values(ascending = False).head(limit).index]
one_hot_encoding_top_x(X, variable, top_x_labels)`

const hotencoding3 = `#Total features we are getting after performing One Hot Encoding on current data
print("Total number of Features resulted after One_Hot_Encoding_Top_X : ", len(X.columns))
`

const hotencoding4=`#Plotting Bar Graph to represent number of unique labels after One_Hot_Encoding_Top_X
sns.barplot(x = features, y = limits)
sns.set(rc = {'figure.figsize':(20,12)})
plt.show()`


export {hotencoding,hotencoding2,hotencoding3,hotencoding4}