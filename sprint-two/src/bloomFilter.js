var BloomFilter = function(m) {
  this.m = m;
  this._hashStorage = (new Array(this.m)).fill(false);
};

BloomFilter.prototype.add = function(val) {
  this._hashStorage[hash1(val, this.m)] = true;
  this._hashStorage[hash2(val, this.m)] = true;
  this._hashStorage[hash3(val, this.m)] = true;
};

BloomFilter.prototype.contains = function(val) {
  return this._hashStorage[hash1(val, this.m)] &&
         this._hashStorage[hash2(val, this.m)] &&
         this._hashStorage[hash3(val, this.m)];
};


var hash1 = function(str, max) {
  var hash = 7;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var hash2 = function(str, max) {
  var hash = 7;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 7) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var hash3 = function(str, max) {
  var hash = 7;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 11) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};