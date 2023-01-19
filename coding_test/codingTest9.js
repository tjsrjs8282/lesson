//------------영어가 싫어요
//영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
//문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

function solution(numbers) {
  numbers = numbers.replaceAll("zero", 0);
  numbers = numbers.replaceAll("one", 1);
  numbers = numbers.replaceAll("two", 2);
  numbers = numbers.replaceAll("three", 3);
  numbers = numbers.replaceAll("four", 4);
  numbers = numbers.replaceAll("five", 5);
  numbers = numbers.replaceAll("six", 6);
  numbers = numbers.replaceAll("seven", 7);
  numbers = numbers.replaceAll("eight", 8);
  numbers = numbers.replaceAll("nine", 9);

  return Number(numbers);
}

//numbers 에  있는 one은 1로 바꿔고 two를 2로 바꿔주고 three를 3으로 바꿔주고...
// => 배열을 담아서 반복문으로 바꿈

function solution(numbers) {
  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < num.length; i++) {
    numbers = numbers.replaceAll(num[i], i);
  }
  return +numbers; //앞에 + 붙히면 숫자화
}

//------------잘라서 배열로 저장하기
// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
  let answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.slice(i, i + n));
  }
  return answer;
}
// n씩 증감하는 for문을 돌려서
//i부터 i에 n 더한 값을 자른값을 넣어준다.

//처음에 splice 로 했다가 계속 안되서 while 문으로 바꿨다.
// 안된이유 반복문을 돌면서 splice의 특성으로 본배열에서 아예 빼버림.

function solution(my_str, n) {
  let answer = [];
  let arr = my_str.split("");
  while (0 < arr.length) {
    answer.push(arr.splice(0, n).join(""));
  }

  return answer;
}

//splice로 계속 빼면서 arr.length보다 작아질때까지 반복문 돌린다.
//본배열에서 빠지기때문에 splice(0, n) 첫번째부터 n만큼 뺀값을 넣어줌

//----------컨트롤 제트
//숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다.
//이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다.
//숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

function solution(s) {
  let arr = s.split(" ");

  while (arr.includes("Z")) {
    arr.splice(arr.indexOf("Z") - 1, 2);
  }

  return arr.reduce((acc, cur) => acc + ~~cur, 0);
}

// split (" ") 써서 공백을 빼준다.
// z가 포함되어 있는지 확인한다.
// z의 index값을 구한다.
// z가 포함되어 있으면 splice( 해당 z의 indexOf 값 -1 (z의 앞숫자) , 2 (Z까지))
// 그러면 z랑 z 앞숫자가 빠진 배열만 남음
// 전부 합산  reduce

//-------------소인수분해
//소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다.
//따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// function solution(n) {
//     var answer = [];
//     let a = n
//     for(let i =2; i < a; i++){
//         if(a % i === 0){

//          answer.push(i)
//         a = a / i
//         }

//     }
//     return answer;
// }

// 일단 최소값이 2부터라서 2부터 for문을 돌린다.
// a를 i 를 나눈 나머지값이 0 이면 그 i를 담는다.
// a값을 i로 나눈값으로 갱신한다.

function solution(n) {
  var answer = [];
  let i = 2;
  while (n >= 2) {
    if (n % i === 0) {
      answer.push(i);
      n = n / i;
    } else {
      i++;
    }
  }

  // return answer.filter((ele, dex) => {
  // return answer.indexOf(ele) === dex;
  // });

  return [...new Set(answer)];
}

//for문 하다 안되서 while문으로 바꿈
// 필터 사용했다가 전에 썼던 set객체 생성해서 씀
// 중복값도 다 나와서 중복값을 빼주는 set객체함수 사용해서 중복제거

//다른사람 풀이 보니까 for문안에 while문..
function solution(n) {
  var answer = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n = n / i;
      answer.push(i);
    }
  }

  return [...new Set(answer)];
}

//--------문자열 계산하기
//my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때,
//수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
function solution(my_string) {
  var answer = 0;
  let s = my_string.split(" ");

while(){
  //     if(s.includes("+")){
  //          s.splice(s.indexOf("+"),1)

  //     }

  //      if(s.includes("-")){
  //          s.splice(s.indexOf("-"),1)
  //          return s.reduce((acc , cur )=> acc-~~cur,0)
  //     }
}

  return s;
}


function solution(my_string) {
    
    let s = my_string.split(" ");
     let answer = ~~(s[0]);
    
    
    s.reduce((acc, cur, dex) => {
        if(cur === "+"){
            answer += ~~(s[dex + 1]);
        }
        
        if(cur === "-"){
            answer -= ~~(s[dex + 1]);
        }
    })
    
    return answer;
}

// 공백은 다 빼고
// answer 는 일단 첫번째 값
// cur 현재값이 +면 다음값을 answer 더 해준다  index+1 
// cur 현재값이 -면 다음값을 answer 빼준다  index+1 


//---------구슬을 나누는 경우의 수
//머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, 
//balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요