// 1 ~ 100 출력
// 3의 배수는 *
// 5의 배수는 #
// 3과 5의 공배수(15의 배수)는 숫자 =>
// 출력 시 한 줄에 10개
const fs = require("fs");
// ctrl + d를 눌러야 입력 종료로 인식
const input = fs.readFileSync("input.txt").toString();

console.log(input, input.split("\n"));

function main(n) {
  console.log("hello");
  // n은 1 ~ 100 까지의 숫자라고 가정한다.
  for (let n = 1; n <= 100; n += 10) {
    // 만약 n이 3의 배수인 경우에는 * 로 표시하기
    if (n % 3 === 0) n = "*";
    // 만약 n이 5의 배수인 경우에는 # 으로 표시하기
    else if (n % 5 === 0) n = "#";
    // n이 3의 배수이면서 5의 배수인 경우에는 그냥 숫자로 표시하기
    else if (n % 3 === 0 && n % 5 === 0) n = n;
    // 한 줄에 10개만 출력해야하는데.. => slice를 사용해서 10개씩 자르기
  }
}
main();
