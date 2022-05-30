// 출력값 => 1항 ~ N항까지의 피보나치 수열의 합

const fs = require("fs");

function main() {
  process.stdout.write("피보나치 수열의 항수를 입력하시오 : ");
  const input = fs.readFileSync("/dev/stdin").toString().trim(); // 항수

  let memo = [];
  for (let i = 0; i < input; i++) {
    if (i === 0) memo.push(1);
    else if (i === 1) memo.push(1);
    else memo.push(memo[i - 2] + memo[i - 1]);
  }

  let result = 0;
  let cal = "";
  for (let j = 0; j < memo.length; j++) {
    cal = cal + " + " + String(memo[j]);
    result = result + memo[j];
  }

  console.log(`${cal.slice(3)} = ${result}`); // 합
}

main();
