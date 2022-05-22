// 입력값 => 성, 이름
// 출력값 => 성 이름 + 성과 이름 글자수를 각각 성, 이름 뒷 자리에 맞추기

function main() {
  const fs = require("fs");
  process.stdout.write("#성을 입력하시오 : ");
  const lastName = fs.readFileSync("/dev/stdin").toString().trim(); // Hong
  process.stdout.write("#이름을 입력하시오 : ");
  const firstName = fs.readFileSync("/dev/stdin").toString().trim(); // Gildong

  let result = "";
  const lastNameL = lastName.length; // 4
  const firstNameL = firstName.length; // 7

  for (let i = 0; i <= lastNameL + firstNameL; i++) {
    if (i === lastNameL - 1) result = result + lastNameL;
    else if (i === lastNameL + firstNameL) result = result + firstNameL;
    else result = result + " ";
  }

  console.log(`${lastName} ${firstName}\n${result}`);
}

main();
