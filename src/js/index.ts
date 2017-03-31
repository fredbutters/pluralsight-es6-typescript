for (let i = 0; i <= 10; i++) {
    var button = makeButton("button " + i);

    button.onclick = function () {
        alert('button ' + i);
    }
}

namespace AtomicNumbers {
    export const H = 1;
    export const He = 2;
}


function greetRegular(name) {
    return "Hello, " + name;
}

const greetMin = (name: string) => "Hello, " + name;


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



function categorizedEmployee({ workAddress: { city } = {city}, position: { department: { name: departmentName } } }) {
    return {
        city,
        departmentName
    }
}

const category = categorizedEmployee(employee)