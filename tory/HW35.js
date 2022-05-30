// 입력값 => 5개의 정수(무조건 양수 값)
// 출력값 => 입력된 값의 총 합
// 0 이하의 수를 입력 받을 경우 다시 입력 받도록 설정하기

const fs = require("fs");
let input;
let n = 1;
let result = 0;

function main() {
  process.stdout.write("0 보다 큰수를 입력하시오(1 번째) : ");
  input = Number(fs.readFileSync("/dev/stdin").toString().trim());
  result = result + input;

  // 단일 for문 사용해서 프로그래밍 하기
  // cnt가 5가 될때까지 반복문 실행
  for (let cnt = 1; cnt < 5; ) {
    // input이 0보다 크다면
    if (input > 0) {
      // 번째 횟수와 cnt 증가시키기
      n++; // 2
      cnt++; // 2
      process.stdout.write(`0 보다 큰수를 입력하시오(${n} 번째) : `);
      input = Number(fs.readFileSync("/dev/stdin").toString().trim());
      if (input > 0) result = result + input;
    }
    // input이 0 이하라면
    else {
      // 다시 입력 받기
      process.stdout.write(`0 보다 큰수를 입력하시오(${n} 번째) : `);
      input = Number(fs.readFileSync("/dev/stdin").toString().trim());
      if (input > 0) result = result + input;
    }
  }
  // 입력된 input 의 총 합 구하기
  console.log(`입력된 값의 총 합 : ${result}`);
}

main();
