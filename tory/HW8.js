// 역사, 문학, 예능 점수 입력 받아 (모두 양의 정수)
// 총점과 평점(실수) 출력하기

function main() {
  const fs = require("fs");
  process.stdout.write("역사, 문학, 예능 점수를 입력하세요 : ");
  const score = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

  const history = score[0];
  const culture = score[1];
  const ent = score[2];
  const sum = Number(history) + Number(culture) + Number(ent);
  const ave = (sum / 3).toFixed(2);

  console.log(`총점은 ${sum} 이고 평균은 ${ave} 입니다.`);
}

main();
