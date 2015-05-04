'use strict';

var BellmanFord = require('bellmanford');

var nodeList = new BellmanFord.NodeList();

for (var i = 0; i < 6; i+=1) {
   nodeList.addNode(new BellmanFord.Node());
}

var nodeArray = nodeList.toArray();

var edgeMap = new BellmanFord.EdgeMap(nodeList);

edgeMap.setEdge(nodeArray[0], nodeArray[1], 3);
edgeMap.setEdge(nodeArray[0], nodeArray[2], 2);
edgeMap.setEdge(nodeArray[0], nodeArray[3], 5);

edgeMap.setEdge(nodeArray[1], nodeArray[3], 1);
edgeMap.setEdge(nodeArray[1], nodeArray[4], 4);

edgeMap.setEdge(nodeArray[2], nodeArray[3], 2);
edgeMap.setEdge(nodeArray[2], nodeArray[5], 1);

edgeMap.setEdge(nodeArray[3], nodeArray[4], 3);

edgeMap.setEdge(nodeArray[4], nodeArray[5], 2);

var graph = new BellmanFord.Graph(nodeList, edgeMap);

var shortestPaths = graph.getShortestPathsSync(nodeArray[0]);
console.log(shortestPaths);