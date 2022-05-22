// 입력값 => 나이, 인원수
// 출력값 => 입장료
// 5명 이상은 단체 => 입장료의 10% 할인

const fs = require("fs");
// 입력함수
function input() {
  process.stdout.write("입장객의 나이를 입력하시오 : ");
  const age = fs.readFileSync("/dev/stdin").toString().trim();
  process.stdout.write("입장객의 수를 입력하시오 : ");
  const count = fs.readFileSync("/dev/stdin").toString().trim();
  return [age, count];
}

// 출력함수
function main() {
  const [age, count] = input();

  // 인당 입장료
  let fee;
  if (age <= 7) fee = 500;
  else if (age >= 8 && age <= 13) fee = 700;
  else if (age >= 14 && age <= 19) fee = 1000;
  else if (age >= 20 && age <= 55) fee = 1500;
  else fee = 500;

  // 전체 입장료
  const totalFee = fee * count;

  // 할인금액
  let discount;
  if (count >= 5) discount = totalFee * 0.1;
  else discount = 0;

  // 결제금액
  const payment = totalFee - discount;

  console.log(
    `입장료 = > ${totalFee}\n할인금액 = > ${discount}\n결제금액 => ${payment}`
  );
}

main();
