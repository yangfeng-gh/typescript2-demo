interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "hello, " + person.firstName + " " + person.lastName;
}

let user2 = {firstName: "Linus", lastName: "Torvalds"};

document.body.innerHTML = greeter(user2);