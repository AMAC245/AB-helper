# AB-helper


Compare is a module I am currently working on to help provide an easy way to run preliminary comparisons on A/B datasets. The factory function will analyse the variance and descriptives, then run the appropriate statitisical analyses in order to test for any statistically significant differences. 

```
const control = [1,2,3,4,5]
const treatment = [6,7,8,9,10]

compare(control, treatment)
```
