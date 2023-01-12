//------가까운 수 (못품)
//정수 배열 array와 정수 n이 매개변수로 주어질 때,
//array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
function solution(array, n) {
  let arr = array.sort((a, b) => a - b);
  let a = 0;
  let min = 100;
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    a = arr[i] - n < 0 ? -(arr[i] - n) : arr[i] - n;
    if (a < min) {
      min = a;
      answer = arr[i];
    }
  }
  return answer;
}

// array 를 오름차순으로 바꾼다.
// 각 배열의 n을 뺀값 (남은값이 가까울수록 가까운수)
// 근데 n이 더크면 음수도 나오니까 전부 양수화 시킨다.
// => 반복문으로 돌려서 n을 뺀값이 음수면 양수로바꿔주고 아니면 본래 값을 변수에 담는다.
// => 최댓값을 넣은 변수보다 작은 n을 뺀 값을 넣어간다.
// return할 변수에 해당 변수값을 넣는다. (제일 마지막에 조건에 만족하고 들어간 수가 가까운수)

// --------7의 개수
//머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때,
// 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  let answer = 0;
  let a = array.join(" ");
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "7") {
      answer++;
    }
  }
  return answer;
}
//peeudo code
//배열을 다 합친 다음에 반복문을 돌려서 7의 갯수만큼 1을 추가한다.

//--------이진수 더하기
//이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

//peeudo code
//bin1 의 10진법 변환한 수와 bin2 의 10진법 변환한 수를 더해준다.
//그 더한 값을 다시 2진법으로 변환한다.

//1. bin1,bin2 을 10진법 변환
//2. 둘을 더 한다.
//3. 더한 값을 2진법으로 변환

//parseInt("10", 2)/
//파라미터 "10"을 2진법으로 읽어서, 10진법으로 변환한 값을 리턴해둔다.

//toString() 특정 객체를 문자열로 반환해준다. 가 정석이지만 원하는 10진수를 특정 진수로 변환하고 싶을때 사용한다.
//toString(2) 2진수로 변환
//toString(10) 10진수로 변환

//------숨어있는 숫자의 덧셈 (2)
//문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
// my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  return my_string.split(/[A-z]/g).reduce((acc, cur) => acc + Number(cur), 0);
}
// 모든 영문을 정규식으로 split이용해서 나눈다.
//reduce를 돌려서 합산시킨다.
// +근데 문자열이여서 초기값을 제외하고 cur을 넘버로 바꿔줌

//-------------공 던지기
//머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다.
// 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다.
// 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때,
//k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요.

function solution(numbers, k) {
  let answer = 0;
  for (let i = 0; i < k; i++) {
    answer += 2;
    if (answer > numbers.length) {
      answer = answer - numbers.length;
    }
  }
  return numbers[answer - 2];
}

// 인댁스를 k의 갯수만큼 2씩 증가시킨다.
// 만약에 배열의 길이를 넘어가면 배열의길이만큼 빼준 값을 넣어준다.
// 마지막으로 던진사람이므로 -2를 뺀 인댁스 값
