//! 주요 기능
// 총 8개의 환풍구 개폐(on, off) 관리 시스템 구현하기

//! 세부 기능
// 특정 환풍구만 on(open)하는 기능 // openFan 함수
// 특정 환풍구만 off(close)하는 기능 // offFan 함수
// 전체 환풍구 상태를 전환(반전)하는 기능 // on => off, off => on // reverseFan 함수
// 처음 시작할 때 모든 환풍구는 off 상태

//! 사용 데이터형
// 환풍구 on, off 상태를 나타내기 위한 데이터 : 8bit로 구성된 데이터형 이용하기
// 메뉴번호를 입력 받을 변수 선언 : 데이터형 제한 없음

//! 주요 사용 기술
// bit 조절 연산자 : &, |, ^, ~, <<, >> 를 활용한 비트 조절 기술 구현
// 간단한 Number select를 이용한 UI 작성
// 잘못 입력된 데이터(메뉴번호 1 ~ 4, FAN번호 1 ~ 8 이외의 값)에 대한 재입력 기회 제공

// 8번 FAN => 1000 0000
// 7번 FAN => 0100 0000
// 6번 FAN => 0010 0000
// 5번 FAN => 0001 0000
// 4번 FAN => 0000 1000
// 3번 FAN => 0000 0100
// 2번 FAN => 0000 0010
// 1번 FAN => 0000 0001

const fs = require("fs");
let fan = 0; // 처음에는 전부 OFF, 즉 0으로 시작하고, // 0000 0000

// 현재 fan의 상태
function getFan() {
  return fan;
}
// 현재 fan의 상태가 바꼈다면 바뀐 상태를 fan에 할당
function setFan(newFan) {
  fan = newFan;
}

// 메뉴번호 또는 FAN 번호를 입력 받는 함수
function input(message, errorMessage, validateFunction) {
  process.stdout.write(message);
  // 1 ~ 4 숫자
  let result = Number(fs.readFileSync("/dev/stdin").toString().trim());
  // 1 ~ 4 이외의 메뉴번호(number)가 입력되거나 문자가 입력되면 재입력 요구
  while (!validateFunction(result)) {
    console.warn(errorMessage);
    process.stdout.write(message);
    result = Number(fs.readFileSync("/dev/stdin").toString().trim());
  }

  return result;
}

// 4가지 메뉴를 한 줄에 출력하는 함수
// input 함수를 사용하기 위한 준비자료같은 함수
function menu() {
  const message =
    "1. 환풍구 열기 / 2. 환풍구 닫기 / 3. 환풍구 전체 전환 / 4. 종료 : ";
  const errorMessage = "1 ~ 4의 숫자를 입력해주세요.";
  // T/F 리턴
  const validateFunction = (number) => {
    return !isNaN(number) && 1 <= number && number <= 4;
  };

  return input(message, errorMessage, validateFunction);
}

// 환풍구 열기 함수
function openFan() {
  console.log("--------------------------------------------------------");
  console.log("        Fan 열기 작업 실행 화면");
  console.log("--------------------------------------------------------");

  const message = "* OPEN할 FAN 번호를 입력하시오(1-8) : ";
  const errorMessage = "1 ~ 8의 숫자를 입력해주세요.";
  const validateFunction = (number) => {
    return !isNaN(number) && 1 <= number && number <= 8;
  };

  const fanNum = input(message, errorMessage, validateFunction);

  // 현재의 fan을 가져오기
  const fan = getFan();
  const target = 1 << (fanNum - 1); // 비트 연산자
  // 1번 FAN ON => 0000 0000 | 0000 0001 = 0000 0001
  // 5번 FAN ON => 0000 0001 | 0001 0000 = 0001 0001
  // 8번 FAN ON => 0001 0001 | 1000 0000 = 1001 0001
  const newFan = fan | target;
  setFan(newFan);
}

// 환풍구 닫기 함수
function offFan() {
  console.log("--------------------------------------------------------");
  console.log("        Fan 닫기 작업 실행 화면");
  console.log("--------------------------------------------------------");

  const message = "* CLOSE할 FAN 번호를 입력하시오(1-8) : ";
  const errorMessage = "1 ~ 8의 숫자를 입력해주세요.";
  const validateFunction = (number) => {
    return !isNaN(number) && 1 <= number && number <= 8;
  };

  const fanNum = input(message, errorMessage, validateFunction);

  const fan = getFan();
  const target = ~(1 << (fanNum - 1)); // 각 자리의 비트 뒤집기
  // 0000 0000 & 0000 0001 = 0000 0001
  // 0000 0001 & 0001 0000 = 0001 0001
  // 0001 0001 & 1000 0000 = 1001 0001
  const newFan = fan & target;
  setFan(newFan);
}

// 환풍구 On, Off 상태를 역으로 바꾸어주는 함수
function reverseFan() {
  // on이면 off로
  // off면 on으로
  console.log("--------------------------------------------------------");
  console.log("        Fan 닫기 작업 실행 화면");
  console.log("--------------------------------------------------------");
  console.log("전체 FAN의 상태가 전환되었습니다. (ON, OFF 상태 뒤바뀜)");

  setFan(~getFan());
}

// fan의 상태를 출력하는 함수
function displayFan() {
  const fan = getFan();
  let fanString = "";
  for (let i = 8; i >= 1; i--) {
    const target = 1 << (i - 1);
    const state = fan & target;
    fanString += `${state === 0 ? "OFF" : "ON "}    `;
  }

  console.log("--------------------------------------------------------");
  console.log("8번FAN 7번FAN 6번FAN 5번FAN 4번FAN 3번FAN 2번FAN 1번FAN");
  console.log(fanString);
  console.log("--------------------------------------------------------");
}

function main() {
  while (true) {
    const menuNum = menu();
    if (menuNum === 4) {
      console.log("프로그램이 종료됩니다.");
      break;
    }

    if (menuNum === 1) {
      openFan();
    } else if (menuNum === 2) {
      offFan();
    } else if (menuNum === 3) {
      reverseFan();
    }

    displayFan();
    console.log("");
  }
}

main();
