let originalPrices=[433,654,6544]
let discountedPrices=[]

for(value of originalPrices){
    // discountedPrices.push(value* 0.9)
}

// console.log(originalPrices);


originalPrices.forEach((value)=>{
    discountedPrices.push(value*0.9)
})

// console.log(discountedPrices);

// const discountedPrices1=originalPrices.map((value)=>{
//     return value *0.9
// })
const discountedPrices1=originalPrices.map((value)=>value *0.9)


// console.log(discountedPrices1 );


let students=[
    { 
        name:"Devanshu",
        rollno:27,
        marks: 75
    },

    {
        name:"Jahanvi",
        rollno:112,
        marks:100
    },
    {
        name:"Aditya",
        rollno:5,
        marks:56
    },

    {
        name:"Ravi",
        rollno:56,
        marks:30
    }


]

let studentname=[]

students.forEach((value)=>{
    studentname.push(value.name)
})

// console.log(studentname);


const studentnames=students.map((student)=>student.name)

// console.log(studentnames);


const newroll=students.map((student)=> {
    return {...student,rollno : student.rollno+1}
})

// console.log(newroll);

failstudents=[]
students.forEach((student) =>{
    if(student.marks<33){
        failstudents.push(student)
    }
})

console.log(failstudents);


const failstudents1=students.filter(student=>{
    return student.marks <33
})

console.log(failstudents1);