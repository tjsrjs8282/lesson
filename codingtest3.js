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
  var answer = "";

  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < n; j++) {
      answer += my_string[i];
    }
  }
  return answer;
}
//repeat(n) 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.
