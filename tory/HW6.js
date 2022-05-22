// 화씨(F) 입력 받고 섭씨(C) 출력
// 섭씨는 소수점 이하 첫째 자리까지 출력
// C = 5 / 9(F - 32)

function main() {
  const fs = require("fs");
  process.stdout.write("화씨 온도를 입력하세요 : ");
  const f = fs.readFileSync("/dev/stdin").toString();

  let c = ((5 / 9) * (f - 32)).toFixed(1);

  console.log(`섭씨 온도는 ${c}도 입니다.`);
}

main();
