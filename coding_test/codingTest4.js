//배열의 유사도
//두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
function solution(s1, s2) {
  const answer = s1.filter((data) => s2.includes(data));

  return answer.length;
}

//중앙값 구하기
//중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다.
// 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때,
// 중앙값을 return 하도록 solution 함수를 완성해보세요.
function solution(array) {
  let answer = 0;
  let arr = array.sort((a, b) => b - a);
  answer = Math.floor(arr.length / 2);
  return arr[answer];
}

//문자열안에 문자열
//문자열 str1, str2가 매개변수로 주어집니다.
// str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(str1, str2) {
  let a = str1.indexOf(str2);
  if (a !== -1) {
    return 1;
  }
  return 2;
}

function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

//옷가게 할인 받기
//머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
//구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
function solution(price) {
  if (price >= 500000) {
    return ~~(price * 0.8);
  }
  if (price >= 300000) {
    return ~~(price * 0.9);
  }
  if (price >= 100000) {
    return ~~(price * 0.95);
  }
  return price;
}
//Math.floor === ~~

//모음제거
//영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
//문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
  let arr = ["a", "e", "i", "o", "u"];
  let a = [...my_string];
  return a.filter((data) => arr.includes(data) === false).join("");
}

//정규표현식을 활용한 풀이
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

// replace() 문자 치환 함수
var test = "가나다라 마바사 가나";
var result = test.replace(/가/gi, "나");
//가는 나로 바뀜
//g : 전체 모든 문자열을 변경 global
//i : 영문 대소문자를 무시, 모두 일치하는 패턴 검색 ignore

//숨어있는 숫자의 덧셈 (1)
//문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
  let a = my_string.replace(/[a-z]/gi, "");
  let b = [...a];
  let c = b.map((data) => Number(data)).reduce((acc, cur) => acc + cur);

  return c;
}
