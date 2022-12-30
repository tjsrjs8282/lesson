//n의 배수 고르기
//정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
function solution(n, numlist) {
  let answer = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) {
      answer.push(numlist[i]);
    }
  }
  return answer;
}

function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

//암호 해독
// 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.
// 암호화된 문자열 cipher를 주고받습니다.
// 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(cipher, code) {
  var answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}

//필터의 두번째 index 를 활용.
function solution(cipher, code) {
  return cipher
    .split("")
    .filter((_, index) => (index + 1) % code === 0)
    .join("");
}

//주사위의 개수
//머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다.
//상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때,
//상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(box, n) {
  return ~~(box[0] / n) * ~~(box[1] / n) * ~~(box[2] / n);
}

function solution(box, n) {
  let answer = 1;
  for (i = 0; i < 3; i++) answer *= Math.floor(box[i] / n);
  return answer;
}

//가위 바위 보
//가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때,
// rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.
function solution(rsp) {
  let answer = "";
  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] === "2") {
      answer += "0";
    } else if (rsp[i] === "0") {
      answer += "5";
    } else {
      answer += "2";
    }
  }
  return answer;
}

//객체를 사용한 방법 (다른사람)
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join("");
  return answer;
}

//가장 큰 수 찾기
//정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
function solution(array) {
  var answer = [];
  let max = Math.max(...array);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === max) {
      answer.push(max, array.indexOf(max));
    }
  }
  return answer;
}

//약수 구하기
//정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
function solution(n) {
  var answer = [];
  for (let i = 0; i < n + 1; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}

//배열 회전시키기
//정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
//배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers, direction) {
  var answer = [];
  let len = numbers.length;

  if (direction === "left") {
    for (let i = 1; i < numbers.length; i++) {
      answer.push(numbers[i]);
    }
    answer.push(numbers[0]);
  }
  if (direction === "right") {
    answer.push(numbers[len - 1]);
    for (let i = 0; i < numbers.length - 1; i++) {
      answer.push(numbers[i]);
    }
  }

  return answer;
}

//다른사람 풀이 pop()  과  shift() 활용
// push 메서드 : 배열의 마지막에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
// pop 메서드 : 배열의 마지막 요소를 제거한 후, 제거한 요소를 반환
// unshift 메서드 : 배열의 첫 번째 자리에 새로운 요소를 추가한 후, 변경된 배열의 길이를 반환
// shift 메서드 : 배열의 첫 번째 요소를 제거한 후, 제거한 요소를 반환
function solution(numbers, direction) {
  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}

//외계행성의 나이
//우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다.
// 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다.
// a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다.
//나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.
function solution(age) {
  age = age.toString();
  let answer = "";
  let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  for (let i = 0; i < age.length; i++) {
    answer += abc[age[i]];
  }
  return answer;
}

//다른사람 풀이
function solution(age) {
  let char = "abcdefghij";
  return Array.from(age.toString())
    .map((num) => char[+num]) //num 앞에 +를 붙이면 문자열이 숫자로 변함
    .join("");
}

//피자 나눠 먹기 (2)
//머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다.
// 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때,
// n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면
// 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
const solution = (n) => {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece += 6;
  }

  return piece / 6;
};

//직각삼각형 출력하기
//"*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다.
// 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const num = Number(input[0]);
  let logStr = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      logStr += "*";
    }
    logStr += "\n";
  }
  console.log(logStr);
});

//다른사람풀이

//repeat 활용하기  문자열 반복하기
rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  solution(Number(input[0]));
});
//함수생성
function solution(n) {
  for (let i = 1; i < n + 1; i++) {
    console.log("*".repeat(i));
  }
}
