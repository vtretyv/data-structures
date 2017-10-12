var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.head = 0;
  newQueue.tail = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.head++] = val;
};

queueMethods.dequeue = function(val) {
  if (this.head > this.tail) {
    return this.storage[this.tail++];
  } else {
    return -1;
  }
  
};

queueMethods.size = function() {
  return this.head - this.tail;
};
