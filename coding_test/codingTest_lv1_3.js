// 최대공약수와 최소공배수
function solution(n, m) {
  let answer = [];
  let gcd = 1;
  let lcm = 1;

  while (true) {
    if (lcm % n == 0 && lcm % m == 0) {
      break;
    }
    lcm++;
  }

  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }

  answer.push(gcd);
  answer.push(lcm);

  return answer;
}

// 이상한 문자 만들기
function solution(s) {
  let answer = "";
  let words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j % 2 === 0) {
        answer += words[i][j].toUpperCase();
      } else {
        answer += words[i][j].toLowerCase();
      }
    }
    if (i < words.length - 1) {
      answer += " ";
    }
  }
  return answer;
}

// 삼총사
function solution(number) {
  let answer = 0;

  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}

// 예산
function solution(d, budget) {
  let count = 0;
  let bud = budget;
  let arr = d.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (bud < arr[i]) {
      return count;
    }
    bud -= arr[i];
    count++;
  }
  return count;
}

// 시저암호
// 다른사람풀이
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}

function solution(s, n) {
  var chars =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          ";
  return s
    .split("")
    .map((e) => chars[chars.indexOf(e) + n])
    .join("");
}

// 저주의 숫자
// 내풀이..망함
function solution(n) {
  var a = [];
  let b = [];
  for (let i = 1; i < 200; i++) {
    if (i % 3 === 0) {
      continue;
    }
    i = i + "";

    if (i[0] === "3") {
      continue;
    }
    if (i[1] === "3") {
      continue;
    }
    if (i[2] === "3") {
      continue;
    }
    a.push(i);
  }

  return a.map((v) => +v)[n - 1];
}

// 다른사람풀이
function solution(n) {
  let arr = [];
  let num = 0;
  while (arr.length !== n && ++num)
    if (num % 3 !== 0 && !("" + num).includes("3")) arr.push(num);
  return arr.pop();
}
function solution(n) {
  return [...Array(n * 3)]
    .map((_, i) => i + 1)
    .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}

// OX퀴즈
// 내풀이
function solution(quiz) {
  let answer = [];
  for (let i = 0; i < quiz.length; i++) {
    let [num1, a, num2, _, value] = quiz[i].split(" ");

    num1 *= 1;
    num2 *= 1;

    if (a == "+") {
      if (num1 + num2 == value) {
        answer.push("O");
      } else {
        answer.push("X");
      }
    }
    if (a == "-") {
      if (num1 - num2 == value) {
        answer.push("O");
      } else {
        answer.push("X");
      }
    }
  }

  return answer;
}
