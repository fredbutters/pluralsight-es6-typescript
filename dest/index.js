var __assign = this && this.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};
// for (let i = 0; i <= 10; i++) {
//     var button = makeButton("button " + i);
//     button.onclick = function () {
//         alert('button ' + i);
//     }
// }
// namespace AtomicNumbers {
//     export const H = 1;
//     export const He = 2;
// }
// function greetRegular(name) {
//     return "Hello, " + name;
// }
// const greetMin = (name: string) => "Hello, " + name;
// interface USPostalAddress {
//     streetAddress1: string;
//     streetAddress2?: string;
//     city: string;
//     state: string;
//     zip: string;
//     country: string;
// }
// const addressData1: USPostalAddress = {
//     streetAddress1: "123 Main",
//     //streetAddress2: "3rd floor",
//     city: "Anytown",
//     state: "NY",
//     zip: "10001-1234",
//     country: "USA"
// }
// const {
//     streetAddress1: street1,
//     streetAddress2: street2 = "",
//     city,
//     state
// } = addressData1;
// const employee = {
//     workAddress: addressData1,
//     position: {
//         department: {
//             name: "Development"
//         }
//     }
// };
// {
//     const { workAddress: { city }, position: { department: { name: departmentName } } } = employee;
//     console.log(departmentName);        
// }
// function categorizedEmployee({ workAddress: { city } = {city}, position: { department: { name: departmentName } } }) {
//     return {
//         city,
//         departmentName
//     }
// }
// const category = categorizedEmployee(employee)
// Destructuring arrays
var names = ['Jim', 'Fred', 'Bob', 'Sam', 'Joe', 'Mike', 'Mark'];
var _a = names[0],
    firstDestructure = _a === void 0 ? 'Steve' : _a,
    secondDestructure = names[1],
    more = names.slice(2);
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
var names1 = ['Jim', 'Fred', 'Bob', 'Sam', 'Joe', 'Mike', 'Mark'];
var names2 = ['Eric', 'Scott', 'Steve'];
var names3 = names1.concat(names2, ['Brendon']);
// console.log(names3);
var spreadObj = {
    firstName: 'Mark',
    lastName: 'Barry'
};
var spreadObj2 = {
    lastName: 'Smith'
};
var spreadResult = __assign({}, spreadObj, spreadObj2);
// console.log(spreadResult);
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var item = names_1[_i];
    console.log(item);
}
//# sourceMappingURL=index.js.map
