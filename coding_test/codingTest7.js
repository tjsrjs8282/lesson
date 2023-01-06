//-----k의 개수
//1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때,
//i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

function solution(i, j, k) {
  var answer = 0;
  let str = String(k);
  for (let a = i; a <= j; a++) {
    answer += (a + "").split("").filter((ele) => ele === str).length;
  }
  return answer;
}

//수정
function solution(i, j, k) {
  let answer = 0;
  for (i; i <= j; i++) {
    answer += (i + "").split("").filter((v) => v === k + "").length;
  }
  return answer;
}

//------가까운 수 (못품)
//정수 배열 array와 정수 n이 매개변수로 주어질 때,
//array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
--

//진료 순서 정하기
//외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다.
//정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
function solution(emergency) {
  let a = [...emergency].sort((a, b) => b - a);
  return emergency.map((num) => a.indexOf(num) + 1);
}

//a 에 emergency를 깊은복사해서 오름차순정렬
//emergency배열을 map함수로 돌려서 오름차순 깊은복사한 배열을 indexOf(인댁스찾기)+1

//------한 번만 등장한 문자
//문자열 s가 매개변수로 주어집니다.
// s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
//한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

//풀지 못함
function solution(s) {
  let answer = [];
  for (let a of s) {
    if (s.indexOf(a) === s.lastIndexOf(a)) {
      answer.push(a);
    }
  }
  return answer.sort().join("");
}
//for of 를 돌려서 s에서 각 a에 index값과 마지막 index 값이 같으면 1개밖에 없다는 뜻이여서 같으면
//answer 에 a값을 push 한다. 그 후 오름차순+문자화 시켜서 return

//2차원으로 만들기

//정수 배열 num_list와 정수 n이 매개변수로 주어집니다.
//num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.

//num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다.
// 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.
function solution(num_list, n) {
  let answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list.slice(i, i + n));
  }
  return answer;
}
// 자바스크립트에서 문자열을 잘라 리턴하는 메소드는 3가지
// 1. slice() 
// 문자열.slice(잘라올 첫 위치값, 잘라올 마지막 위치값) 배열에서도 사용가능
// 두번째 값지 지정하지 않을 경우: 배열의 끝까지 slice
// 음수를 지정한 경우: 배열의 끝에서부터의 길이를 나타낸다. slice(2, -1)를 하면 세번째부터 끝에서 두번째 요소까지 추출
// 2. substring()
//문자열.substring(잘라올 첫 위치값, 잘라올 마지막 위치값)
//substring()의 사용법은 slice()와 같다. 단지 negative index(-) 를 사용할 수 없는 차이만 있다.
// 3. substr()

//다른풀이
//와일문이 배열에 길이 만큼 반복하면서 
//splice함수로 0번째부터 n번째까지 제거한값을 푸쉬해간다.
function solution(num_list, n) {
    var answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}