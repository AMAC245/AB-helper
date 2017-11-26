# AB-helper


#### This factory function provides a quick and easy reference to the important descriptive statistics of a given sample which can be used in further analyses
```

   npm install compare 
   yarn add compare
   
```

Compares the means of two independent samples (control, treatment) and runs the appropraite t-test. It will return a boolean of whether a statistically significant result is detected.

## Under the hood
- Analyses the variance of your two samples (equal or unequal) 
- degrees of freedom(df)
- compares f-critcal value for f-statistic  
