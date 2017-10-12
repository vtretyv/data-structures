

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

var graphNode = function(value) {
  var node = {};

  node.value = value;
  node.neighbors = {};

  return node;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  this.nodes[value] = new graphNode(value);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  console.log(this);
  for (var key in this.nodes) {
    if (this.nodes[key].value === value) {
      return true;
    }
  }
  
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.nodes[node].neighbors) {
    this.removeEdge(node, this.nodes[node].neighbors[key]);
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].neighbors.hasOwnProperty(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].neighbors[toNode] = toNode;
  this.nodes[toNode].neighbors[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode].neighbors[toNode];
  delete this.nodes[toNode].neighbors[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(this.nodes[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 
 //addNode: constant
 //removeNode: O(e), ~(e/n)
 //contains: O(n)
 //hasEdge: constant
 //removeEdge: constant
 //addEdge: constant
 //forEach: O(n)


