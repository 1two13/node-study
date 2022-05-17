// kw 단위로 입력 => 사용 요금 계산
// 입력, 출력, 계산 모두 main함수에서
// 기본요금 660원
// kw 당 사용요금 88.5원
// 전체요금 = 기본요금 + (사용량 * kw 당 사용요금)
// 세금 = 전체요금 * 0.09
// 최종 사용 요금 = 전체 요금 + 세금

// 전기 사용량을 입력하세요(kw) : 150(엔터) // 입력함수에서 처리
// 전기 사용요금은 15189.150000 원 입니다. // 출력함수에서 처리 // 뒤에 0 4개를 붙인 값

function main() {
  const fs = require("fs");
  let input = fs.readFileSync("./dev/stdin").toString().split(" ");
  let full = 660 + input[0] * 88.5; // 전체요금
  let result = full + full * 0.09; // 최종 사용 요금

  console.log(
    `전기 사용량을 입력하세요(kw) : ${input}\n전기 사용요금은 ${result}0000 원 입니다.`
  );
}

main();
