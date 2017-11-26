describe('descriptive_stats', function() { 
    const data = [1,2,3,4,5]
    
    it('should return the sum', () => {
        expect(sum(data)).toBe(15)
    })
    
    it('should return the mean of a sample', () => { 
        expect(mean(data)).toBe(3);
    })
    
    it('should throw if sample is not an array', () => {
        expect(descriptives(data)).toBe(true);
        //include potential false positive issue
    }
    
});
