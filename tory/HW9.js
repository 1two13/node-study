// 입력값 => 정수
// 출력값 => 정수를 8진수와 16진수로 + 진법을 나타내는 접두어도 같이 출력

// TODO input() 함수 선언부
let number = 32165;

function input() {
  const oct = number.toString(8);
  const hex = number.toString(16);
  return [oct, hex];
}

function main() {
  // TODO 계산결과 출력하기
  console.log(
    `정수값을 입력하세요 : ${number}\n입력된 값은 8 진수로 0${
      input()[0]
    } 입니다.\n입력된 값은 16 진수로 0x${input()[1]} 입니다. `
  );
}

main();
