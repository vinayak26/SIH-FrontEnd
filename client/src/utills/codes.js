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



export {detectingoutliners,handelingoutliners,numberofoutliners,removingoutliners}