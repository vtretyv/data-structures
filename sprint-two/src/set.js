var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  set._objStorage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (item instanceof Object) {
    this._objStorage[JSON.stringify(item)] = item;
  } else {
    this._storage[item] = item;
  }
  
};

setPrototype.contains = function(item) {
  if (item instanceof Object) {
    return this._objStorage.hasOwnProperty(JSON.stringify(item));
  } else {
    return this._storage.hasOwnProperty(item);
  }
  
};

setPrototype.remove = function(item) {
  if (item instanceof Object) {
    delete this._objStorage[JSON.stringify(item)];
  } else {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 
 //all constant
