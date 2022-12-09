//배열의 평균값
//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

const solution = (numbers) =>
  numbers.reduce((acc, el) => acc + el,0) / numbers.length;

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
function solution(my_string) {
  let answer = [];
  for (let i = my_string.length - 1; i >= 0; i--) {
    answer += my_string[i];
  }
  return answer;
}

function solution(my_string) {
  let answer = [...my_string].reverse().join("");
  return answer;
}

//배열 뒤집기
//정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
function solution(num_list) {
  let answer = [];
  for (let i = num_list.length - 1; i >= 0; i--) {
    answer.push(num_list[i]);
  }
  return answer;
}

function solution(num_list) {
  var answer = [];
  var j = num_list.length;
  for (var i = 1; i <= j; i++) {
    answer.push(num_list[j - i]);
  }
  return answer;
}

function solution(num_list) {
  return num_list.reverse();
}

//아이스 아메리카노
//아이스 아메리카노는 한잔에 5,500원입니다.
//머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때,
//머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을
// 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(money) {
  let answer = [];
  answer.push(parseInt(money / 5500));
  answer.push(money % 5500);
  return answer;
}

//배열가르기
//정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
// numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을
// return 하도록 solution 함수를 완성해보세요.

function solution(numbers, num1, num2) {
  let answer = [];
  answer = numbers.slice(num1, num2 + 1);
  return answer;
}

function solution(numbers, num1, num2) {
  let answer = [];
  for (let i = num1; i <= num2; i++) {
    answer.push(numbers[i]);
  }
  return answer;
}

//짝수 홀수 개수
//정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
function solution(num_list) {
  let answer = [];
  let even = [];
  let odd = [];
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }
  answer = [even.length, odd.length];
  return answer;
}


//배열 원소의 길이
//문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
function solution(strlist) {
  var answer = [];
  for (let i = 0; i < strlist.length; i++){
      answer.push(strlist[i].length)
  }
  return answer;
}

function solution(strlist) {
  return strlist.map((el) => el.length)
}