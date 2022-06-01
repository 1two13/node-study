// 0부터 99를 한줄에 10개씩 수직으로 출력

function main() {
  let result = "";

  // 두 번째자리
  for (let i = 0; i < 10; i++) {
    // 첫 번째자리
    let j = 0;
    // 만약 첫번째 자리(j)가 0이라면 0을 제거하기
    if (j === 0) result = result + i + " ";
    while (j < 9) {
      j++;
      result = result + j + i + " ";
      // 한 줄에 10개의 값만 보여주기
      // i가 9일 때는 줄바꿈 하지 않기
      if ((j + 1) % 10 === 0 && i !== 9) result += "\n";
    }
  }

  console.log(result);
}

main();
