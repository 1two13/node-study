// 정수 값(소수점X)을 n승 하는 함수  => ipow
// 실수 값(소수점O)을 n승 하는 함수 => fpow
// 반환값 => n승의 결과

// 0의 n승 => 항상 0
// n의 0승 => 항상 1
// 밑과 승은 무조건 양수

const fs = require("fs");

let input;
// 전달인자로 받은 문자열(메세지)을 출력하고, 양의 정수만 입력 받아 리턴하는 함수
function inputUInt(string) {
  // 전달인자로 받은 문자열 출력
  process.stdout.write(string);
  input = Number(fs.readFileSync("/dev/stdin").toString().trim());

  return input;
}

// 전달인자로 받은 문자열을 출력하고, 양의 실수만 입력 받아 리턴하는 함수
function inputDouble(string) {
  // 전달인자로 받은 문자열 출력
  process.stdout.write(string);
  input = Number(fs.readFileSync("/dev/stdin").toString().trim());

  return input;
}

// 양의 정수 num의 N승 값을 계산하여 리턴하는 함수
function ipow(num, N) {
  // 반환값 => N승의 결과
  return num ** N;
}

// 양의 실수 fnum의 N승 값을 계산하여 리턴하는 함수
function fpow(num, N) {
  // 반환값 => N승의 결과 (소수점 이하 셋째 자리까지)
  return (num ** N).toFixed(3);
}

function main() {
  let num;
  let n;
  let result;

  num = inputUInt("* 양의 정수 밑을 입력 하시오 : ");
  n = inputUInt("* 양의 승을 입력 하시오 : ");
  result = ipow(num, n);
  console.log(`${num}의 ${n}승은 ${result}입니다.`);

  num = inputDouble("* 양의 실수 밑을 입력 하시오 : ");
  n = inputDouble("* 양의 승을 입력 하시오 : ");
  result = fpow(num, n);
  console.log(`${num.toFixed(2)}의 ${n}승은 ${result}입니다.`);
}

main();
