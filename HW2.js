// 278970원을 50000원권, 10000원권, 5000원권, 1000원권, 500원권, 100원권, 50원권, 10원권 단위로 환산하여 각각의 개수 출력하기
// 실행결과 => 5, 2, 1, 3, 1, 4, 1, 2 개

function main() {
  let money = 278970;
  let list = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
  for (let i = 0; i < list.length; i++) {
    let floorMoney = Math.floor(money / list[i]);
    console.log(floorMoney);
    money = money - list[i] * floorMoney;
  }
}

main();
