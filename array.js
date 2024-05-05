console.log("--------Array---------");
let user = ["Bibek", "bibek@gmail.com", "Kathmandu", "987654321"];
console.log(user);
/* Indexing Array */
console.log(user[0]);
console.log(user[1]);

/* Single Dimensional Array */
let singleDimArray = ["name", "address", "phone No.", "email", "Address"];
console.log(singleDimArray);

/* Multidimensional Array */

console.log("-----------Multidimensional Array----------");
let multiDimArray = [
  ["name", "address", "phone No.", "email", "Address"],
  ["Bibek", "bibek@gmail.com", "Kathmandu", "987654321"],
  "Courses",
];
console.log(multiDimArray);
console.log(
  " -------acessing data from multidimensional array using index bibek@gmail.com-----"
);
console.log("acessing email : " + multiDimArray[1][1]);

/* Object Data Types Array */
const ObjectArray = [
  {
    name: "test",
    address: "test",
    phone: "987654321",
    email: "bibek@gmail.com",
    password: "1234",
  },
  {
    name: "Bibek",
    email: "bibek@gmail.com",
    phone: "987654321",
    address: "laltitpur",
    password: "1234",
  },
  {
    name: "test2",
    address: "test2",
    phone: "987654321",
    email: "test2@gmail.com",
    password: "1234",
  },
];

console.log(ObjectArray);
console.log("email : " + ObjectArray[1].email);
console.log("password : " + ObjectArray[2].password);
console.log("name index 2 : " + ObjectArray[2]["name"]);




console.log(ObjectArray[1].address);
console.log(ObjectArray[1].name);
console.log(ObjectArray[1].password);
console.log(ObjectArray[1].phone);
