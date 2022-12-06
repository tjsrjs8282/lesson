//피자 나눠 먹기 (3)
//머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다.
//피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때,
//n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
function solution(slice, n) {
  return Math.ceil(n / slice);
}

function solution(slice, n) {
  if (n % slice == 0) {
    return parseInt(n / slice);
  }
  return parseInt(n / slice) + 1;
}

//최댓값 만들기(1)
//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        answer.push(numbers[i] * numbers[j]);
      }
    }
  }

  return Math.max(...answer); //Mate.max 가장높은 값
}

function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}
//arr.sort((a,b)=>b-a)  오름차순 정렬
//arr.sort((a,b)=>a-b)  내림차순 정렬

//삼각형의 완성조건(1)
//선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
//가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
//삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
// 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
function solution(sides) {
  let a = Math.max(...sides);

  let b = sides.reduce((acc, cur, i) => {
    return acc + cur;
  }, 0);

  let c = b - a;

  if (a < c) {
    return 1;
  }

  return 2;
}

//점의 위치 구하기
//사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.
function solution(dot) {
  let a = Math.sign(dot[0]);
  let b = Math.sign(dot[1]);

  if (a > 0 && b > 0) {
    return 1;
  }
  if (a < 0 && b > 0) {
    return 2;
  }
  if (a < 0 && b < 0) {
    return 3;
  }
  if (a > 0 && b < 0) {
    return 4;
  }
}

//문자 반복 출력하기
//문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
function solution(my_string, n) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < n; j++) {
      answer += my_string[i];
    }
  }
  return answer;
}
//repeat(n) 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.

//특정문자 제거하기
//문자열 my_string과 문자 letter이 매개변수로 주어집니다.
//my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string, letter) {
  let answer = "";

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] !== letter) {
      answer += my_string[i];
    }
  }
  return answer;
}

//편지
//머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다.
//할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며,
/// 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의
// 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.
function solution(message) {
  let answer = 0;
  for (let i = 0; i < message.length; i++) {
    answer += 2;
  }
  return answer;
}

function solution(message) {
  return message.length * 2;
}

//제곱수 판별하기
//어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다.
//정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

// Math.sqrt()  루트값 구하기
// Math.pow() 제곱값 구하기.
// Number.isInteger()  파라미터로 입력받은 값이 정수인지 판단해줌
// 나머지 연산자(%) 를 활용하기
Number.isInteger;
function solution(n) {
  if (Math.sqrt(n) % 1 === 0) {
    return 1;
  }

  return 2;
}

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

// /자릿수 더하기
//정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
function solution(n) {
  let arr = String(n)
    .split("")
    .map((n) => Number(n));
  let sum = arr.reduce((acc, cur) => {
    return cur + acc;
  }, 0);

  return sum;
}

//순서쌍의 개수
//순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다.
//자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.
function solution(n) {
  let answer = [];
  // 1부터 n까지 반복하며 모든 약수를 정답 배열에 입력
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
  // 모든 약수의 수는 순서쌍의 수와 같음
  return result.length;
}

//짝수는 싫어요
//정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  let answer = [];

  for (let i = 0; i < n + 1; i++) {
    if (i % 2 !== 0) {
      answer.push(i);
    }
  }
  return answer;
}
