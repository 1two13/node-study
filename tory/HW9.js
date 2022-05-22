// 입력값 => 정수
// 출력값 => 정수를 8진수와 16진수로 + 진법을 나타내는 접두어도 같이 출력

// TODO input() 함수 선언부
const fs = require("fs");

function input() {
  process.stdout.write("정수값을 입력하세요 : ");
  const number = fs.readFileSync("/dev/stdin").toString().trim();

  const oct = Number(number).toString(8);
  const hex = Number(number).toString(16);
  return [oct, hex];
}

function main() {
  // TODO 계산결과 출력하기
  const [oct, hex] = input();

  console.log(
    `입력된 값은 8 진수로 0${oct} 입니다.\n입력된 값은 16 진수로 0x${hex} 입니다. `
  );
}

main();
