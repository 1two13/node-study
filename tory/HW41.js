// 입력값 => 대문자
// 출력값 => 입력값 ~ A까지 출력하기

// 영문자 이외에 다른 문자 입력 시 종료
// i, j, 문자 저장 변수(char) => 총 변수 3개만 사용하기
// 반복수행

const fs = require("fs");

function main() {
  process.stdout.write("* 영문자 대문자 입력('A' ~ 'Z') : ");
  let char = fs.readFileSync("/dev/stdin").toString().trim();

  // 영문자 이외에 다른 문자 입력 시 종료
  if (!/[A-Z]/.test(char)) return;

  // 아스키 문자 => A ~ Z => 65 ~ 90
  let charASCII = char.charCodeAt();

  for (let i = charASCII; i >= 65; i--) {
    for (let j = charASCII; j >= i; j--) {
      process.stdout.write(String.fromCharCode(j));
    }

    // 줄바꿈 출력
    process.stdout.write("\n");
  }
}

main();
