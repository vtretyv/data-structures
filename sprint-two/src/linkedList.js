var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.tail !== null) {
      this.tail.next = Node(value);
      this.tail = this.tail.next;
    } else {
      this.tail = Node(value);
      this.head = this.tail;
    }
  };

  list.removeHead = function() {
    if (this.head !== null) {
      tmp = this.head;
      this.head = this.head.next;
    }
    return tmp.value;
  };

  list.contains = function(target) {
    var curNode = this.head;
    while (curNode !== null) {
      if (curNode.value === target) {
        return true;
      }
      curNode = curNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 
 //addToTail: constant
 //removeHead: constant
 //contains: O(n)
