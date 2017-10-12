var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    length: 0,
  };

  // Implement the methods below
  someInstance.push = function(value) {
    storage[storage.length++] = value;
  };

  someInstance.pop = function() {
    if (storage.length > 0) {
      return storage[--storage.length];
    } else {
      return -1;
    }
  };

  someInstance.size = function() {
    console.log(storage);
    return storage.length;
  };

  return someInstance;
};
