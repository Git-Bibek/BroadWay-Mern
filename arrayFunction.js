let allUser = [];

let user = {
  name: "user",
  email: "user@gmail.com",
  address: "kathmandu",
  password: "user",
};
console.log(user);

/* Push Operations default */
console.log(allUser.push(user));

/* unshift */
let sfih = allUser.unshift(user);
console.log(sfih);
/* splice */
let splice = allUser.splice(1, 1, user);
console.log(splice);