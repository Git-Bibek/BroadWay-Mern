const user = [
    {
        name: "bibek",
        email: "bibek@gmail.com",
        address: "kathmandu",
        password: "bibek",
    },
    {
        name: "test",
        email: "test@gmail.com",
        address: "kathmandu",
        password: "test",
    },
    {
        name: "test1",
        email: "test1@gmail.com",
        address: "kathmandu",
        password: "test1",
    },
];
// user[6] = {};

for (let i = 0; i < user.length; i++) {
    console.log(user[i].name);
    console.log(user[i].password);
    console.log(user[i].email);
    console.log(user[i].address);
}

console.log("--------for of loop---------");
for (let elment of user) {
    console.log(`--------------${elment.name}--------------`);
    console.log(elment.name);
    console.log(elment.password);
    console.log(elment.email);
    console.log(elment.address);
}

for (let element of user) {
    if (
        element &&
        element.hasOwnProperty("name") &&
        element.hasOwnProperty("password") &&
        element.hasOwnProperty("email") &&
        element.hasOwnProperty("address")
    ) {
        console.log(element.name);
        console.log(element.password);
        console.log(element.email);
        console.log(element.address);
    }
}



/* for in */

console.log("--------for in loop---------");
for (let key in user) {
    console.log(`--------------${user[key].name}--------------`);
    console.log(user[key].name);
    console.log(user[key].password);
    console.log(user[key].email);
    console.log(user[key].address);
}

/* for of  */
console.log("--------for of loop---------");
for (let element of user) {
    console.log(`--------------${element.name}--------------`);
    console.log(element.name);
    console.log(element.password);
    console.log(element.email);
    console.log(element.address);
}