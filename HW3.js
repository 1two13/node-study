// 54321초를 시, 분, 초 단위로 환산하기
// 54321초는 15시간 5분 21초 입니다.

function main() {
  const target = 54321;
  const hour = parseInt(target / 3600);
  const min = parseInt((target % 3600) / 60);
  const sec = target % 60;
  console.log(`${target}초는 ${hour}시간 ${min}분 ${sec}초 입니다.`);
}

main();
