class User {
    name;
    constructor() {
        console.log("I am in user class")
    }
}

class Admin extends User {
    constructor() {
        super()
        console.log("I am in admin class")
    }

    setName = () => {
        this.name = "bibek"
    }
}

const admin = new Admin();

