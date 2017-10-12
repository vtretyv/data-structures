var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.length = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.length++] = val;
};

stackMethods.pop = function(val) {
  if (this.length > 0) {
    return this.storage[--this.length];
  } else {
    return -1;
  }
  
};

stackMethods.size = function() {
  return this.length;
};


