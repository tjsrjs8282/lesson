//배열의 평균값
//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

const solution = (numbers) =>
  numbers.reduce((acc, el) => acc + el) / numbers.length;

function solution(numbers) {
  let answer = 0;
  for (i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }
  return answer / numbers.length;
}

function solution(numbers) {
  let answer = 0;
  for (i of numbers) {
    answer += i;
  }
  return answer / numbers.length;
}

//머쓱이보다 키 큰 사람
//머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

const solution = (array, height) => array.filter((el) => el > height).length;

function solution(array, height) {
  let answer = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > height) {
      answer++;
    }
  }
  return answer;
}

//중복 된 숫자 개수
//정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

function solution(array, n) {
  return array.filter((el) => el == n).length;
}

function solution(array, n) {
  let answer = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === n) {
      answer++;
    }
  }
  return answer;
}

//피자 나눠먹기1
//머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

function solution(n) {
  return n % 7 === 0 ? n / 7 : parseInt(n / 7) + 1;
}

function solution(n) {
  if (n % 7 === 0) {
    return n / 7;
  } else {
    return parseInt(n / 7) + 1;
  }
}

//양꼬치
//머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다.
//양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다.
// n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면
// 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.

function solution(n, k) {
  let answer = 0;

  answer = n * 12000 + k * 2000 - parseInt(n / 10) * 2000;
  return answer;
}

//문자열 뒤집기
//문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
function soltuion(my_string) {
  let answer = [];
  for (let i = my_string.length - 1; i >= 0; i--) {
    answer = push(my_string[i]);
  }
  return answer;
}
