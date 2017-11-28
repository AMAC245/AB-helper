// higher-orders
const sum = sample => {
    return sample.reduce((prev, curr) => curr += prev);
};

const mean = sample => {
    return sum(sample) / sample.length
}


// factory function that returns the descriptive stats for a given sample

const descriptives = sample => {
    
    if (Object.prototype.toString.call(sample) !== '[object Array]') {
        throw new Error ('samples must be an array')
    }
    
    return {
        population: sample.length,
        mean: mean(sample),
        sd: sd(sample),
        df: population - 1
    }
}

// sample standard deviation
const sd = sample => {
    
    const calculateIndex = sample.map(index => {
        return (index - mean(sample)) ** 2
    });
    
    const sampleVariance = (sum(calculateIndex)) / (sample.length - 1)
    
    return Math.sqrt(sampleVariance)
}

// determines whether the two sample variances are equal or not
const f_statistic = (control, treatment) => { 
    if( arguments.length === 2 ) {
        
        
        
        const dfx = control.length -1
        const dfy = treatment.length -1 
        
        const key = [dfx, dfy]
        const crit_value = f_table[key] 
        
       
        const f_stat = 
             return sd(control) > sd(treatment)
                ? sd(control) / sd(treatment)
                : sd(treatment) / sd(control)
    
         return f_stat > crit_value 
                ? 'unequal' 
                : 'equal'
    } else {
        return 'not applicable - only required with two samples'
    }
    
}

if (f_statistic === 'unequal' ) {
    (descriptives(control).mean - descriptives(treatment).mean)
}    


// effect size 
if ( twoSample === true ) {
    const sd_pooled = (control, treatment) => {
        const val = ( sd(control)**2 + sd(treatment)**2 ) / 2
        return Math.sqrt(val)
    }

    const effect_size = () => {
        return (mean(treatment) - mean(control)) / sd_pooled
    }
}
    
    
export default descriptives
