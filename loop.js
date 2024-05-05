/* Loop Statements */

/* write down a program to print first 20 even number */
for (i = 0; i <= 40; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let a = 2;
for (let b = 1; b <= 20; b++) {
  console.log(a);
  a += 2;
}
/* pattern Print */

for (i = 0; i <= 5; i++) {
  let toPrint = "";
  for (j = 1; j <= i; j++) {
    toPrint += j + "";
  }
  console.log(toPrint);
}

console.log("--------------- REVERSE PATTERN--------------  ");
for (i = 5; i >= 0; i--) {
  let toPrint = "";
  for (j = 1; j <= i; j++) {
    toPrint += j + "";
  }
  console.log(toPrint);
}
