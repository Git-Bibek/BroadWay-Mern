let string = "BIBEK";
for (i = 0; i < string.length; i++) {
  let pattern = "";
  for (j = 0; j <= i; j++) {
    pattern += string[j] + " ";
  }
  console.log(pattern);
}

let size = 5;
for (i = 0; i <= size; i++) {
  let pattern = "";
  for (j = 0; j <= size; j++) {
    if (i === 0 || i === size || j === 0 || j === size) {
      pattern += "* ";
    } else {
      pattern += "  ";
    }
  }
  console.log(pattern);
}
