export default function nodeFactory(data) {
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
