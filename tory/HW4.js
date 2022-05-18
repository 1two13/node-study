// 1년은 365.2422 일
// 몇 일, 몇 시간, 몇 분, 몇 초 인지
// 초는 소수점 이하 둘째 자리까지 출력

function main() {
  const target = 365.2422;
  const day = parseInt(target / 1); // 365
  const hour = (target - day) * 24;
  const intHour = parseInt(hour); // 5
  const min = (hour - intHour) * 60;
  const intMin = parseInt(min); // 48
  const sec = ((min - intMin) * 60).toFixed(2); // 46.08

  console.log(
    `${target}일은 ${day}일 ${intHour}시간 ${intMin}분 ${sec}초 입니다.`
  );
}

main();
