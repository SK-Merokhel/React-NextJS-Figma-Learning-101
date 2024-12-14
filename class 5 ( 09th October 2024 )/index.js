var person = {
    myName: "Sufyan Khan",
    age: 21
};
var myName = person.myName, age = person.age; // destructured
function hello(name, age) {
    console.log(name, age);
}
hello(myName, age);
