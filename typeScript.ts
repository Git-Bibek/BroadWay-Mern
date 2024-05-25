let fulName: string = "Bibek Sah";
console.log(fulName);


type userRole = "ADMIN" | "USER" | "AUTHOR";
interface userObject {
    name: string,
    email: string,
    address: string,
    role: userRole,
    password: string
    phone?: string

}
let user: userObject = {
    name: "bibek",
    email: "bibek@gmail",
    address: "kathmandu",
    role: "ADMIN",
    password: "bibek"

}


user.phone = "987654321";

console.log(user)