var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.head++] = val;
};

Queue.prototype.dequeue = function() {
  if (this.head > this.tail) {
    return this.storage[this.tail++];
  } else {
    return -1;
  }
};

Queue.prototype.size = function() {
  return this.head - this.tail;
};


