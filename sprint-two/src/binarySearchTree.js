var BinarySearchTree = function(value) {
  var newBST = Object.create(BinarySearchTree.prototype);
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;
  return newBST;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
    
  } 
};


BinarySearchTree.prototype.contains = function(value) {
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


BinarySearchTree.prototype.depthFirstLog = function(iter) {
  iter(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(iter);
  } 
  if (this.right !== null) {
    this.right.depthFirstLog(iter);
  }   
};


/*
 * Complexity: What is the time complexity of the above functions?
 Insert: O(log(n))
 Contains: O(log(n))
 depthFirstLog: O(n)
 */
