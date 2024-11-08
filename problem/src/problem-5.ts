{
    // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object

    type Person1 ={
        name:string;
        age:number;
    }

    function getProperty<R, B extends keyof R>(object:R, key:B):R[B] {
        return object[key]
    }
// // Sample Input:
const person:Person1 = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));
// console.log(getProperty(person, "age"));


}