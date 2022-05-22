// 입력값 => 1주일간 일한 시간
// 출력값 => 총 수입, 세금, 실수입

// 기본급여 => 시간당 3000원
// 초과근무수당 => 시간 * 기본급 * 1.5 (40시간 초과분에 대하여 적용)
// 세율 => 처음 100,000원(10만원) 까지 15%, 10만원 초과 금액은 25%

const fs = require("fs");
// 입력함수
function input() {
  process.stdout.write("1주일간의 근무시간을 입력하시오 : ");
  const hour = fs.readFileSync("/dev/stdin").toString().trim();
  return hour;
}

// 총 수입 계산함수
function incomeCal(hour) {
  let income;
  // 40시간 초과하지 않았을 때
  if (hour < 40) income = hour * 3000;
  // 40시간 초과했을 때
  // 40시간까지는 기본급으로 주고, 그 이상은 초과근무수당으로
  else income = 40 * 3000 + (hour - 40) * 3000 * 1.5;

  return income;
}

// 세금 계산함수
function taxCal(income) {
  let tax;
  let cri = 100000;
  // 처음 100,000원(10만원) 까지 15%
  if (income < cri) tax = income * 0.15;
  // 10만원 초과 금액은 25%
  else tax = cri * 0.15 + (income - cri) * 0.25;

  return tax;
}

// 결과 출력함수
function main() {
  const hour = input();
  const income = incomeCal(hour);
  const tax = taxCal(income);
  console.log(
    `# 총수입 : ${income}원\n# 세  금 : ${tax}원\n# 실수입 : ${income - tax}원`
  );
}

main();
