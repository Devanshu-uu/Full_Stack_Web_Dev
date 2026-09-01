let product={
    name:"Iphone",
    price: 323233,
    rating:7.3,
    discount:43,
    'reviews':32,
    32:32,
    printhi:function (){
        console.log(this.discount);

    },
    math1(){

    }
}

let product1=["iphone","red"]

// console.log(product.name);
// console.log(product[32]);
// console.log(product["name"]);

// let a=product.printhi()

// console.log(Object.keys(product));
// console.log(Object.values(product));
// console.log(Object.entries(product));

// for(value of product1){
//     console.log(value);
// }

// for(value in product){
//     console.log(value);
// }

// for(value in product1){
//     console.log(value);
// }

// product1.forEach(function(value){
//     console.log(value);
// })

// destructing

// let [a,b]=product1
// console.log(a);
// console.log(b);


let {name,price,rating}=product
console.log(rating);
