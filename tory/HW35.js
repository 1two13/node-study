// 1 ~ 100 출력
// 3의 배수는 *
// 5의 배수는 #
// 3과 5의 공배수(15의 배수)는 숫자
// 출력 시 한 줄에 10개

function main() {
  let result = "";
  // n은 1 ~ 100
  for (let n = 1; n <= 100; n++) {
    // 아래 3가지 경우의 수를 제외한 수는 모두 그냥 숫자로 표시하기
    let char = n.toString();
    // n이 3의 배수이면서 5의 배수인 경우에는 그냥 숫자로 표시하기
    if (n % 15 === 0) char = char;
    // 만약 n이 3의 배수인 경우에는 * 로 표시하기
    else if (n % 3 === 0) char = "*";
    // 만약 n이 5의 배수인 경우에는 # 으로 표시하기
    else if (n % 5 === 0) char = "#";

    // n.toString().length === 1 이면 n 앞 뒤로 띄어쓰기를 주기
    if (char.length === 1) result += " " + char + " ";
    // n.toString().length === 2 면 n 뒤에만 띄어쓰기를 주기
    else if (char.length === 2) result += char + " ";

    // 한 줄에 10개의 값만 보여주기
    if (n % 10 === 0) {
      result += "\n";
    }
  }
  console.log(result);
}

main();
