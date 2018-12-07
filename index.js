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

function lessThanOrEqualToZero(num) {
  return num <= 0;
}


function reverseString(str) {
  return str;
}
reverseString("hello");

function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");

//new way to look at it
function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");

function findLongestWord(str) {
  return str.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

function findLongestWord(str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

//reverse single linked list

function reverseList(list) {
  if (list.length < 2) {
    return;
  }

  let first = list.head;
  let second = first.next;

  while (second) {
    const temp = second.next;
    second.next = first;
    first = second;
    second = temp;
  }

  list.head.next = null;
  list.head = first;
}

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}


// if(loc_array[loc_array.length-1] == 'index.html'){
//add it
//.ToLowerCase()
//  }else{
//can leave empty so it doesn't add
//  }

function comp(str1, str2) {
  return str1.length === str2.length;
}

function month_name(num) {
  let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let month = monthArray[num - 1]
  return month
}


function WordCount(str) {
  return str.split(" ").length;
}

console.log(WordCount("hello world"));

// function findSmallestNum(arr) {
// 	Math.min(arr)
// }

// console.log findSmallestNum(5, 10);

// function findLargestNum(arr) {
//   	Math.max(arr)
//   }

//   console.log findLargestNum(5, 10)

function stretchTruth(num, str, arr) {
  var x = 0, y = 1;
  for (var i in arr) {
    if (arr[i] === num) x++;
    if (arr[i] === str) y++;
  }
  return x + y;
}

function reverse(str) {
  return str.split("").reverse().join("");
}

function alphabetSoup(str) {
  return str.split(”).sort().join(”)
}

function returnEven(arr) {
  return arr.filter(function (val) { return val % 2 === 0 })
}