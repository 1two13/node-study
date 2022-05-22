// 주행거리 km
// 시속 km/h
// 주행시간은 시, 분, 초(소수점 이하 셋째 자리까지) 로 출력
// 주행거리와 시속 입력 받아 주행시간 출력하기

function main() {
  const fs = require("fs");
  process.stdout.write("거리를 입력하시오(km단위) : ");
  const mileage = fs.readFileSync("/dev/stdin").toString().trim(); // 주행거리
  process.stdout.write("시속을 입력하시오(km/h단위) : ");
  const speed = fs.readFileSync("/dev/stdin").toString().trim(); // 시속
  // 주행시간 = 주행거리 / 시속
  let time = mileage / speed;
  let hour = Math.floor(time);
  let min = (mileage / speed - hour) * 60;
  let intMin = parseInt((mileage / speed - hour) * 60);
  let sec = ((min - intMin) * 60).toFixed(3);

  console.log(`${mileage} km = >${hour}시간 ${intMin}분 ${sec} 초 소요됨`);
}

main();
