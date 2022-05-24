// 입력값 => 양의 정수(100 ~ 10000)
// 100 <= P1, P2 <= 10000
// 출력값 => 범위 내의 고집수가 N인 수의 개수

// 고집수 (1 <= N <= 10)
// 각 자릿수를 분활하여 서로 곱하기 => 그 곱한 수의 각 자릿수를 또 분활하여 서로 곱하기 => ...
// 한 자릿수가 될 때까지 반복하기

// 양의 정수 num을 각 자릿수로 분활해서 곱한 결과를 리턴하는 함수
function transNumber(num) {
  let sNum = String(num);
  let cnt = 0; // 고집수 횟수
  let result = 1;
  // num이 한 자릿수가 되면 반복 종료
  while (sNum.length !== 1) {
    for (let i = 0; i < sNum.length; i++) {
      result = result * Number(sNum[i]);
    }
    cnt++;
    sNum = String(result);
    // 초기화
    result = 1;
  }

  return cnt;
}

// 양의 정수만 입력 받아 리턴하는 함수
function inputUInt() {
  const num = Number(
    require("fs").readFileSync("/dev/stdin").toString().trim()
  );

  // 음수와 문자에 대한 입력 예외 처리
  while (num < 0 || isNaN(num)) {
    console.log("양의 정수만 입력해주세요.");
    // 입력값 다시 받기
    num = require("fs").readFileSync("/dev/stdin").toString().trim();
  }

  return num;
}

function main() {
  // 100 <= P1
  process.stdout.write("시작 값(P1) : ");
  let p1 = inputUInt();
  // P2 <= 10000
  process.stdout.write("끝 값(P2) : ");
  let p2 = inputUInt();
  // 1 <= N <= 10
  process.stdout.write("고집수(N) : ");
  let n = inputUInt();

  let result = 0;
  for (let i = p1; i <= p2; i++) {
    const cnt = transNumber(i);
    if (n === cnt) {
      console.log(i);
      result++;
    }
  }

  console.log(`총 개수 : ${result}개`);
}

main();
