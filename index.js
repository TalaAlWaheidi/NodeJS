//write a variable without initial value
// var var1;
// console.log(var1);

//write a variable with initial value
// var var1=10;

//write 3 variables in same line without initial value
// var x,y,z;

//write 3 variables in same line with initial value
// var [x,y,z]=[2,5,9];
// var x=2,y=5,z=9;
// console.log(x);

//write 3 variables with Boolean value
// var x=true,y=false,z=true;
// console.log(x);

//write a constant
// const x = 3;
// console.log(x);

//write an empty array without initializing its size
// let arr=[];
// console.log(arr);

//write an array of number from 1 to 10
// let arr=[1,2,3,4,5,6,7,8,9,10];
// console.log(arr);

//write an array of strings has letters from A to J
// let arr=["A","B","C","D","E","F","G","H","I","J"];
// console.log(arr);

//Write an Object has at least 3 attributes (keys) and give each one a numeric value
// let op={a:5,b:6,c:6};
// console.log(op);

//write an object has at least 3 attributes (keys) and give each one a string value
// let op={a:'Tala',b:'Lana',c:'Aya'};
// console.log(op.a);

//write an object has at least 3 attributes (keys) and give each one a Boolean value
// let op={a:true,b:false,c:true};
// console.log(op.a);

//write an object has at least 3 attributes (keys) and give each one an array value
//  let op={a:[1,2,3,4,5,6,7,8,9,10],b:["A","B","C","D","E"],c:["F","G","H","I","J"]};
//  console.log(op.a);

//write an object has at least 3 attributes (keys) and give each one an object value (object of objects)
//   let op={a:{x1:5,y2:4},b:{d:4,v:6},c:{z:8,n:3}};
//   console.log(op);

//Write an object has at least 5 attributes (keys) and give each one different type of values including: string, number, Boolean, array, object
// let op={a:1,b:'Tala',t:true,c:[1,2,3,'Tala'],d:{e:1,f:6}};
// console.log(op);

//Write an array of objects
// let arr=[{a:5,b:6},{c:'Tala',e:'Lana'}];
// console.log(arr);

//write an array of objects, and each objects is an object of objects that has an array, this array will have at least one object
// let arr=[{a:{d:[1,2,3,{b:'Tala'}]}},{c:{e:[1,2,3,{f:'Lana'}]}}];
// console.log(arr[1].c.e);

//Write a function to sum two numbers passed in parameters
// function sum(num1,num2){
//     return sum = num1+num2
// }
// console.log(sum(2,4));

//write a function to multiply two numbers
// function sum(num1,num2){
//     return sum = num1*num2
// }
// console.log(sum(2,4));

//write a function to sum two numbers entered by user
// var readline = require('readline');

// var rf = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// console.log('Addition of Two Numbers in NodeJS');
// rf.question('Enter first value : ', function (x) {
//    rf.question('Enter  second value : ', function (y) {
//   var a = parseInt(x);
//   var b = parseInt(y);
//         var sum = (a+b);
//        console.log('The sum of ',a, ' and ',b, ' is ' , sum,'.');
//         rf.close();
//     });
// });

//write a function to multiply two numbers entered by user
// var readline = require('readline');

// var rf = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// console.log('Multiply of Two Numbers in NodeJS');
// rf.question('Enter first value : ', function (x) {
//    rf.question('Enter  second value : ', function (y) {
//   var a = parseInt(x);
//   var b = parseInt(y);
//         var multiply = (a*b);
//        console.log('The multiply of ',a, ' and ',b, ' is ' , multiply,'.');
//         rf.close();
//     });
// });


//Write a function to return a value
// function hello(name) {
//     return ("Hello " + name);
// }
// hello("Class");

// Write a function to print a value
// function hello(name) {
//     console.log("Hello " + name);
// }
// hello("Class");