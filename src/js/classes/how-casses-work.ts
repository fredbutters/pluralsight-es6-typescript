
// Just a class
// class Contact {

//     name: string;
//     phone: string;
//     email: string;

//     constructor(name: string, phone: string, email:string = undefined){
//         this.name = name;
//         this.phone = phone;
//         this.email = email;
//     }
// }
// const alice = new Contact('Alice', '555-1234', 'alice@stuff.com');


// *****************************************
// ES6 Class destructuring in a constructur

class Contact {

    name: string;
    phone: string;
    email: string;

    greet(greetee: string) {
        return `Hello, my name is ${greetee}`;
    }

    constructor({ name, phone, email = undefined }) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}
const alice = new Contact({ name: 'Alice', phone: '555-1234' });

//****************************
// Inheritance */
class Employee extends Contact {
    employeeID: string;
    hireDate: Date;

    constructor({ name, phone, email = undefined, employeeID, hireDate }) {
        super({ name, phone, email });
        this.employeeID = employeeID;
        this.hireDate = hireDate;
    }
}

const pat = new Employee({ name: 'Pat', phone: '555-4646', employeeID: '1234',hireDate : new Date('2015-01-01') });
// pat.hireDate = new Date('2015-01-01');
console.log(pat instanceof Contact); // => true
