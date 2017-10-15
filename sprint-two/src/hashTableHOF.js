

var HashTableHOF = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTableHOF.prototype._findTuple = function(k, foundCallBack, notFoundCallBack) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  
  var ll = this._storage.get(index) || LinkedList();
  this._storage.set(index, ll);
  var curNode = ll.head;
  var prevNode = null;
  
  while (curNode !== null) {
    if (curNode.value[0] === k) {
      
      return foundCallBack.call(this, ll, curNode, prevNode);
      
    }
    
    prevNode = curNode;
    curNode = curNode.next;
  }
  
  
  return notFoundCallBack ? notFoundCallBack.call(this, ll) : undefined;
};


HashTableHOF.prototype.insert = function(k, v) {
  this._findTuple(k,
  function(ll, curNode, prevNode) {
    curNode.value[1] = v;
  },
  function(ll) {
    ll.addToTail([k, v]);
    
    this._count++;
    if (this._count / this._limit > 0.75) {
      this.resize(this._limit * 2);
    }
  });
};


HashTableHOF.prototype.remove = function(k) {
  return this._findTuple(k,
  function(ll, curNode, prevNode) {
    if (prevNode === null) {
      ll.removeHead();
    } else {
      prevNode.next = curNode.next;
    }
    this._count--;
    if (this._count / this._limit < 0.25 && this._limit > 8) {
      this.resize(this._limit / 2);
    }
    return curNode.value[0];
  });
};

HashTableHOF.prototype.retrieve = function(k) {
  return this._findTuple(k,
  function(ll, curNode, prevNode) {
    return curNode.value[1];
  });
};

HashTableHOF.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var ll = this._storage.get(index);
  var curNode = ll.head;
  while (curNode !== null) {
    if (curNode.value[0] === k) {
      return curNode.value[1];
    }
    curNode = curNode.next;
  }
  return undefined;
};

HashTableHOF.prototype.resize = function(size) {
  this._limit = size;
  var oldStorage = this._storage;
  this._storage = LimitedArray(this._limit);
  var thisTable = this;
  oldStorage.each(function(bucket) {
    if (bucket !== undefined) {
      var curNode = bucket.head;
      while (curNode !== null) {
        thisTable._count--;
        thisTable.insert(curNode.value[0], curNode.value[1]);
        curNode = curNode.next;
      }
    }
  });
};