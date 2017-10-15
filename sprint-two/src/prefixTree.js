//Took Parent tree and reworked it
var PrefixTree = function() {
//a String in this case
  this.children = {};  // fixed
  this.isWord = false;
};

PrefixTree.prototype.contains = function(value) {
  var curNode = this;
  for (var i = 0; i < value.length; i++) {
    if (curNode.children[value[i]] !== undefined) {
      curNode = curNode.children[value[i]];
    } else {
      return false;
    }
  }
  return curNode.isWord;
};


PrefixTree.prototype.add = function(value) {
  var curNode = this;
  for (var i = 0; i < value.length; i++) {
    if (curNode.children[value[i]] !== undefined) {
      curNode = curNode.children[value[i]];
    } else {
      curNode.children[value[i]] = new PrefixTree();
      curNode = curNode.children[value[i]];
    }
  }
  curNode.isWord = true;

};

//



/*
 * Complexity: What is the time complexity of the above functions?
 */
 
 //contains: O(1)
 //add: O(1)
 

