console.log("Hi..");
let fullName = "Bibek Sah";
length = fullName.length;
console.log(length);
console.log(fullName);

console.log(
  "---------------------------Data Types-----------------------------------"
);

let a = "hello";
let b = "world";
let c = ` ${a} ${b} from Bibek Sah`;
console.log(c);
console.log(typeof c);
console.log(typeof a);
console.log(typeof b);

console.log(
  "---------------------------Number-----------------------------------"
);
let d = "3";
let e = 10.3;
let f = 1e10;

console.log(typeof +d); /* typecast string to number */
console.log(typeof e);
console.log(typeof f);

console.log(
  "---------------------------Symbols-----------------------------------"
);
let sym = Symbol();
console.log(typeof sym);
