describe('bloomFilter', function() {
  var bloomFilter;

  beforeEach(function() {
    bloomFilter = new BloomFilter(18);
  });
  
  
  it('should add the hashed values', function() {
    bloomFilter.add('string1');
    expect(bloomFilter.contains('string1')).to.equal(true);
    expect(bloomFilter.contains('string2')).to.equal(false);
    
  });

});