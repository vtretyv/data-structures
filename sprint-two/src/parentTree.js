var ParentTree = function(value) {
  var newTree = Object.create(parentTreeMethods);

  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fixed
  

  return newTree;
};

var parentTreeMethods = {};

parentTreeMethods.addChild = function(value) {
  var newTree = ParentTree(value);
  newTree.parent = this;
  this.children.push(newTree);
};

parentTreeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  
  return _.some(this.children, function(child) {
    return child.contains(target);
  });
};

parentTreeMethods.removeFromParent = function() {
  var i = this.parent.children.indexOf(this);
  this.parent.children.splice(i, 1);
  this.parent = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 
 //addChild: constant
 //contains: O(n)
 //removeFromParent: O(n);
