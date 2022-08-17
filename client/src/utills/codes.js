const detectingoutliners = 
    `#Finding IQR
Q1 = dataset.iloc[:, -1].quantile(0.25)
 Q3 = dataset.iloc[:, -1].quantile(0.75)
IQR = Q3 - Q1
LB = Q1 - 1.5*IQR
UB = Q3 + 1.5*IQR
print(f'Range = ({LB}, {UB})
                `

export {detectingoutliners}