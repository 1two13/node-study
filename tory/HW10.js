// 두 정수를 입력 받아
// 합, 차, 곱, 몫 값 출력하기
// 실수 값은 소수점 이하 둘째 자리까지 출력

function main() {
  const fs = require("fs");
  const input = fs.readFileSync("../dev/stdin").toString().trim().split("\n");
  const one = Number(input[0]);
  const two = Number(input[1]);
  console.log(
    `두개의 정수를 입력하시오 : ${one} ${two}\n${one}+${two} = ${
      one + two
    }\n${one}-${two} = ${one - two}\n${one}x${two} = ${
      one * two
    }\n${one}/${two} = ${one / two}`
  );
}

main();
