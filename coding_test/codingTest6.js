//인덱스 바꾸기
//문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
function solution(my_string, num1, num2) {
  var answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (i === num1) {
      answer += my_string[num2];
    } else if (i === num2) {
      answer += my_string[num1];
    } else {
      answer += my_string[i];
    }
  }
  return answer;
}
//다른사람 풀이 (구조분해 할당으로 풀이 함)
function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}

//숫자 찾기
//정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고
//없으면 -1을 return 하도록 solution 함수를 완성해보세요.
function solution(num, k) {
  let a = [...(num + "")].indexOf(k + "");
  return a !== -1 ? a + 1 : -1;
}
//indexOf
//문자열(string)에서 특정 문자열(searchvalue)을 찾고,
//검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴합니다.
//찾는 문자열이 없으면 -1을 리턴합니다

//369게임
//머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신
// 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때,
// 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.
function solution(order) {
  var answer = 0;
  let a = [...(order + "")];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === "3" || a[i] === "6" || a[i] === "9") {
      answer++;
    }
  }
  return answer;
}

//다른사람 풀이 (정규식표현 활용)\
//matchAll의 경우 정규식에 g 플래그가 없으면 TypeError가 발생하니 주의가 필요
//정규식 조건애 해달되는것만 배열로 뽑아줌
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}

//문자열 정렬하기 (2)
//영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때,
//my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
function solution(my_string) {
  let a = [...my_string.toLowerCase()];

  return a
    .sort((a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
    })
    .join("");
}

//다른사람 풀이..
function solution(my_string) {
  return my_string.toLowerCase().split("").sort().join("");
}

//최댓값 만들기 (2)  //못풀음
//정수 배열 numbers가 매개변수로 주어집니다.
//numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let answer = [];
  // 모든 경우의 수를 구함
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        answer.push(numbers[i] * numbers[j]);
      }
    }
  }

  //최댓값 출력
  return Math.max(...answer);
}

//for문 안쓴 풀이. 오름차순 정렬해준 다음
//첫번째와 두번째의 곱, 마지막에서 첫번쨰와 두번쨰의 곱
//Math.max 그 중 최대값
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}

//합성수 찾기
//약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
//자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      count += i % j === 0 ? 1 : 0;
    }
    answer += count >= 3 ? 1 : 0;
  }
  return answer;
}

//중복된 문자 제거
//문자열 my_string이 매개변수로 주어집니다.
// my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
  let answer = [...my_string];

  return answer.filter((ele, dex) => answer.indexOf(ele) === dex).join("");
}

//다른사람 풀이
//new set 활용 , 생성자 함수 또한 바로 Spread 연산자 가능
//Set은 중복이 허용되지 않는 객체이다. 안에 이미 같은 값이 존재한다면 추가되지 않는다.
//그래서 중복값을 허용하지 않아야 한다면 Set을 이용하면 된다.
function solution(my_string) {
  return [...new Set(my_string)].join("");
}

//A로 B 만들기
//문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을,
// 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
function solution(before, after) {
  // 정렬하여 각 인덱스를 비교함
  before = [...before].sort();
  after = [...after].sort();
  return before.filter((a, i) => a === after[i]).length === after.length
    ? 1
    : 0;
}
//다른사람 풀이
function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}

//모스부호 (1)
//머쓱이는 친구에게 모스부호를 이용한 편지를 받았습니다.
//그냥은 읽을 수 없어 이를 해독하는 프로그램을 만들려고 합니다.
//문자열 letter가 매개변수로 주어질 때, letter를 영어 소문자로 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

let morse = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};

//map 사용
function solution(letter) {
  let a = letter.split(" ");
  return a.map((a) => morse[a]).join("");
}

//reduce 사용
function solution(letter) {
  return letter.split(" ").reduce((prev, curr) => prev + morse[curr], "");
}

//for문 사용
function solution(letter) {
  const arr = letter.split(" ");
  let answer = "";
  for (const i of arr) {
    answer += morse[i];
  }
  return answer;
}

//팩토리얼
//i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다.
//예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는
// 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

// i! ≤ n

function solution(n) {
  let answer = 0;
  for (let i = 0; i <= 10; i++) {
    if (factorial(i) <= n) {
      answer = i;
    } else {
      break;
    }
  }
  return answer;
}

function factorial(num) {
  let count = 1;
  for (let i = num; i > 1; i--) {
    count *= i;
  }
  return count;
}

//다른사람 풀이
//while 문 활용.
function solution(n) {
  let i = 1;
  let f = 1;
  while (f * i < n) f *= ++i;
  return i;
}
