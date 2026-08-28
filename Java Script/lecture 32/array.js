// let products=["tshirt","shoes","lower"]
// console.log(products);
// console.log(products[2],products[1]);

// console.log(products[products.length-1]);
// console.log(products.at(-1))


// for (let i=0;i<products.length;i++){
//     console.log(products[i]);

// }


// 2D array

let products=[["tshirt",323],["jeans",459],["cap",87],["lower",234]];
for (let i=0;i<products.length;i++){
    for(let j=0;j<products[0].length;j++){
        console.log(products[i][j]);
    }
}