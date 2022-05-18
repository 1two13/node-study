// 역사, 문학, 예능 점수 입력 받아 (모두 양의 정수)
// 총점과 평점(실수) 출력하기

function main() {
  // 하드코딩으로 받기
  const input = `70 85 90`.split(" ");
  const history = input[0];
  const culture = input[1];
  const ent = input[2];
  const sum = Number(history) + Number(culture) + Number(ent);
  const ave = (sum / 3).toFixed(2);
  console.log(
    `역사, 문학, 예능 점수를 입력하세요 : ${history} ${culture} ${ent}\n총점은 ${sum} 이고 평균은 ${ave} 입니다.`
  );
}

main();
