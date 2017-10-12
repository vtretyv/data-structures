var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var head = 0;
  var tail = 0;

  someInstance.enqueue = function(value) {
    storage[tail++] = value;
  };

  someInstance.dequeue = function() {
    if (tail > head) {
      return storage[head++];
    } else {
      return -1;
    }
  };

  someInstance.size = function() {
    return tail - head;
  };

  return someInstance;
};
