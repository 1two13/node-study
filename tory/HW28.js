// 입력값 => 영문 문장
// 출력값 => 문자를 종류별로 카운트하기
// 입력종료조건 => new line 에서 EOF(ctrl + z) 입력 시 종료

function inputCal() {
  process.stdout.write("# 영문 문장을 입력 하시오 : ");
  const input = require("fs").readFileSync("/dev/stdin").toString().trim();

  return input;
}

function main() {
  const input = inputCal();

  let eng = 0;
  let num = 0;
  let tab = 0;
  let etc = 0;
  for (let i = 0; i < input.length; i++) {
    // 영문자 (아스키코드)
    if (
      ("A" <= input[i] && input[i] <= "Z") ||
      ("a" <= input[i] && input[i] <= "z")
    )
      eng++;
    // 숫자 (아스키코드)
    else if ("0" <= input[i] && input[i] <= "9") num++;
    // 여백
    else if (input[i] === " " || input[i] === "\t" || input[i] === "\n") tab++;
    // 그 외 기타문자 선택
    else etc++;
  }

  console.log(
    `* 영문자 대소문자 개수 : ${eng}개\n* 숫자문자 개수 : ${num}개\n* 여백문자(space, tab, enter) 개수 : ${tab}개\n* 그 외 기타문자 개수 : ${etc}개`
  );
}

main();

// Hello! My name is sophia.
// My number : [010-9207-8234]
// e-mail address : [mylovec@gmail.com]
// Thank you. ^^
