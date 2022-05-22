// 입력값 => 우물의 깊이 (cm, 정수로)
// 낮 동안 올라가는 거리는 50cm
// 밤 동안 미끄러지는 거리는 20cm
// 출력값 => 우물을 탈출하기까지 며칠이 걸리는지

// 51 ~ 80cm => 2일
// 81 ~ 110 => 3일
// 111 ~ 140 => 4일
// 141 ~ 170 => 5일
// 171 ~ 200 => 6일 ...

const fs = require("fs");
// 입력함수
function input() {
  process.stdout.write("우물의 깊이를 입력하시오(cm단위) : ");
  const deep = fs.readFileSync("/dev/stdin").toString().trim();

  return deep;
}

// 탈출날짜 계산함수
function cal(deep) {
  let day = 1;
  // 0cm => 0일
  if (deep === 0) day = 0;
  // 1 ~ 50cm => 1일
  if (deep >= 1 && deep <= 50) day = 1;
  // 51 ~ 80cm => 2일
  if (deep > 50) {
    for (let i = 1; i <= deep - 50; i += 30) {
      day += 1;
    }
  }

  return day;
}

// 결과 출력함수
function main() {
  const deep = input();
  const day = cal(deep);
  console.log(
    `${deep}미터 깊이의 우물을 탈출하기 위해서는 ${day}일이 걸립니다.`
  );
}
main();
