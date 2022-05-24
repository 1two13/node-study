// 입력값 => 사용자가 입력하는 값
// 출력값 => 맞추어가는 과정 + 최종적으로 몇 번째 만에 맞췄는지

// 랜덤수 출력 함수
function random() {
  return Math.ceil(Math.random() * 100);
}

// 입력함수
function inputCal(randomNum) {
  let input;
  let cnt = 0;
  let min = 0;
  let max = 101;
  while (randomNum !== input) {
    process.stdout.write("# 숫자를 입력하시오 : ");
    input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
    cnt++;

    // 1 ~ 100 밖의 값 입력 시 재입력 요구
    if (input < 0 || input > 100) {
      process.stdout.write("# 1 ~ 100 범위 내의 숫자를 입력하시오.\n");
      continue;
    }

    if (input < randomNum) {
      console.log(`${input}보다는 크고 ${max}보다는 작습니다.`);
      min = input;
    } else {
      console.log(`${min}보다는 크고 ${input}보다는 작습니다.`);
      max = input;
    }
  }

  return cnt;
}

// 출력함수
function main() {
  let randomNum = random();
  // console.log(randomNum);
  let cnt = inputCal(randomNum);
  console.log(`우와~ 맞았당~~~ 추카추카~~ ${cnt} 번째 만에 맞추셨습니다.`);
}

main();
