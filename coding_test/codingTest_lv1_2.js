// 가운데 글자 가져오기
// 내풀이
function solution(s) {
  let answer = "";
  let len = s.length;

  for (let i = 0; i < len; i++) {
    if (len % 2 === 0) {
      answer += s[len / 2 - 1];
      return (answer += s[len / 2]);
    } else {
      return (answer += s[~~(len / 2)]);
    }
  }

  return answer;
}
// 다른풀이
function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}

// 수박수박수박수?
// 내풀이
function solution(n) {
  let answer = "";
  let check = true;
  for (let i = 0; i < n; i++) {
    check ? (answer += "수") : (answer += "박");
    check = !check;
  }
  return answer;
}
// 다른풀이
function solution(n) {
  return "수박".repeat(n).substr(0, n);
}

// 내적
// 내풀이
function solution(a, b) {
  return a.map((el, i) => el * b[i]).reduce((acc, cur) => acc + cur, 0);
}
// 다른풀이
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

// 문자열 내림차순으로 배치
function solution(s) {
  return s
    .split("")
    .sort((a, b) => {
      if (a > b) return -1;
      if (b > a) return 1;
      return 0;
    })
    .join("");
}

// 약수의 개수와 덧셈
function solution(left, right) {
  let answer = [];
  let count = 0;
  for (let i = left; i <= right; i++) {
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    count++;
    count % 2 === 0 ? answer.push(i) : answer.push(-i);
    count = 0;
  }

  return answer.reduce((acc, cur) => acc + cur, 0);
}

// 다른풀이  (제곱근이 정수면 약수의 개수가 홀수)
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

// 같은 숫자는 싫어
function solution(arr) {
  return arr.filter((v, i) => v != arr[i + 1]);
}

// 문자열 다루기 기본
function solution(s) {
  let regex = /^[0-9]+$/g;

  return (s.length === 4 || s.length === 6) && regex.test(s);
}

// 행렬의 덧셈
function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr2.length; i++) {
    answer.push(arr1[i].map((el, inx) => el + arr2[i][inx]));
  }
  return answer;
}

// 부족한 금액 계산하기
function solution(price, money, count) {
  let arr = [];
  let a = 0;

  for (let i = 1; i <= count; i++) {
    arr.push(a + price);
    a += price;
  }
  let total = arr.reduce((acc, cur) => acc + cur, 0);
  if (money < total) {
    return total - money;
  }
  return 0;
}

//리팩토링
function solution(price, money, count) {
  let answer = 0;

  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }

  return answer > money ? answer - money : 0;
}

//직사각형 별찍기
//내풀이
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let s = "";
  for (let i = 0; i < a; i++) {
    s += "*";
  }

  for (let i = 0; i < b; i++) {
    console.log(`${s}`);
  }
});
//다른풀이리 (repeat 활용)
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});

//최소직사각형
function solution(sizes) {
  let w = 0;
  let h = 0;
  for (let len of sizes) {
    const [a, b] = len.sort((a, b) => b - a);
    if (a > w) w = a;
    if (b > h) h = b;
  }

  return w * h;
}

//숫자 문자열과 영단어
function solution(s) {
  s = s
    .replace(/zero/g, 0)
    .replace(/one/g, 1)
    .replace(/two/g, 2)
    .replace(/three/g, 3)
    .replace(/four/g, 4)
    .replace(/five/g, 5)
    .replace(/six/g, 6)
    .replace(/seven/g, 7)
    .replace(/eight/g, 8)
    .replace(/nine/g, 9);
  return parseInt(s);
}

function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}

// 두개 뽑아서 더하기
function solution(numbers) {
  const arr = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(arr)].sort((a, b) => a - b);
}

//크기가 작은 부분문자열
function solution(t, p) {
  let arr = [];
  let len = p.length;

  for (let i = 0; i <= t.length - p.length; i++) {
    arr.push(t.substr(i, len));
  }

  return arr.filter((v) => +v <= +b).length;
}
