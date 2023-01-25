// this whole file is just here to test all the functions
// you can also use it as documentation

import nodeFactory from "./node.mjs";
import listFactory from "./linkedlist.mjs";

// create node
const node1 = nodeFactory("1"); // works
const node2 = nodeFactory("2");
const node3 = nodeFactory(3);
const node4 = nodeFactory("lol");
console.log(node1.getData());
console.log(node2.getData());

// create list
const list1 = listFactory();
console.log(list1); // works

// append
list1.append(node1);
list1.append(node2);

// prepend
list1.prepend(node4);
list1.prepend(node3);

// size
console.log("size:");
console.log(list1.size());

// head
console.log("head");
console.log(list1.getHead().getData());

// tail
console.log("tail");
console.log(list1.getTail().getData());

// at
console.log("at");
console.log(list1.at(1).getData());

// pop
console.log("pop");
console.log(list1.pop().getData());

// contains
console.log("contains");
console.log(list1.contains(3));
console.log(list1.contains("5"));

// find
console.log("find");
console.log(list1.find(3));

// insertAt
console.log("insertat");
list1.insertAt(1, "LOREM");
list1.insertAt(4, "bro");

// removeat


// tostring
console.log("list items: ");
console.log(list1.toString());
