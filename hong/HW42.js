const fs = require("fs");

function main() {
  process.stdout.write("# 출력 라인수를 입력하시오 : ");
  const lineCnt = Number(fs.readFileSync("/dev/stdin").toString().trim());

  for (let i = 1; i <= lineCnt; i++) {
    // 앞에 별 출력
    for (let j = 0; j < i; j++) {
      process.stdout.write("*");
    }

    // 공백 출력
    for (let j = 0; j < (lineCnt * 2 + 2) - 2 * i; j++) {
      process.stdout.write(" ");
    }

    // 뒤에 별 출력
    for (let j = 0; j < i; j++) {
      process.stdout.write("*");
    }

    // 줄바꿈 출력
    process.stdout.write("\n");
  }
}

main();
