const { descriptives, variance, x, y } = require('./descriptives');
const { sum, mean } = require('./utils/higher-orders');
const t_table = require('./t_table');

const unequal_t_test = (ctrl, trtmt) => {
    const sd_util = sample => {
        return variance(sample) / descriptives(sample).population
    }

    const t_stat = (mean(ctrl) - mean(trtmt)) / 
                   (Math.sqrt(sd_util(ctrl) + sd_util(trtmt)))

    const _df = Math.round((sd_util(ctrl) + sd_util(trtmt)) ** 2 /
                (((sd_util(ctrl) ** 2) / descriptives(ctrl).df) +
                ((sd_util(trtmt) ** 2) / descriptives(trtmt).df)))
    
    return t_stat > t_table[_df]
        ? compare.significance = true
        : compare.significance = false
}

const compare = (control, treatment) => ({
    significance: unequal_t_test(control, treatment)
})
console.log(compare(x,y))

// ADD ERROR HANDLERS FOR T_TABLE _df over 120 / _df negative





 let _df = (sd_util(ctrl) + sd_util(trtmt)) ** 2,
     _df = _df / ((sd_util(ctrl)  ** 2) / (descriptives(ctrl).df) +
                 ((sd_util(trtmt) ** 2) / (descriptives(trtmt).df)),
                  
     _df < 0
        ? _df = Math.round(Math.abs(_df))
        : _df = Math.round(_df)
  
                  
  const dfx = (sd_util(ctrl) + sd_util(trtmt)) ** 2
  const dfy = ((sd_util(ctrl)  ** 2) / (descriptives(ctrl).df) + 
              ((sd_util(trtmt) ** 2) / (descriptives(trtmt).df))
        
  const dfr = dfx / dfy < 0
               ? 
               
