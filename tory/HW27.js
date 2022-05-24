// 입력값 => 달걀 무게
// 150 ~ 500g => 포장
// 150 미만 || 500 초과 => 포장X
// 총 10개의 달걀 한 박스 포장하는 프로그램 작성

// 입력함수
function inputCal() {
  let cnt = 0;

  while (cnt < 10) {
    process.stdout.write("# 계란의 무게를 입력하세요(단위 : g) : ");
    let input = Number(
      require("fs").readFileSync("/dev/stdin").toString().trim()
    );
    // 문자 입력 시 재입력 요구하기
    if (isNaN(input)) {
      process.stdout.write("# 숫자만 입력하세요.\n");
      continue;
    }
    // 150 ~ 500g
    if (input >= 150 && input <= 500) {
      cnt++;
      console.log(`* 현재 달걀의 수 : ${cnt}`);
    }
    // 150 미만
    if (input < 150) {
      console.log("* 메추리알 가지고 장난하지 마시오 ~ ^^");
    }
    // 500 초과
    if (input > 500) {
      console.log("* 타조알 가지고 장난하지 마시오 ~ ^^");
    }
  }

  return cnt;
}

function main() {
  let cnt = inputCal();
  if (cnt === 10) console.log("*** 달걀 포장이 끝났습니다. ");
}

main();
