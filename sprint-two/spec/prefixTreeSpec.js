describe('prefixTree', function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = new PrefixTree();
  });
  
  it('should have methods named "add" and "contains"', function() {
    expect(prefixTree.add).to.be.a('function');
    expect(prefixTree.contains).to.be.a('function');
  });
  
  it('should add values into the tree', function() {
    prefixTree.add('hello');
    prefixTree.add('goodbye');
    expect(prefixTree.contains('hello')).to.equal(true);
    expect(prefixTree.contains('goodbye')).to.equal(true);
  });
  
  it('should not contain values not added into the tree', function() {
    prefixTree.add('hello');
    prefixTree.add('goodbye');
    expect(prefixTree.contains('somehting')).to.equal(false);
    expect(prefixTree.contains('good')).to.equal(false);
  });
  
});