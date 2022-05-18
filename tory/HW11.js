// 입력값 => ASCII
// 출력값 => ASCII code

function main() {
  const fs = require("fs");
  const input = fs.readFileSync("../dev/stdin").toString().trim().split("\n"); // ASCII
  const code = String.fromCharCode(input);
  console.log(
    `ASCII code값을 입력하시오 : ${input}\n${input}은 '${code}'의 ASCII code 입니다. `
  );
}

main();
