
// factory function that collects the descriptive stats of each group

const descriptives = sample => {
    const sum = sample.reduce((prev, curr) => curr += prev);
    
    return {
        population: sample.length,
        
        mean() {
            return sum / this.population
        },
        
        sd() {
            const calculateIndex = sample.map(index => {
                return (index - this.mean()) ** 2
            });
            return indexIterator
                .reduce((prev, curr) => curr += prev) // ::: extract to higher-order (duplicating mean logic) :::
                / this.population
        }  
    }
    
}

// :::higher-orders::: 
const sum = sample => {
    return sample.reduce((prev, curr) => curr += prev);
};

const mean = sample => {
    return sum(sample) / sample.length
}


// ::factory function that returns the descriptive stats for a given sample::

const descriptives = sample => {
    return {
        population: sample.length,
        mean: mean(sample),
        sd: sd(sample)
    }
}

// ::SAMPLE STANDARD DEVIATION::
const sd = sample => {
    
    const calculateIndex = sample.map(index => {
        return (index - mean(sample)) ** 2
    });
    
    const sampleVariance = (sum(calculateIndex)) / (sample.length - 1)
    
    return Math.sqrt(sampleVariance)
}

// determines whether the two sample variances are equal or not
const f_statistic = (control, treatment) => {
    const crit_value = 2.25; 
  
    const f_stat = 
          return sd(control) > sd(treatment)
            ? sd(control) / sd(treatment)
            : sd(treatment) / sd(control)
    
    return f_stat > crit_value 
            ? 'unequal' 
            : 'equal'
}

if (f_statistic === 'unequal' ) {
    (descriptives(control).mean - descriptives(treatment).mean)
}    
export default descriptives
