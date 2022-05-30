// 입력값 => 사용자 코드, 사용량
// 출력값 => 사용자코드(한글), 사용량, 수도요금

const fs = require("fs");
// 입력함수
function inputCal() {
  process.stdout.write(
    "* 사용자 코드를 입력하시오(1:가정용/2:상업용/3:공업용) : "
  );
  let code = fs.readFileSync("/dev/stdin").toString().trim();
  process.stdout.write("* 사용량을 입력하시오(ton단위) : ");
  let usage = Number(fs.readFileSync("/dev/stdin").toString().trim());

  return [code, usage];
}

// 수도요금 계산 함수
function rateCal(code, usage) {
  // 수도 사용요금 => 사용량 * ton 가격
  let fee;
  // 총 수도요금 : 수도 사용요금 + 세금(수도 사용요금 * 0.05)
  let totalFee;

  // code === "1" => ton당 50원
  if (code === "1") {
    fee = usage * 50;
    totalFee = fee + fee * 0.05;
  }
  // code === "2" => ton당 45원
  else if (code === "2") {
    fee = usage * 45;
    totalFee = fee + fee * 0.05;
  }
  // code === "3" => ton당 30원
  else {
    fee = usage * 30;
    totalFee = fee + fee * 0.05;
  }

  return totalFee;
}

// 결과 출력 함수
function main() {
  let [code, usage] = inputCal();
  let totalFee = rateCal(code, usage);
  let message = "가정용";

  if (code === "1") message;
  else if (code === "2") message = "상업용";
  else message = "공업용";

  console.log(
    `# 사용자코드 : ${code}(${message})\n# 사용량 : ${usage}ton\n# 총수도요금 : ${totalFee}원`
  );
}

main();
