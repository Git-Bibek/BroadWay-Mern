/* setTimeout(() => {
  console.log("I am First Line");
}, 3000);

setTimeout(() => {
  console.log("I am Second Line");
}, 2000);

setTimeout(() => {
  console.log("I am Third Line");
}, 1000);

const myPromise = new Promise((resolve, reject) => {
  const sucess = true;
  if (sucess) {
    resolve("I am resolved");
  } else {
    reject("I am rejected");
  }
});
myPromise
  .then((sucess) => {
    console.log(sucess);
  })
  .catch((error) => {
    console.log(error);
  });
 */

const resolveData = async () => {
  let x = false;
  if (x) {
    return "I am resolved"
  }
  else {
    throw "I am rejected"
  }
}

async function handleAsync() {
  try {
    const data = await resolveData();
    console.log(data);
  }
  catch (error) {
    console.log(error);
  }
}
handleAsync()