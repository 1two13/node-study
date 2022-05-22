// 입력값 => 성명, 키, 성별

function main() {
  const fs = require("fs");
  process.stdout.write("# 성명 입력 : ");
  const name = fs.readFileSync("/dev/stdin").toString().trim();
  process.stdout.write("# 키 입력(cm단위) : ");
  const height = fs.readFileSync("/dev/stdin").toString().trim();
  process.stdout.write("# 성별입력(M/F) : ");
  const gender = fs.readFileSync("/dev/stdin").toString().trim();

  let g;
  if (gender === "M") g = "남성";
  else g = "여성";

  console.log(`${name}씨의 키는 ${height}cm이고 ${g}입니다.`);
}

main();
