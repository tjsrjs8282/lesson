//------------직사각형 넓이 구하기
//2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
//직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는
// 배열 dots가 매개변수로 주어질 때,
//직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

//---------치킨 쿠폰
//프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다.
// 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다.
//시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.

//---------문자열 밀기
//문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다.
//이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때,
//A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고
//밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

// b만의 길이 만큼 반복문을 돌려서 (최대밀 횟수이기도 해서)
// 배열을 문자로 풀었을때 같으면 i 횟수 리턴하고
// 그게 아니면 a를 큐처럼 pop() 마지막요소 빼면서 반환값을 unshift
// 그리고 다시 반복문 돌면서 확인
// 없으면 리턴 -1

function solution(A, B) {
  let a = A.split("");
  let b = B.split("");
  for (let i = 0; i < b.length; i++) {
    if (a.join("") === b.join("")) {
      return i;
    }

    if (a.join("") !== b.join("")) {
      a.unshift(a.pop());
    }
  }
  return -1;
}

//--------유한소수 판별하기
//소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다.
//분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.
//기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
//두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.

//분자와 분모 최대공약수로 약분해서 기약분수를 만든다.
//분모를 최대공약수로 나누기
//그다음 2로 나눈나머지가 0될때까지 나누고 그 다음 5을 나누고
//let a = b 분모
//while (b를 2로 나눈값이 0) 2나누기
//while (b를 5로 나눈값이 0) 5나누기
//나눈값을 분자랑 나눴을때 나머지가 0 이면 유한소수 아니면 무한소수
function solution(a, b) {
  let num = b;

  while (num % 2 === 0) num = num / 2;
  while (num % 5 === 0) num = num / 5;

  if (a % num === 0) return 1;
  if (a % num !== 0) return 2;
}

//--------등수 매기기
//영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다.
//영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때,
// 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(score) {
  let arr = score.map(([a, b]) => (a + b) / 2);
  let a = [...arr].sort((a, b) => b - a);
  return arr.map((v) => a.indexOf(v) + 1);
}

//평균값 구하기 = 요소안의 a b를 더하고 2로 나눈다.
//오름차순으로 만들기
//평균값 구한 배열을 돌려서 indexOf 로 인덱스찾기 중복되는게 있으면 가장 앞에 index값 가져옴
//let a = arr.sort((a, b) => b - a);
// slice()를 사용해서 복사가능함
