// 입력값 => 몸무게, 키
// 출력값 => 비만도
// BMI = kg / m의 제곱
// 사용함수 => 입력함수, bmi 계산함수, 출력함수

const fs = require("fs");

// 입력함수
function entry() {
  process.stdout.write("몸무게를 입력하세요(kg) : ");
  const weight = fs.readFileSync("/dev/stdin").toString().trim();
  process.stdout.write("키를 입력하세요(m) : ");
  const height = fs.readFileSync("/dev/stdin").toString().trim();
  return [weight, height];
}

// bmi 계산함수
function cal() {
  const [weight, height] = entry();
  const bmi = (weight / Math.pow(height, 2)).toFixed(1);
  if (bmi < 18.5) result = "저체중";
  else if (bmi < 25.0) result = "정상체중";
  else if (bmi < 30.0) result = "과체중";
  else if (bmi < 40) result = "비만";
  else result = "고도비만";
  return bmi;
}

// 출력함수
function main() {
  const bmi = cal();
  console.log(`당신의 BMI는 ${bmi}으로 ${result}입니다.`);
}
main();
