// 입력값 => 10진수
// 출력값 => 2진수로

// bit 조절 연산자 및 반복문 사용하여 음수는 2의 보수 상태로 출력하기

function main() {
  process.stdout.write("* 10진수 정수를 입력하시오 : ");
  let dec = Number(require("fs").readFileSync("/dev/stdin").toString().trim()); // 10진수
  let cDec = dec;
  let result = "00000000000000000000000000000000"; // 32개

  // dec가 양수일 경우 32길이에서 rest를 제외하고 모두 0으로 채우기
  if (dec > 0) {
    // dec가 0이 되면 반복문 종료
    let i = 0;
    while (dec !== 0) {
      let arr = result.split("");
      // result[i] 값을 dec % 2로 바꾸고
      arr.splice(i, 1, dec % 2);
      result = arr.join("");
      // 몫 초기화
      dec = Math.floor(dec / 2);
      i++;
    }
    result = result.split("").reverse().join("");
    // console.log(result);
  }
  // dec가 음수일 경우
  else {
    dec = -dec;

    let i = 0;
    let arr;
    while (dec !== 0) {
      arr = result.split("");
      // result[i] 값을 dec % 2로 바꾸고
      arr.splice(i, 1, dec % 2);
      result = arr.join("");
      // 몫 초기화
      dec = Math.floor(dec / 2);
      i++;
    }
    result = result.split("").reverse().join(""); // 00000000000000000000000000000001

    // 모든 0은 1로, 1은 0으로 바꾸기
    for (let j = 0; j < result.length; j++) {
      arr = result.split("");
      if (arr[j] === "0") arr.splice(j, 1, 1);
      else arr.splice(j, 1, 0);
      result = arr.join("");
    }
    // console.log(result); // 11111111111111111111111111111110
    // +1 더해주기
    result = result.split("");
    temp = result.splice(result.length - 1, 1, 1);
    result = result.join("");
  }

  console.log(`${cDec}(10) = ${result}(2)`);
}

main();
