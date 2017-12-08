# AB-helper


Compare is a module I am currently working on to help provide an easy way to run preliminary comparisons on A/B datasets. The factory function will analyse the variance and descriptives, then run the appropriate statitisical analyses in order to test for any statistically significant differences. 

```
const control = [1,2,3,4,5]
const treatment = [6,7,8,9,10]

compare(control, treatment)
```

In addition, ```descriptives()``` is a factory function that allows you to insert single samples and retrieve common descriptive statistics which can be used for further analyses. Most notably, it filters for outliers that may exist in your dataset which is critical for forming more accurate representations of your data and subsequent conclusions. 
