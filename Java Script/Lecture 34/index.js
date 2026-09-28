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


let {totalMarks=399}=Student;
console.log(totalMarks);

