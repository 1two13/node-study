// 출력값 => 2 ~ 9단을 한 화면에 출력하기
// 2중 for문을 2set을 이용하여 한 번 출력하고,
// 바로 이어서 3중 for문 1set을 이용하여 똑같이 출력되도록 작성하기

const fs = require("fs");

function main() {
  process.stdout.write("<2중 for문을 이용한 출력>");

  // 한 줄 뛰기
  process.stdout.write("\n");

  // 2중 for문 1set
  // 가로 4줄
  for (let i = 1; i <= 9; i++) {
    // 세로 9줄
    for (let j = 2; j <= 5; j++) {
      if (String(j * i).length === 1)
        process.stdout.write(`${j} * ${i} = ${j * i}      `);
      else process.stdout.write(`${j} * ${i} = ${j * i}     `);
      // 가로가 4줄 될 때마다 다음줄로
      if (j === 5) process.stdout.write("\n");
    }
  }

  // 한 줄 뛰기
  process.stdout.write("\n");

  // 2중 for문 2set
  // 세로 9줄
  for (let i = 1; i <= 9; i++) {
    // 가로 4줄
    for (let j = 6; j <= 9; j++) {
      if (String(j * i).length === 1)
        process.stdout.write(`${j} * ${i} = ${j * i}      `);
      else process.stdout.write(`${j} * ${i} = ${j * i}     `);
      // 가로가 4줄 될 때마다 다음줄로
      if (j === 9) process.stdout.write("\n");
    }
  }

  process.stdout.write("-----------------------------------------------------");

  // 한 줄 뛰기
  process.stdout.write("\n\n");

  process.stdout.write("<3중 for문을 이용한 출력>");

  // 한 줄 뛰기
  process.stdout.write("\n");

  // 3중 for문 1set
  // 2세트로 나누기
  for (let i = 1; i <= 2; i++) {
    // 각 세트당 세로 9줄
    for (let j = 1; j <= 9; j++) {
      // 각 세트당 가로 4줄
      for (let k = 2; k <= 9; k++) {
        if (i === 1 && k <= 5) {
          if (String(k * j).length === 1)
            process.stdout.write(`${k} * ${j} = ${k * j}      `);
          else process.stdout.write(`${k} * ${j} = ${k * j}     `);
          // 가로가 4줄 될 때마다 다음줄로
          if (k === 5) process.stdout.write("\n");
        }

        if (i === 2 && k >= 6 && k <= 9) {
          if (String(k * j).length === 1)
            process.stdout.write(`${k} * ${j} = ${k * j}      `);
          else process.stdout.write(`${k} * ${j} = ${k * j}     `);
          // 가로가 4줄 될 때마다 다음줄로
          if (k === 9) process.stdout.write("\n");
        }
      }
    }
    // i가 2일 때 한줄 뛰기
    process.stdout.write("\n");
  }
}

main();
