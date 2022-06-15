// 입력 값 => 라인 수
// 출력 값 => 대칭되는 별

// 이중 for문 사용하기
// i, j, 라인 저장 변수(lineCnt) => 총 변수 3개만 사용하기
// 반복수행

// 만약 라인 수 입력란에 문자 입력 시 종료

const fs = require("fs");

function main() {
  process.stdout.write("# 출력 라인수를 입력하시오 : ");
  let lineCnt = Number(fs.readFileSync("/dev/stdin").toString().trim());
  // 만약 라인 수 입력란에 문자 입력 시 종료
  if (isNaN(lineCnt)) return;

  // lineCnt 수가 행 수, 즉 lineCnt 수 만큼 반복문을 돌아야 한다.
  for (let i = 1; i <= lineCnt; i++) {
    // 앞에 별 출력
    for (let j = 0; j < i; j++) {
      process.stdout.write("*");
    }

    // 공백 출력
    for (let j = 0; j < lineCnt * 2 + 2 - 2 * i; j++) {
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
