
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
export default descriptives
