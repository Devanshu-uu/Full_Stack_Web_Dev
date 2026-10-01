let Student ={
    name: "Devanshu",
    rollno: 27,
    subjects: ["Maths", "Hindi", "Science"],
    // totalMarks:484
}

// let {subjects, rollno, name} =Student
// console.log(subjects);


// let {...variable} =Student
// console.log(variable);


// let {  subjects ,...variable} =Student // Rest Should be in last other wise get error
// console.log(variable);



// Renaming the keys...
// let {subjects: vishey}=Student
// console.log(vishey);


// let {totalMarks=399}=Student;
// console.log(totalMarks);

// let obj1={
//     name:"Devanshu",
//     phone:324234221
// }

// let obj2={
//     address:"India", // in only india it represents the variable if variable is not declatred then result is undefined
//     aadharCard:32423424234244
// }

// let obj3 ={...obj1,...obj2}
// console.log(obj3);

// const obj={
//     name: "Devanshu",
//     rollno:27,
//     address:null
// }

// obj["name"]="Deva"

// obj.name="Jahanvi"

// delete obj.rollno // priperty delete


// console.log(obj.address?.street); // optional chaining


let arr=[1,2,3,4,5,6]
// arr.pop()
// arr.shift()

arr.splice(1,3)
console.log(arr);
