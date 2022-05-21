// 입력값 => 문자열
// 출력값 => 앞에서부터 반만 출력하기 + 대괄호로 묶기 + 문자열 뒤에는 생략기호 붙이기

function main() {
  const fs = require("fs");
  const input = fs.readFileSync("../dev/stdin").toString().trim().split("\n");

  // 나머지 반은 ... 로 출력하기
  let result = "[...]";
  const square = "□";

  for (let i = 0; i < input.length; i++) {
    let halfL = Math.floor(input[i].length / 2); // 3
    let halfW = input[i].slice(0, halfL); // str
    let repeat = square.repeat(halfL); // □□□
    // 만약 문자열의 길이가 1이라면 [□...] 로 출력하기
    if (input[i].length === 1) result = "[□...]";
    // 글자수의 반만큼 □ 더해주기
    // 글자수의 반은 글자로 출력하기
    else result = [result.slice(0, 1), repeat, halfW, result.slice(1)].join("");
    console.log(result);
    // 값 초기화
    result = "[...]";
  }
}

main();
