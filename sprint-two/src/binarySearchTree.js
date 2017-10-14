
var BSTNode = function(value) {
  var newBST = Object.create(BSTNode.prototype);
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;
  return newBST;
};

BSTNode.prototype.insert = function(value) {
  var depth;
  if (value > this.value) {
    if (this.right === null) {
      this.right = new BSTNode(value);
      depth = 1;
    } else {
      depth = 1 + this.right.insert(value);
    }
  } else {
    if (this.left === null) {
      this.left = new BSTNode(value);
      depth = 1;
    } else {
      depth = 1 + this.left.insert(value);
    }
  }
  
  return depth;
};


BSTNode.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else { 
    if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    } else {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } 
  } 
};

BSTNode.prototype.inOrderLog = function(iter) {
  if (this.left !== null) {
    this.left.inOrderLog(iter);
  } 
  iter(this.value);
  if (this.right !== null) {
    this.right.inOrderLog(iter);
  }   
};


BSTNode.prototype.depthFirstLog = function(iter) {
  iter(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(iter);
  } 
  if (this.right !== null) {
    this.right.depthFirstLog(iter);
  }   
};


BSTNode.prototype.breadthFirstLog = function(iter) {
  var myQueue = new Queue();
  var currElement = this;
  while (currElement !== undefined) {
    iter(currElement.value);
    if (currElement.left !== null) {
      myQueue.enqueue(currElement.left);
    } 
    if (currElement.right !== null) {
      myQueue.enqueue(currElement.right);
    } 
    currElement = myQueue.dequeue();
  }
};


var BinarySearchTree = function(value) {
  var newBST = Object.create(BinarySearchTree.prototype);
  newBST.root = BSTNode(value);
  newBST.count = 1;
  return newBST;
};

_.each(BSTNode.prototype, function(value, key) {
  BinarySearchTree.prototype[key] = function() {
    return this.root[key].apply(this.root, arguments);
  };
});

BinarySearchTree.prototype.insert = function(value) {
  this.count++;
  
  var depth = this.root.insert(value);
  
  if (depth > Math.floor(Math.log2(this.count)) + 1) {
    this.rebalance();
  }
};

BinarySearchTree.prototype.rebalance = function() {
  console.log("rebalncing..");
  
  var array = [];
  this.root.inOrderLog(function(value) { array.push(value); });
  var builder = function(start, end) {
    var middle = start + Math.floor((end - start) / 2);
    var newBST = BSTNode(array[middle]);
    if (middle !== start) {
      newBST.left = builder(start, middle);
    }
    if (middle !== end - 1) {
      newBST.right = builder(middle + 1, end);
    }
    
    return newBST;
  };
  
  var newBST = builder(0, array.length);
  this.root = newBST;
};

/*
 * Complexity: What is the time complexity of the above functions?
 Insert: O(log(n))
 Contains: O(log(n))
 depthFirstLog: O(n)
 bredthFirstLog: O(n)
 */
