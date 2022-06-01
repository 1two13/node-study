// 입력값 => 현금
// 크림빵 500원, 새우깡 700원, 콜라 400원
// 잔돈을 남기지 않고 각 물건을 몇 개씩 사야하는지 (모든 물품은 1개 이상 구매해야 함)

// 반복수행하고 금액 입력란에 문자 입력 시 종료

const fs = require("fs");

function main() {
  process.stdout.write("현재 당신의 소유 금액 입력 : ");
  let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

  // 금액 입력란에 문자 입력 시 종료
  if (isNaN(input)) return;

  const cream = 500;
  const shrimp = 700;
  const coke = 400;
  // cream + shrimp + coke => 1600원

  // input 으로 만들 수 있는 경우의 수 출력하기 (모든 물품은 1개 이상 구매해야 함)
  // 반복 수행
  for (let i = 1; cream * i <= input; i++) {
    for (let j = 1; shrimp * j <= input - cream * i; j++) {
      for (let k = 1; coke * k <= input - cream * i - shrimp * j; k++) {
        if (cream * i + shrimp * j + coke * k === input) {
          console.log(`크림빵(${i}개), 새우깡(${j}봉지), 콜라(${k}병)`);
        }
      }
    }
  }

  console.log("어떻게 구입하시겠습니까?");
}

main();
