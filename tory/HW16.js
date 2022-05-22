// 역수에 따라 지하철 요금 계산하기
// 1 ~ 5 정거장 => 600원
// 6 ~ 10 => 800원
// 11 ~ 12 => 900원
// 13 ~ 14 => 1000원
// 15 ~ 16 => 1100원 ...

// 입력함수, 요금 계산함수, 출력함수

const fs = require("fs");
// 입력함수
function input() {
  process.stdout.write("역수를 입력하시오 : ");
  const count = fs.readFileSync("/dev/stdin").toString().trim();
  return count;
}

//요금 계산함수
function cal(count) {
  let fare = 800;

  if (count >= 1 && count <= 5) fare = 600;
  else if (count >= 6 && count <= 10) fare = 800;
  // 10정거장 초과시
  else if (count > 10) {
    // 11 ~ 12 => 900원 (100원 추가)
    // 13 ~ 14 => 1000원 (200원 추가) ...
    for (let i = 1; i <= count - 10; i += 2) {
      fare += 100;
    }
  }

  return fare;
}

// 출력함수
function main() {
  const count = input(); // 역 수
  const fare = cal(count); // 요금
  console.log(`요금 : ${fare}원`);
}
main();
