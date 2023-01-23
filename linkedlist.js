function nodeFactory(data) {
  let next = null;
  function getData() {
    return data;
  }
  function getNext() {
    return next;
  }
  function setData(newVal) {
    data = newVal;
  }
  function setNext(newNode) {
    next = newNode;
  }
  return { getData, getNext, setData, setNext };
}

function listFactory() {
  let head = null;

  function append(node) {
    let temp = head;
    if (head === null) {
      // if empty, just add to head
      head = node;
    } else {
      // if not, go till the end
      while (node.next !== null) {
        temp = temp.next;
      }
      temp.next = node;
    }
  }

  function prepend(node) {
    let temp = head;
    // add to head, move old head (temp) to node.next
    head = node;
    node.next = temp;
  }

  function size() {
    let temp = head;
    let count = 0;
    while (temp !== null) {
      temp = temp.next;
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
    while (temp.next !== null) {
      temp = temp.next;
    }
    return temp;
  }

  function at(index) {
    let temp = head;
    for (let i; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  function contains(val) {
    let temp = head;
    while (temp !== null) {
      if (temp.getData() === val) {
        return true;
      }
      temp = temp.next;
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
      temp = temp.next;
    }
    return -1;
  }

  function toString() {
    let result = "[ ";
    let temp = head;
    while (temp !== null) {
      result += `'${temp.getData()}', `;
      temp = temp.next;
    }
    result += "]";
  }

  function insertAt(index, value) {
    let temp = head;
    // traverse, but stop one before the index
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    // create a new node with value and the previous next, then assign that node to the current index's next
    newNodeNext = temp.next;
    temp.next = nodeFactory(value);
    nodeFactory.setNext(newNodeNext);
  }

  function removeAt(index) {
    let temp = head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    temp.next = temp.next.next;
  }

  function pop() {
    const len = this.size();
    const result = at(len);
    removeAt(len);
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

module.exports = {nodeFactory, listFactory};