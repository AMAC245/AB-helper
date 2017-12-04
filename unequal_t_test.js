const { descriptives, variance, x, y } = require('./descriptives');
const { sum, mean } = require('./utils/higher-orders');
const t_table = require('./t_test');

const unequal_t_test = (x, y) => {
    const sd_util = sample => {
        return variance(sample) / descriptives(sample).population
    }

    const t_stat = (mean(x) - mean(y)) / 
                   (Math.sqrt(sd_util(x) + sd_util(y)))

    const _df = Math.round((sd_util(x) + sd_util(y)) ** 2 /
                (((sd_util(x) ** 2) / descriptives(x).df) +
                ((sd_util(y) ** 2) / descriptives(y).df)))
    
    return t_stat < t_table[_df]
        ? false 
        : true
}

const compare = (control, treatment) => ({
    significance: unequal_t_test(control, treatment)
})

