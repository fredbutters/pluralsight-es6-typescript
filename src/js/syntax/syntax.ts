// for (let i = 0; i <= 10; i++) {
//     var button = makeButton("button " + i);

//     button.onclick = function () {
//         alert('button ' + i);
//     }
// }

namespace AtomicNumbers {
    export const H = 1;
    export const He = 2;
}


// function greetRegular(name) {
//     return "Hello, " + name;
// }

// const greetMin = (name: string) => "Hello, " + name;


interface USPostalAddress {
    streetAddress1: string;
    streetAddress2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
}
const addressData1: USPostalAddress = {
    streetAddress1: "123 Main",
    //streetAddress2: "3rd floor",
    city: "Anytown",
    state: "NY",
    zip: "10001-1234",
    country: "USA"
}

const {
    streetAddress1: street1,
    streetAddress2: street2 = "",
    city,
    state
} = addressData1;


const employee = {
    workAddress: addressData1,
    position: {
        department: {
            name: "Development"
        }
    }
};

{
    const { workAddress: { city }, position: { department: { name: departmentName } } } = employee;
    console.log(departmentName);        
}



// function categorizedEmployee({ workAddress: { city } = {city}, position: { department: { name: departmentName } } }) {
//     return {
//         city,
//         departmentName
//     }
// }

// const category = categorizedEmployee(employee)



// Destructuring arrays
const names = ['Jim', 'Fred', 'Bob', 'Sam', 'Joe', 'Mike', 'Mark'];
const [firstDestructure = 'Steve', secondDestructure, ...more] = names;
// console.log(firstDestructure); // => Jim


// multiGreet(...names);

// function multiGreet(...items: string[]){
//     items.forEach(item => {
//         console.log(friend`hello ${item}.`); 
//     });
// }

// function friend(strings: string[], ...substitutions: string[]){
//     if(!substitutions[0]){
//         substitutions[0] = 'Friend';
//     }
//     return processTaggedTemplate(strings, substitutions);
// }
// function processTaggedTemplate(strings: string[], substitutions: string[]){
//     const result = [];
//     substitutions.forEach((sub, index) => {
//         result.push(strings[index], sub);
//     });
//     result.push(strings[strings.length -1]);
//     return result.join('');
// }

const names1 = ['Jim', 'Fred', 'Bob', 'Sam', 'Joe', 'Mike', 'Mark'];
const names2 = ['Eric', 'Scott', 'Steve'];
const names3 = [...names1, ...names2, 'Brendon'];
// console.log(names3);


const spreadObj = {
    firstName: 'Mark',
    lastName: 'Barry'
}
const spreadObj2 = {
    lastName: 'Smith'
}

const spreadResult = {...spreadObj, ...spreadObj2}
// console.log(spreadResult);

for(let item of names){
    console.log(item);
}
