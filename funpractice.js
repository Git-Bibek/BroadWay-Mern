const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
/*  sum of  array in to a */
num.forEach((element) => {
  sum = sum + element;
});
console.log(sum);

/*  sum of  array in to b */
let b = 0;
num.map((element) => {
  b = b + element;
});
console.log(b);

/*  use reduce */
const reduceSum = num.reduce((sum1, curr) => {
  console.log(sum1, curr);
  return sum1 + curr;
}, 0);
console.log(reduceSum);
