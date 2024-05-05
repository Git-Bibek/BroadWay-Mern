console.log("-----------Operators----------");
let a = 10;
let b = 20;
a = a + 1;
a++;
++a;
console.log(a);
/* post increment */
console.log("post increment : " + a++);
console.log("  : " + a);
/* pre increment */
console.log("Pre assign : " + ++a);

let x = "20";
let y = 20;

console.log("check value only"+x == y);
console.log("check value & dataTypes" + x === y); 

console.log("------check null value with 0-----");
console.log(0 <= null);
console.log(0 == null);
console.log(0 < null);



const user={
    name:"bibek",
}
/* const user1=user;
user1.name="sah";
console.log(user.name); */
let allUser=user1={...user};
console.log(allUser);


