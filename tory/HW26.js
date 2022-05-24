// 입력값 => 사용자로부터 가위, 바위, 보 중 하나
// 컴퓨터는 랜덤 수 생성을 통해 가위, 바위, 보 중 하나를 선택
// 출력값 => 결과 출력 (a 승 b 무)

// 컴퓨터와 입력값을 비교해서 승자와 패자 정하기
// 사용자가 질 때까지 계속 해야함

// 랜덤 수 출력 함수 (1, 2, 3)
function random() {
  return Math.floor(Math.random() * 3) + 1;
}

// 입력함수
function inputCal(randomNum, input) {
  let rsp = {
    1: "바위",
    2: "가위",
    3: "보",
  };

  // 사용자가 이겼을 때
  if (
    (input === 1 && randomNum === 2) ||
    (input === 2 && randomNum === 3) ||
    (input === 3 && randomNum === 1)
  ) {
    console.log(
      `당신은 ${rsp[input]}선택, 컴퓨터는 ${rsp[randomNum]}선택 : 이겼습니다.`
    );
    return "win";
  }
  // 사용자랑 컴퓨터가 비겼을 때
  else if (input === randomNum) {
    console.log(
      `당신은 ${rsp[input]}선택, 컴퓨터는 ${rsp[randomNum]}선택 : 비겼습니다.`
    );
    return "same";
  }
  // 사용자가 졌을 때 => 게임 끝
  else {
    console.log(
      `당신은 ${rsp[input]}선택, 컴퓨터는 ${rsp[randomNum]}선택 : 졌습니다.`
    );
    return "loose";
  }
}

// 출력함수
function main() {
  let input;
  let win = 0;
  let same = 0;
  // 사용자가 졌을 때 => 게임 끝
  while (true) {
    // 컴퓨터의 값도 매번 바뀌어야 함
    let randomNum = random();
    // console.log(randomNum);
    // 사용자로부터 가위바위보 받아오기
    process.stdout.write("# 바위는 1, 가위는 2, 보는 3 중에서 선택하세요 : ");
    input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
    // 문자 입력 및 1 ~ 3 사이의 숫자가 아닐 시 재입력 요구
    if (input < 1 || input > 4 || isNaN(input)) {
      process.stdout.write("# 1 ~ 3 사이의 숫자만 입력하시오.\n");
      continue;
    }

    // 승무패 계산
    let result = inputCal(randomNum, input);
    if (result === "loose") break;
    else if (result === "win") win++;
    else same++;
  }

  console.log(`게임결과 : ${win}승 ${same}무`);
}

main();
