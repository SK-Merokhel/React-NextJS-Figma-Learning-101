let person = {
    myName: "Sufyan Khan",
    age: 21
}
const {myName , age} = person // destructured

function hello (name: string , age: number){ //two parameters, name & age
    console.log(name , age);
    
}
hello (myName , age)





