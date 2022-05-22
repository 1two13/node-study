// 입력값 => 키 (실수값으로)
// 출력값 => 평균 (소수점 이하 첫 째 자리까지)

const fs = require("fs");

function main() {
  process.stdout.write("1번 학생의 키는? ");
  const one = fs.readFileSync("/dev/stdin").toString().trim();
  process.stdout.write("2번 학생의 키는? ");
  const two = fs.readFileSync("/dev/stdin").toString().trim();
  process.stdout.write("3번 학생의 키는? ");
  const three = fs.readFileSync("/dev/stdin").toString().trim();
  process.stdout.write("4번 학생의 키는? ");
  const four = fs.readFileSync("/dev/stdin").toString().trim();
  process.stdout.write("5번 학생의 키는? ");
  const five = fs.readFileSync("/dev/stdin").toString().trim();

  const ave = (
    (Number(one) + Number(two) + Number(three) + Number(four) + Number(five)) /
    5
  ).toFixed(1);
  console.log(`다섯 명의 평균 키는 ${ave}cm 입니다.`);
}

main();
