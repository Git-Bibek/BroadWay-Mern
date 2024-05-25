const users = [
  {
    name: "bibek",
    email: "bibek@gmail",
    address: "kathmandu",
    password: "bibek",
  },
  {
    name: "test",
    email: "test@gmail",
    address: "kathmandu",
    password: "test",
  },
  {
    name: "test1",
    email: "test1@gmail",
    address: "kathmandu",
    password: "test1",
  },
];

users.map((user, index) => {
  console.log(user.name);
  console.log(user.password);
  console.log(user.email);
  return;
});

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumArray = numArray.map((num) => num * 2);
console.log(newNumArray);

const newNumArray2 = numArray.map((multi, index) => {
  return multi * 2;
});

console.log("newNumArray2 : ", newNumArray2);
let evenNum = [];
numArray.map((num) => {
  if (num % 2 == 0) {
    evenNum.push(num);
  }
});
console.log(evenNum);

numArray.forEach((num) => {
  console.log(num * 2);
});

console.log("--------------Filter--------------");
