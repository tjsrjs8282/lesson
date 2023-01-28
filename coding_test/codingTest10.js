//-------------외계어 사전
//PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다.
// spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(spell, dic) {
  let arr = spell.sort().join("");
  for (let i = 0; i < dic.length; i++) {
    if (dic[i].split("").sort().join("") === arr) {
      return 1;
    }
  }
  return 2;
}

// sepll과 dic[i] 을 전부 오름차순으로 바꿔준다.
// dic반복문을 돌려서 dic[i]랑 오름차순으로 바꾼 spell 이랑 동일하면 1 아니면 2

//---------삼각형의 완성조건 (2)

//선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
//가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
//삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(sides) {
  let a = sides[0] + sides[1];
  let arr = [];
  let answer = 0;
  for (let i = 1; i < a; i++) {
    arr = [sides[0], sides[1], i].sort((a, b) => a - b);

    if (arr[0] + arr[1] > arr[2]) {
      answer++;
    }
  }
  return answer;
}
// 작은변 두개의 합보다 커지면 안됨
// sides의 합만큼 반복문을 돌린다 (i는 나머지한변의 길이)
// i가 들어갈 수 있는 수를 반복문으로 구한다.
// 내림차순으로 작은변수의 2개의 합보다 작으면 경우의수를 증가시킨다

//다른사람풀이..
function solution(sides) {
  sides.sort((a, b) => b - a);

  return sides[1] + sides[1] - 1;
}

function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}

//---------종이 자르기
//머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다. 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.

function solution(M, N) {
  let arr = [M, N];
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let a = min - 1;
  let b = max - 1;

  return a + b * min;
}
// 작은수를 찾아서 -1 값과
// 큰수를 찾아서 -1 값 x 작은수
// 둘을 더해준다.

//다른풀이 압축
function solution(M, N) {
  return M * N - 1;
}

// -------로그인 성공?
// 머쓱이는 프로그래머스에 로그인하려고 합니다.
// 머쓱이가 입력한 아이디와 패스워드가 담긴 배열 id_pw와 회원들의 정보가 담긴 2차원 배열 db가 주어질 때,
// 다음과 같이 로그인 성공, 실패에 따른 메시지를 return하도록 solution 함수를 완성해주세요.

function solution(id_pw, db) {
  var answer = "";
  let arr = [...id_pw];
  for (let i = 0; i < db.length; i++) {
    if (arr[0] == db[i][0]) {
      if (arr[1] == db[i][1]) {
        answer = "login";
        break;
      } else {
        answer = "wrong pw";
        break;
      }
    } else {
      answer = "fail";
    }
  }
  return answer;
}

// 반복문돌려서 아이디를 비교하고
// 그 다음 비번을 비교해서 둘다 맞으면 login 아니면 wrong pw
// 그 외는 fail

// --------캐릭터의 좌표
// 머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다.
// 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다.
// 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다.
//  캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.

//배열 [a,b]
//키 반복문 돌면서
// left 는 a--
// right 는 a++
// down 은 b--
// up 은 b++

// board 의 중앙에서 시작이니까 반을 나누고 소수점을 버린 배열이 최대 움직일 수 잇는 거리 [x,y]
// 최종 좌표가 반으로 나눈 좌표보다 클경우 최대거리가 나오게 (음수면 더 적으면 )

function solution(keyinput, board) {
  var answer = [];
  let arr = [...board];
  let x = arr.map((v) => Math.floor(v / 2));
  //소수점 버릴 필요가 없

  let a = 0;
  let b = 0;
  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "left") {
      a--;
    }
    if (keyinput[i] === "right") {
      a++;
    }
    if (keyinput[i] === "down") {
      b--;
    }
    if (keyinput[i] === "up") {
      b++;
    }
  }
  let y = [a, b];
  for (let j = 0; j < y.length; j++) {
    if (y[j] < 0) {
      if (y[j] < x[j]) {
        y[j] = -x[j];
      }
    }
    if (y[j] >= 0) {
      if (y[j] > x[j]) {
        y[j] = x[j];
      }
    }
  }

  return y;
}

//수정 소수점 버릴 필요가없음 버려서 한두개 실패되는듯.
//키에 따라 조건을 나누고
//그냥 board 반 나눈값보다 크거나 작으면 ++ or --

function solution(keyinput, board) {
  let a = 0;
  let b = 0;

  let x = board[0] / 2;
  let y = board[1] / 2;

  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "right") {
      if (a + 1 < x) {
        a++;
      }
    }

    if (keyinput[i] === "left") {
      if (a - 1 > -x) {
        a--;
      }
    }
    if (keyinput[i] === "up") {
      if (b + 1 < y) {
        b++;
      }
    }
    if (keyinput[i] === "down") {
      if (b - 1 > -y) {
        b--;
      }
    }
  }

  return [a, b];
}

//구슬을 나누는 경우의 수
//머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다.
//머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
//balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

//경우의 수 공식사용
function solution(balls, share) {
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}

//팩토리얼 함수
function factorial(num) {
  let count = 1;
  for (let i = 1; i <= num; i++) {
    count *= i;
  }
  return count;
}

//몇개가 계쏙 에러나길래 검색함.

function solution(balls, share) {
  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
}

//joooing.tistory.com/entry/Javascript-%EC%86%8C%EC%88%98%EC%A0%90floating-point-%EA%B3%84%EC%82%B0-%EC%98%A4%EB%A5%98
//Math.round() 메서드 로  무한소수 문제 해결

// 다른사람은 팩토리얼 함수에 BigInt 썼길래 똑같이 넣어봤는데 됨.
//BigInt는 길이의 제약 없이 정수를 다룰 수 있게 해주는 숫자형
https: function factorial(num) {
  let count = BigInt(1);
  for (let i = 1; i <= num; i++) {
    count *= BigInt(i);
  }
  return count;
}
