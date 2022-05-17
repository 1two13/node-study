function main() {
  let result = "";
  for (let n = 1; n <= 100; n++) {
    let character = n.toString();

    if (n % 15 !== 0 && n % 3 === 0) {
      character = "*";
    } else if (n % 15 !== 0 && n % 5 === 0) {
      character = "#";
    }

    result += (character.length === 1 ? " " : "") + character + " ";

    if (n % 10 === 0) {
      console.log(result);
      result = "";
    }
  }
}

main();
