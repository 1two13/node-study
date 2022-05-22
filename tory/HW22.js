// 입력값 => 정수
// 출력값 => 입력 숫자만큼 별을 출력 // 한 줄에 5개씩
// 문자 입력은 예외처리
// 단일 반복문과 if문 사용하기

const fs = require("fs");

function main() {
  process.stdout.write("# 정수값을 입력하세요 : ");
  const num = fs.readFileSync("/dev/stdin").toString().trim();

  let result = "";

  for (let i = 1; i <= num; i++) {
    result = result + "*";
    // 한 줄에 5개씩
    if (i % 5 === 0) result += "\n";
  }

  console.log(result);
}

main();
