// 평균구하기
function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur) / arr.length;
}

// 약수구하기
for (let i = 1; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    divisors.push(i);
    if (n / i != i) divisors.push(n / i);
  }
}

// 자연수 배열로 뒤집기
(n + "")
  .split("")
  .reverse()
  .map((v) => +v);

//자릿수 더하기
function solution(n) {
  let a = String(n)
    .split("")
    .reduce((acc, cur) => acc + +cur, 0);

  return a;
}

// 자릿수 뒤집어 배열로 만들기
function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((v) => +v);
}

//문자열 내 p와 y의 개수
function solution(s) {
  let pNum = 0;
  let yNum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "y" || s[i] === "Y") {
      yNum++;
    }
    if (s[i] === "p" || s[i] === "P") {
      pNum++;
    }
  }

  if (pNum === 0 && yNum === 0) return true;
  if (pNum === yNum) return true;
  if (pNum !== yNum) return false;
}

//정수 제곱근 판별하기
//내풀이
function solution(n) {
  if (n === Math.pow(Math.floor(Math.sqrt(n)), 2))
    return Math.pow(Math.floor(Math.sqrt(n)) + 1, 2);
  return -1;
}

function solution(n) {
  return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

// 문자열을 정수로 바꾸기
function solution(s) {
  return Number(s);
}
function strToInt(str) {
  return str / 1;
}
function strToInt(str) {
  return +str;
}

// 정수 내림차순으로 배치하기
function solution(n) {
  let a = (n + "")
    .split("")
    .sort((a, b) => b - a)
    .map((v) => +v)
    .join("");

  return +a;
}

//x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  let answer = [];
  let a = 0;
  for (let i = 0; i < n; i++) {
    a += x;
    answer.push(a);
  }
  return answer;
}

//하샤드 수
function solution(x) {
  let arr = (x + "").split("").map((v) => +v);
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
  }
  if (x % num === 0) {
    return true;
  } else {
    return false;
  }
}

// 나머지가 1이 되는 수 찾기
//내풀이
function solution(n) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      return (answer = i);
    }
  }
}

function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

// 두 정수 사이의 합
function solution(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  let num = 0;
  for (let i = min; i <= max; i++) {
    num += i;
  }
  return num;
}

// 서울에서 김서방 찾기
//내풀이
function solution(seoul) {
  let answer = "";
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      return (answer = `김서방은 ${i}에 있다`);
    }
  }
}

function findKim(seoul) {
  let idx = seoul.indexOf("Kim");
  return "김서방은 " + idx + "에 있다";
}

// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  let answer = [];
  let check = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
      check = true;
    }
  }
  return check ? answer.sort((a, b) => a - b) : [-1];
}

function solution(arr, divisor) {
  let answer = arr.filter((v) => v % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

//핸드폰 번호 가리기
//내풀이
function solution(phone_number) {
  var answer = "";
  for (let i = 0; i < phone_number.length; i++) {
    if (i > phone_number.length - 5) {
      answer += phone_number[i];
    } else {
      answer += "*";
    }
  }
  return answer;
}

//다른풀이
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

function hide_numbers(s) {
  let result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}

//제일 작은 수 제거하기
//내풀이
function solution(arr) {
  let min = Math.min(...arr);

  return arr.length === 1 ? [-1] : arr.filter((v) => v !== min);
}
//다른풀이

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}

//없는 숫자 구하기
function solution(numbers) {
  let total = 0;
  for (let i = 0; i <= 9; i++) {
    total += i;
  }

  return total - numbers.reduce((acc, cur) => acc + cur, 0);
}

// 음양 더하기
function solution(absolutes, signs) {
  return absolutes
    .map((v, i) => (signs[i] ? v : -v))
    .reduce((acc, cur) => acc + cur, 0);
}

//콜라츠 추측

function solution(num) {
  let answer = 0;
  let a = num;
  while (a != 1) {
    answer++;
    if (a % 2 === 0) {
      a = a / 2;
      continue;
    }
    if (a % 2 != 0) {
      a = a * 3 + 1;
    }
  }
  if (answer > 500) {
    return -1;
  }

  return answer;
}

//다른풀이
function collatz(num) {
  let answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
