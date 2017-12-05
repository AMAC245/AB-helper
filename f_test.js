const { sd, df } = require('./descriptives')
 
const f_test = (ctrl, trtmt) => {
       const f_stat = sd(ctrl) > sd(trtmt)
           ? sd(ctrl) / sd(trtmt) 
           : sd(trtmt) / sd(ctrl) 
    
       ctrl.df = descriptives(ctrl).df
       trtmt.df = descriptives(trtmt).df
        
       const index = keys.findIndex((value, key) => {
           if ( value[0] === ctrl.df && 
                value[1] === trtmt.df ) {
               return key
           }
       })
            
       return f_stat > values[index]
           ? descriptives.variance = 'unequal'
           : descriptives.variance = 'equal'
   }
    
module.exports = f_test
