// 입력값 => 영문 이름
// 출력값 => 이름 전체를 ""로 묶어서 출력, 필드폭을 20자로(""안에 있는 글자를 20자로) 이름을 출력하되 ""로 감싸기, 필드폭을 20자로 이름을 출력하되 ""로 감싸서 왼쪽 정렬

function main() {
  const fs = require("fs");
  const input = fs.readFileSync("../dev/stdin").toString().trim().split("\n");
  const name = input[0];

  let result = "";
  for (let i = 0; i < 20 - name.length; i++) {
    result = result + " ";
  }
  result = result + name;

  let result2 = "";
  for (let i = 0; i < 20 - name.length; i++) {
    result2 = result2 + " ";
  }
  result2 = name + result2;

  console.log(`"${name}"\n"${result}"\n"${result2}"`);
}

main();
