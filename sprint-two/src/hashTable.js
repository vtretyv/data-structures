

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  
  this._count++;
  if (this._count / this._limit > 0.75) {
    this.resize(this._limit * 2);
  }
  
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
  
  this._count--;
  if (this._count / this._limit < 0.25 && this._count > 8) {
    this.resize(this._limit / 2);
  }
  
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

HashTable.prototype.resize = function(size) {
  this._limit = size;
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  var thisTable = this;
  oldStorage.each(function(bucket) {
    if (bucket !== undefined) {
      var curNode = bucket.head;
      while (curNode !== null) {
        thisTable._count--;
        console.log(curNode);
        thisTable.insert(curNode.value.key, curNode.value.value);
        curNode = curNode.next;
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 Insert: O(1);
 Remove: O(1);
 Retrieve: O(1);
 */


