// 1 ~ 100 출력
// 3의 배수는 *
// 5의 배수는 #
// 3과 5의 공배수(15의 배수)는 숫자
// 출력 시 한 줄에 10개

function main() {
  let result = "";
  // n은 1 ~ 100
  for (let n = 1; n <= 100; n++) {
    // 만약 n이 3의 배수인 경우에는 * 로 표시하기
    if (n % 3 === 0) result += ` *`;
    // 만약 n이 5의 배수인 경우에는 # 으로 표시하기
    else if (n % 5 === 0) result += ` #`;
    // n이 3의 배수이면서 5의 배수인 경우에는 그냥 숫자로 표시하기
    // 위 3가지 경우의 수를 제외한 수는 모두 그냥 숫자로 표시하기
    else result += " " + n;
  }

  // 한 줄에 10개만 출력해야하는데.. => slice를 사용해서 10개씩 자르기
  for (let i = 1; i < result.split(" ").length; i += 10) {
    console.log(
      " " +
        result
          .split(" ")
          .slice(i, i + 10)
          .join(" ")
    );
  }
}

main();
