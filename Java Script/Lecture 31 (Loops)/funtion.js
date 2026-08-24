// function total(){
//     console.log("Hii");

// }

// total()
// function total( studentname, math ,sci){
//     console.log(`${studentname} total marks: `,math+sci);

// }

// total("dev" ,23,64)


// function greeting(name){
//     console.log(`Hi ${name}`);
// }
// greeting("dev")
// greeting("dev")
// greeting("dev")



// function caculator(num1,num2,operator){
//     switch (operator){
//         case "+":
//             console.log(`${num1} ${operator} ${num2} =`, num1+num2);
//             break;
//         case "-":
//             console.log(`${num1} ${operator} ${num2} =`, num1-num2);
//             break;
//     }
// }

// caculator(2,2,"+")
// caculator(2,2,"-")  


function total( math ,sci){
    return math+sci;
}


function calper(studentname, math ,sci){
    let totaMarks=total(math ,sci);
    let percentage= totaMarks/200*100;
    console.log(`Total Marks: ${totaMarks} Percentage: ${percentage}`);


}

calper("Devanshu" ,23,56)