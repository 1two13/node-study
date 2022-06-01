const fs = require("fs");
let fan = 0;

function getFan() {
  return fan;
}

function setFan(newFan) {
  fan = newFan;
}

// 메뉴번호 또는 FAN 번호를 입력 받는 함수
function input(message, errorMessage, validateFunction) {
  process.stdout.write(message);
  let result = Number(fs.readFileSync("/dev/stdin").toString().trim()); // 1 ~ 4 숫자
  // 1 ~ 4 이외의 메뉴번호(number)가 입력되거나 문자가 입력되면 재입력 요구
  while (!validateFunction(result)) {
    console.warn(errorMessage);
    process.stdout.write(message);
    result = Number(fs.readFileSync("/dev/stdin").toString().trim());
  }

  return result;
}

// input 함수를 사용하기 위한 준비자료같은 함수
function menu() {
  const message =
    "1. 환풍구 열기 / 2. 환풍구 닫기 / 3. 환풍구 전체 전환 / 4. 종료 : ";
  const errorMessage = "1~4의 숫자를 입력해주세요.";
  // T/F 값 리턴
  const validateFunction = (number) => {
    return !isNaN(number) && 1 <= number && number <= 4;
  };

  return input(message, errorMessage, validateFunction);
}

function openFan() {
  console.log("--------------------------------------------------------");
  console.log("        Fan 열기 작업 실행 화면");
  console.log("--------------------------------------------------------");

  const message = "* OPEN할 FAN 번호를 입력하시오(1-8) : ";
  const errorMessage = "1~8의 숫자를 입력해주세요.";
  const validateFunction = (number) => {
    return !isNaN(number) && 1 <= number && number <= 8;
  };

  const fanNum = input(message, errorMessage, validateFunction);

  const fan = getFan();
  const target = 1 << (fanNum - 1); // 비트연산자
  const newFan = fan | target;
  setFan(newFan);
}

function offFan() {
  console.log("--------------------------------------------------------");
  console.log("        Fan 닫기 작업 실행 화면");
  console.log("--------------------------------------------------------");

  const message = "* CLOSE할 FAN 번호를 입력하시오(1-8) : ";
  const errorMessage = "1~8의 숫자를 입력해주세요.";
  const validateFunction = (number) => {
    return !isNaN(number) && 1 <= number && number <= 8;
  };

  const fanNum = input(message, errorMessage, validateFunction);

  const fan = getFan();
  const target = ~(1 << (fanNum - 1)); // 각 자리의 비트 뒤집기
  // fan과 newFan의 각 자리를 대응하는 비트가 모두 1일 경우에만 1 반환
  const newFan = fan & target;
  setFan(newFan);
}

function reverseFan() {
  console.log("--------------------------------------------------------");
  console.log("        Fan 닫기 작업 실행 화면");
  console.log("--------------------------------------------------------");
  console.log("전체 FAN의 상태가 전환되었습니다. (ON, OFF 상태 뒤바뀜)");

  setFan(~getFan());
}

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
