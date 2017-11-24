
// factory function that collects the descriptive stats of each group

const descriptives = sample => {
    const sum = sample.reduce((prev, curr) => curr += prev);
    return {
        population: sample.length,
        mean() {
            return sum / this.population
        }
    }
}
export default descriptives
