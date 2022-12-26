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
