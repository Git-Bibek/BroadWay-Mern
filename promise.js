const func1 = () => {
    return new Promise((resolve, reject) => {
        const x = true;
        if (x) {
            resolve("I am resolved of func1");
        } else {
            reject("I am rejected of func1");
        }
    });
};

const func2 = () => {
    return new Promise((resolve, reject) => {
        const x = false;
        if (x) {
            resolve("I am resolved of func2");
        } else {
            reject("I am rejected of func2");
        }
    });
};
const func3 = () => {
    return new Promise((resolve, reject) => {
        const x = true;
        if (x) {
            resolve("I am resolved of func3");
        } else {
            reject("I am rejected of func3");
        }
    });
};
/* 
func1()
    .then((data) => {
        console.log(data);
        func2()
            .then((data) => {
                console.log(data);

                func3()
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    })
    .catch((error) => {
        console.log(error);
    }); */


/* func1()
    .then((res1) => {
        console.log(res1);
        return func2();
    })
    .then((res2) => {
        console.log(res2);
        return func3();
    })
    .then((res3) => {
        console.log(res3);
    })
    .catch((err) => {
        console.log(err);
    }) */

const allPromise = Promise.allSettled([func1(), func2(), func3()]);
allPromise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("I am always executed");
    })

