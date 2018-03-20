class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter3(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user3 = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter3(user3);