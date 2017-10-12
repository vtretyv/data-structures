var Tree = function(value) {
  var newTree = Object.create(treeMethods);

  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  
  return _.some(this.children, function(child) {
    return child.contains(target);
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 
 //addChild: constant
 //contains: O(n)
