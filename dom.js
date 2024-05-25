// debugger;
document.getElementById("first").innerHTML = "Hello World";
document.querySelector("#first").innerHTML = "I am from query selector";

/* Clock */
setTimeout(() => {
  console.log(" I am from setTimeout");
}, 1000);

setInterval(() => {
  const today = new Date();
  hour = today.getHours();
  minute = today.getMinutes();
  second = today.getSeconds();

  document.getElementById("clock").innerHTML =
    hour + ":" + minute + ":" + second;
}, 1000);

/* DOM */

let counter = 0;
// const increaseCounter = () => {
//   counter++;
//   document.getElementById("counter").innerHTML = counter;
// };

/* from js */

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button").addEventListener("click", () => {
    counter++;
    document.getElementById("counter").innerHTML = counter;
  });
});
