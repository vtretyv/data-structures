var Stack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.length = 0;
  _.extend(newStack, stackMethods);
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

