function returnTrue() {
  return true;
}

function addition(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Sorry but you didn't pass two numbers.";
  }
  return a + b;
}

function addition(num) {
  return num++
}

function getLastItem(arr) {
  return arr.pop();
}

function find_index(lst, str) {
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] === str) {
      return i;
    }
  }
}

