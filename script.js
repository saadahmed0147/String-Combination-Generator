var s = prompt("Enter string...: ");

function generator(s) {
  let combinations = [];
  let len = s.length;
  for (let i = 0; i <= len; i++) {
    for (let j = i + 1; j < len + 1; j++) {
        combinations.push(s.slice(i, j));
    }
  }
  return combinations;
}

alert(generator(s));