

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var ll = this._storage.get(index);
  if (ll === undefined || ll === null) {
    ll = LinkedList();
    ll.addToTail({key: k, value: v});
    this._storage.set(index, ll);
  } else {
    var curNode = ll.head;
    while (curNode !== null) {
      if (curNode.value.key === k) {
        curNode.value.value = v;
      }
      curNode = curNode.next;
    }
    ll.addToTail({key: k, value: v});
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var ll = this._storage.get(index);
  var curNode = ll.head;
  var prevNode = null;
  
  while (curNode !== null) {
    
    if (curNode.value.key === k) {
      
      if (prevNode === null) {
        ll.removeHead();
      } else {
        prevNode.next = curNode.next;
      }
      
      return curNode.value.value;//why return?
    }
    
    prevNode = curNode;
    curNode = curNode.next;
  }
  
  return undefined;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var ll = this._storage.get(index);
  var curNode = ll.head;
  while (curNode !== null) {
    if (curNode.value.key === k) {
      return curNode.value.value;
    }
    curNode = curNode.next;
  }
  return undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


