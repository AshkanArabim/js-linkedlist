import nodeFactory from "./node.mjs";

export default function listFactory() {
  let head = null;

  function append(node) {
    let temp = head;
    if (head === null) {
      // if empty, just add to head
      head = node;
    } else {
      // if not, go till the end
      while (temp.getNext() !== null) {
        temp = temp.getNext();
      }
      temp.setNext(node);
    }
  }

  function prepend(node) {
    let temp = head;
    // add to head, move old head (temp) to node.getNext()
    head = node;
    node.setNext(temp);
  }

  function size() {
    let temp = head;
    let count = 0;
    while (temp !== null) {
      temp = temp.getNext();
      count++;
    }
    return count;
  }

  // This replaces head() to avoid confusion with head.
  function getHead() {
    return head;
  }

  // renamed to match with getHead()
  function getTail() {
    let temp = head;
    while (temp.getNext() !== null) {
      temp = temp.getNext();
    }
    return temp;
  }

  function at(index) {
    let temp = head;
    for (let i = 0; i < index; i++) {
      temp = temp.getNext();
    }
    return temp;
  }

  function contains(val) {
    let temp = head;
    while (temp !== null) {
      if (temp.getData() === val) {
        return true;
      }
      temp = temp.getNext();
    }
    return false;
  }

  function find(val) {
    let temp = head;
    let count = 0;
    while (temp !== null) {
      if (temp.getData() === val) {
        return count;
      }
      count++;
      temp = temp.getNext();
    }
    return -1;
  }

  function toString() {
    let result = "[ ";
    let temp = head;
    while (temp.getNext() !== null) {
      result += `'${temp.getData()}', `;
      temp = temp.getNext();
    }
    result += `'${temp.getData()}' `;
    result += "]";
    return result;
  }

  function insertAt(index, value) {
    // if index is more than the length of the list
    // throw an error
    if (index > this.size()) {
      console.log(`index ${index} is out of range!!`);
    }

    let temp = head;
    // traverse, but stop one before the index
    for (let i = 0; i < index - 1; i++) {
      temp = temp.getNext();
    }
    // create a new node with value and the previous next, then assign that node to the current index's next
    let newNodeNext = temp.getNext();
    const newNode = nodeFactory(value);
    temp.setNext(newNode);
    newNode.setNext(newNodeNext);
  }

  function removeAt(index) {
    let temp = head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.getNext();
    }
    temp.setNext(temp.getNext().getNext());
  }

  function pop() {
    const len = this.size();
    const result = at(len - 1);
    removeAt(len - 1);
    return result;
  }

  return {
    append,
    prepend,
    size,
    getHead,
    getTail,
    at,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
    pop,
  };
}
