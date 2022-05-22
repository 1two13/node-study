// 입력값 => 년도
// 출력값 =>

// 입력값 받을 때
/* 
1번. 년도 % 4 === 0 => 2번 o
    년도 % 4 !== 0 => 평년 o
2번. 년도 % 100 === 0 => 3번 
    년도 % 100 !== 0 => 윤년 o
3번. 년도 % 400 === 0 => 윤년 o
    년도 % 100 !== 0 => 평년 o
*/

const fs = require("fs");
// 입력함수
function input() {
  process.stdout.write("년도를 입력하시오 : ");
  const year = fs.readFileSync("/dev/stdin").toString().trim();
  return year;
}

// yearCheck 함수 (전달받은 년도를 검사하여 윤년이면 1, 평년이면 0 리턴)
function yearCheck() {
  const year = input();

  let check;
  if (year % 4 !== 0) check = 0;
  else if (year % 4 === 0 && year % 100 !== 0) check = 1;
  else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) check = 1;
  else check = 0;

  let result;
  // check 가 윤년이면
  if (check === 0) result = "평년(Common year)";
  else result = "윤년(Leap year)";

  console.log(`${year}년은 ${result}입니다.`);
}

yearCheck();
