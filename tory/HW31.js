// 주 메뉴 => i-입금, o-출금, q-종료
// 시작할 때 잔액은 0원

// 잔액보다 인출액이 많으면 => "잔액이 부족합니다." 출력 => 주 메뉴로 돌아가기
// 입금액과 출금액 입력 시 음수 값 입력하면 => "잘못 입력하셨습니다." 출력 => 금액 재입력 요구
// 입금액과 출금액 입력 시 문자 입력하면 => "잘못 입력하셨습니다." 출력 => 금액 재입력 요구

const fs = require("fs");

let balance = 0; // 잔액
// 메뉴 출력 후 사용자가 선택한 메뉴 문자(i, o, q) 리턴하는 함수
function menu() {
  // 메뉴 출력
  process.stdout.write("# 메뉴를 선택하시오(i-입금, o-출금, q-종료) : ");
  let ioq = fs.readFileSync("/dev/stdin").toString().trim();
  // i, o, q 외 문자 입력 시 재입력 요구하기 // 예시와 문제 설명이 조금 달라서 문제 설명으로 따라갔다.
  while (ioq !== "i" && ioq !== "o" && ioq !== "q") {
    console.log("* 잘못 입력하셨습니다.");
    process.stdout.write("# 메뉴를 선택하시오(i-입금, o-출금, q-종료) : ");
    ioq = fs.readFileSync("/dev/stdin").toString().trim();
  }
  // 사용자가 선택한 메뉴 문자 리턴
  return ioq;
}

// 전달인자로 받은 문자열을 출력하고, 정수(음, 양수)를 입력 받아 리턴하는 함수
function input(string) {
  // TODO 전달인자로 받은 문자열 출력

  while (string < 0 || isNaN(string)) {
    process.stdout.write("* 잘못 입력하셨습니다. 다시 입력하시오 : ");
    string = fs.readFileSync("/dev/stdin").toString().trim();
  }

  return string;
}

// 입금 처리 함수
function deposit() {
  process.stdout.write("입금액을 입력하세요 : ");
  let depM = fs.readFileSync("/dev/stdin").toString().trim();

  return depM;
}

// 출금 처리 함수
function withdraw() {
  process.stdout.write("출금액을 입력하세요 : ");
  let wdM = fs.readFileSync("/dev/stdin").toString().trim();

  return wdM;
}

function main() {
  // 맨 처음에 "현재 잔액은 0원 입니다." 출력
  console.log(`현재 잔액은 ${balance}원 입니다.`);

  let ioq = menu();
  // ioq가 "i"일 때 입금처리함수 호출
  if (ioq === "i") {
    let depM = Number(deposit()); // -3000
    // depM이 양수인지 음수인지 문자인지 판단하기 위해 input() 실행
    let money = input(depM);
    // console.log(money);
    balance = balance + Number(money);
    console.log(`현재 잔액은 ${balance} 입니다.`);
  }
  // ioq가 "o"일 때 출금처리함수 호출
  else if (ioq === "o") {
    let wdM = Number(withdraw());
    let money = input(wdM);
    // 잔액보다 인출액이 많으면 => "잔액이 부족합니다." 출력 => 주 메뉴로 돌아가기
    if (balance < money) {
      console.log(`* 잔액이 부족합니다.\n* 현재 잔액은 ${balance} 입니다.`);
    } else {
      balance = balance - money;
      console.log(`현재 잔액은 ${balance} 입니다. `);
    }
  }
}

main();
