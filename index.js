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
  return str.split("").sort().join("")
}

function returnEven(arr) {
  return arr.filter(function (val) { return val % 2 === 0 })
}

function checkEnding(str1, str2) {
  return str1.endsWith(str2);
}

function Go(num) {
  return "-".repeat(num);
}

function isFourLetters(arr) {
  return arr.filter(x => x.length === 4);
}

function addUp(num) {
  return (num * (num + 1)) / 2;
}

function minMax(arr) {
  arr.sort(function (a, b) { return a - b });
  return [arr[0], arr[arr.length - 1]];

}

function nameShuffle(str) {
  return str.split(' ').reverse().join(' ');
}

function reverse(bool) {
  if (typeof bool !== 'boolean') return "boolean expected"
  return !bool
}

function factorial(x) {
  if (x == 0)
    return 1;
  else
    return x * factorial(x - 1)
}

function MultiplyByLength(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr.length;
  }
  return arr
}

function missingNums(arr) {
  var sum = arr.reduce((a, b) => a + b, 0);
  return 55 - sum;
}

function doubleChars(str) {
  var chars = "";
  for (var i = 0, n = str.split("").length; i < n; i++) {
    chars += str[i] + str[i];
  }
  return chars;
}

function countVowels(str) {
  return str.match(/[aeiou]/g).length;
}

function timeForMilkAndCookies(date) {
  return date.getMonth() === 12 && date.getDate() === 24;
}

function minMaxLengthAverage(arr) {
  return [Math.min(...arr),
  Math.max(...arr),
  arr.length,
  arr.reduce((a, b) => a + b) / arr.length];
}

function myPi(n) {
  return Number(Math.PI.toFixed(n));
}

function formatPhoneNumber(numbers) {
  let arr = "(XXX) XXX-XXXX".split('');
  numbers.forEach(n => {
    arr[arr.indexOf('X')] = n;
  });
  return arr.join('');
}

const detectBrowser = (userAgent) => {
  return [
    {
      rgx: /(MSIE)|(Explorer)/g,
      name: 'Internet Explorer'
    },
    {
      rgx: /Firefox/g,
      name: 'Mozilla Firefox'
    },
    {
      rgx: /Chrome/g,
      name: 'Google Chrome'
    }
  ].find(e => e.rgx.test(userAgent)).name;
}

const regGenerator = () => {
  const singleOperators = [`=`, `\\+`, `\\-`, `\\/`, `\\*`, `<`, `>`, `<=`, `>=`, `<>`, `\\)`, `\\(`].join(`|`)
  const operatorsExceptSemiColon = `\\)?(?:${singleOperators})\\(?`
  const operatorsWithSemiColon = `\\)?(?:${singleOperators}|;)\\(?`
  const cell = `\\$?[a-z]+\\$?\\d+`
  const range = `[a-z]+\\d+:[a-z]+\\d+`
  const row = `\\$?\\d+:\\$?\\d*`
  const col = `\\$?[a-z]+:\\$?[a-z]+`

  const cellItem = `(?:${col})|(?:${row})|(?:${range})|(?:${cell})(?!\\w)`
  const weirdItem = `--`
  const numbersItem = `\\d+(?:,\\d+)?`
  const functionItem = `[A-Z]{2,}`
  const stringItem = `"\\w*"`

  const itemsForCaseOne = `[+-]*(?:${functionItem})|(?:${numbersItem})|(?:${weirdItem})|(?:${stringItem})`
  const caseOne = `(?:${operatorsExceptSemiColon})(?:${itemsForCaseOne})`

  const itemsForCaseTwo = `[+-]*(?:${cellItem})`
  const caseTwo = `(?:${operatorsWithSemiColon})(?:${itemsForCaseTwo})`

  const itemsForCaseThree = `[+-]*(?:${numbersItem}\\))`
  const caseThree = `(?:${operatorsWithSemiColon}(?:${itemsForCaseThree}))`

  return [new RegExp(`((?:(?:${caseTwo})|(?:${caseOne})|(?:${caseThree}))+)(.*)`, `i`), cellItem]

}

const highLightFormula = str => {

  const COLORS = [`#326ac7`, `#c0353e`, `#8157b7`, `#007c20`, `#b03e84`, `#b64900`, `#267392`]

  let reg, cellItem
    ;[reg, cellItem] = regGenerator()
  const match = str.match(reg)

  if (!match || str[0] !== `=`) return str

  let groupOne = match[1]
  let groupTwo = match[2]

  let colorIncrementor = 0
  const cellColorMap = new Map()

  const replacer = match => {
    let color
    let cell = match.replace(/\$/g, ``)

    if (cellColorMap.has(cell)) {
      color = cellColorMap.get(cell)
    } else {
      color = COLORS[colorIncrementor % 7]
      cellColorMap.set(cell, color)
      colorIncrementor++
    }

    const spanStart = `<span style="color:${color}">`
    const spanEnd = `</span>`

    return `${spanStart}${match}${spanEnd}`
  }

  return groupOne.replace(new RegExp(cellItem, `ig`), replacer) + groupTwo
}

