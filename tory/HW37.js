// 입력값 => 날 수
// 출력값 => 첫 날부터 받은 총 금화의 수

const fs = require("fs");

function main() {
  process.stdout.write("* 기사의 근무일수를 입력하시오 : ");
  const input = Number(fs.readFileSync("/dev/stdin").toString().trim()); // 10

  let result = 0; // 총 금화 개수
  // let cnt = 0; // 금화개수를 받은 횟수 (1일차는 1개, 2 ~ 3일차 2개 ... )
  // let num = 1; // 해당 날의 금화 개수

  // CASE 1
  // for (let i = 1; i <= input; i++) {
  //   result = result + num;
  //   cnt = cnt + 1;

  //   if (cnt === num) {
  //     num += 1;
  //     // 초기화
  //     cnt = 0;
  //   }
  // }

  // CASE 2
  // input 값이 0보다 작거나 같을 때 까지 반복하기
  let i = 1;
  let days = input;
  while (days >= 0) {
    days = days - i;

    if (days < 0) {
      result = result + i * i + days * i;
    } else result = result + i * i;

    i++;
  }
  console.log(`근무일 : ${input}일 / 총 금화 수 : ${result}`);
}

main();
