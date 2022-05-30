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

const fs = require("fs");
// 4가지 메뉴를 한 줄에 출력하고 메뉴번호 입력 받는 함수
function menu() {
  let menuNum;
  process.stdout.write(
    `1. 환풍구 열기 / 2. 환풍구 닫기 / 3. 환풍구 전체 전환 / 4. 종료 : `
  );
  menuNum = Number(fs.readFileSync("/dev/stdin").toString().trim());

  // 1 ~ 4 이외의 메뉴번호가 입력되거나 문자가 입력되면 재입력 요구
  while (
    isNaN(menuNum) &&
    menuNum !== "1" &&
    menuNum !== "2" &&
    menuNum !== "3" &&
    menuNum !== "4"
  ) {
    console.log("1, 2, 3, 4 중 하나의 숫자만 입력해주세요.");
    process.stdout.write(
      `1. 환풍구 열기 / 2. 환풍구 닫기 / 3. 환풍구 전체 전환 / 4. 종료 : `
    );
    menuNum = Number(fs.readFileSync("/dev/stdin").toString().trim());
  }

  return menuNum;
}

let uiNum;
// 환풍구 열기 함수
function openFan(message) {
  process.stdout.write(message);
  uiNum = Number(fs.readFileSync("/dev/stdin").toString().trim()); // 1 ~ 8

  // 1 ~ 8 이외의 값에 대한 재입력 기회 제공
  while (ui >= 1 && ui <= 8) {
    console.log("1 ~ 8 중 하나의 숫자만 입력해주세요.");
    process.stdout.write(message);
    uiNum = Number(fs.readFileSync("/dev/stdin").toString().trim());
  }

  //TODO 해당 uiNum FAN 만 ON 하기

  return uiNum;
}

// 환풍구 닫기 함수
function offFan() {}

// 환풍구 On, Off 상태를 역으로 바꾸어주는 함수
function reverseFan(uiNum) {
  //TODO 환풍구 on, off 상태를 나타내기 위한 데이터 : 8bit로 구성된 데이터형 이용하기 (bit 조절 연산자)
  // bit 조절 연산자 : &, |, ^, ~, <<, >> 를 활용한 비트 조절 기술 구현
  // | 를 사용하여 어느것 하나라도 1이 있으면 1로 치환 => 즉
  // 처음에는 전부 OFF, 즉 0으로 시작하고, // 0000 0000 //
  // 만약 하나의 비트가 1이 되면 해당 자리를 ON으로 변경
  // 만약 하나의 비트가 0이 되면 해당 자리의 OFF으로 변경
  // uiNum FAN이 on이면 off로
  // uiNum FAN이 off면 on으로
}

// fan의 상태를 출력하는 함수
function displayFan(uiNum) {
  //TODO uiNum에 따라 FAN UI 변경
}

function main() {
  let uiNum;
  const menuNum = menu();

  if (menuNum === "1") {
    uiNum = openFan(
      "----------------------------------\nFan 열기 작업 실행 화면\n----------------------------------\n* OPEN할 FAN 번호를 입력하시오(1-8) : \n----------------------------------"
    ); // 1 ~ 8
  }
  // else if (menuNum === "2") offFan();
  // else if (menuNum === "3") reverseFan();
  // 항상 실행되는 코드 1
  reverseFan(uiNum);
  // 항상 실행되는 코드 2
  displayFan(uiNum);
}

main();
