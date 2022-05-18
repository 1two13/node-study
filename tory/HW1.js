// 성명은 main() 에서 출력
// 나이, 키 => 각각 출력하고, main() 함수 내에서 선언된 변수에 저장해두고, 나이와 키를 출력하는 함수를 호출할 때 전달인자로 보내서 출력하기

// TODO // printAge() 함수의 선언부
function printAge(age) {
  console.log(age);
}
// TODO // printHeight 함수의 선언부
function printHeight(height) {
  console.log(height);
}

function main() {
  let name = "토리";
  let age = 1;
  let height = 30;

  console.log(name);
  printAge(age);
  printHeight(height);
}

main();
