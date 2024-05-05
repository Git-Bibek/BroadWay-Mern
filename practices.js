/* let day = "friday";

if (day == "sunday" || day == "saturday") {
  console.log("Holiday");
} else if (day == "friday") {
  console.log("Weekend");
} else {
  console.log("Weekday");
}

switch (day) {
  case "sunday" || "saturday":
    console.log("Holiday");
}

let employee = {
  name: "User",
  salary: 5000000,
  address: "kathmandu",
};
let tax = 0;
switch (true) {
  case employee.salary <= 500000:
    tax = employee.salary * 0.01;
    break;
  case employee.salary <= 5000000:
    tax = 5000 + (employee.salary - 500000) * 0.15;
    break;
  case employee.salary <= 7000000:
    tax = 5000 + 675000 + (employee.salary - 5000000) * 0.25;
    break;
  case employee.salary <= 100000000:
    tax = 5000 + 675000 + 5000000 + (employee.salary - 7000000) * 0.3;
    break;
  default:
    tax =
      5000 + 675000 + 5000000 + 35000000 + (employee.salary - 100000000) * 0.35;
}

console.log("tax : " + tax);
yearlyTax = tax * 12;
console.log("yearly tax : " + yearlyTax);
yearlySalary = employee.salary * 12;
console.log("yearly salary : " + yearlySalary);
netYearlySalary = yearlySalary - yearlyTax;
console.log("net yearly salary : " + netYearlySalary);
 */
let string = "BIBEK";
for (i = 0; i < string.length; i++) {
  let pattern = "";
  for (j = 0; j <= i; j++) {
    pattern += string[j] + " ";
  }
  console.log(pattern);
}

let size = 5; // Define the size of the square

for (let i = 1; i <= size; i++) {
  let output = "";
  for (let j = 1; j <= size; j++) {
    output += i * size + j - size + " ";
  }
  console.log(output);
}

for (let i = 1; i <= size; i++) {
  let output = "";
  for (let j = 1; j <= size; j++) {
    if (i === 1 || i === size || j === 1 || j === size) {
      output += "* ";
    } else {
      output += "  ";
    }
  }
  console.log(output);
}
