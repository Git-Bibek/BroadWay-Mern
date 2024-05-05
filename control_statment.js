const product = {
  name: "Shoe",
  price: 1000,
  discount: 10,
  isPercent: true,
};

if (product.isPercent) {
  afterDiscount = product.price - (product.price * product.discount) / 100;
}

console.log(afterDiscount);

/*  Class Work */

const student = {
  name: "Bibek",
  fullMarks: 500,
  emial: "bibek@gmail.com",
  obtainMarks: 400,
};

percentage = (student.obtainMarks / student.fullMarks) * 100;
let disvision;

if (percentage >= 80) {
  disvision = "Distinction";
} else if (percentage >= 60) {
  disvision = "First Class";
} else if (percentage >= 40) {
  disvision = "Second Class";
} else {
  disvision = "Fail";
}
console.log("Percentage : " + percentage + "% and Grade : " + disvision);

/*
calculate a tax need to pay  by a Software Developer
calucalte a amount of tax  to be paid
1.Monthly
2.Yearly
3. Monthly Net salary
4.Yearly Net salary

for the first Npr . 500000 --->1%
for the next Npr. 5000000 --->15%
for the next Npr. 7000000 --->25%
for the next Npr. 10000000 --->30%
for above that  ----->36%

 */
