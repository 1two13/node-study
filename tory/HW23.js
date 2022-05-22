// 입력값 => 두 개의 정수
// 출력값 => 두 수의 차 (큰수 - 작은 수)

const fs = require("fs");

function main() {
  process.stdout.write("두개의 정수를 입력하세요 : ");
  const num = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

  let big;
  let small;
  if (num[0] < num[1]) {
    big = num[1];
    small = num[0];
  } else {
    big = num[0];
    small = num[1];
  }

  // 숫자 대신 문자를 입력하면 종료
  if (isNaN(big) || isNaN(small)) process.exit();

  let formula = `${big} - ${small}`;
  let result = big - small;

  console.log(`${formula} = ${result}`);
}

main();
