// 입력값 => 성, 이름
// 출력값 => 성 이름 + 성과 이름 글자수를 각각 성, 이름 뒷 자리에 맞추기

function main() {
  const fs = require("fs");
  const input = fs.readFileSync("../dev/stdin").toString().trim(); // Hong Gildong

  const split = input.split(" ");
  let result = "";
  const lastNameL = split[0].length; // 4
  const firstNameL = split[1].length; // 7

  for (let i = 0; i <= lastNameL + firstNameL; i++) {
    if (i === lastNameL - 1) result = result + lastNameL;
    else if (i === lastNameL + firstNameL) result = result + firstNameL;
    else result = result + " ";
  }

  console.log(`${input}\n${result}`);
}

main();
