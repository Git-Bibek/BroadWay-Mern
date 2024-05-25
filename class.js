class User {
    name;
    email;
    address;

    setName(_name) {
        this.name = _name;
    }
    setEmail(_email) {
        this.email = _email;
    }


    setAddress = (_address) => {
        this.address = _address;
    }
    constructor(_name, _email, _address) {
        this.name = _name;
        this.email = _email;
        this.address = _address;

    }
}

const userObj = new User();
userObj.setName("bibek");
userObj.setEmail("bibek@gmail.com");
userObj.setAddress("kathmandu");
console.log(userObj)
/* data assing using constructor */
const userObj1 = new User("test", "test@gmail", "kathmandu");
console.log(userObj1)

