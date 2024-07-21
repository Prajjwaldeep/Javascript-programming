function avg(a,b)
{
    return a+b;
}

//1. Ways to print in Javascript
//console.log("Hello World!");
// alert("Hey dude !");
//document.write("This is document write.");

// 2. Javascript console API (Application Programming Inteface)
// console.log("Hello World!", 4 + 6, "Another log");
// console.warn("This is warning");
// console.error("This is error");

//3. Javascript variables
// What are variables ? - Containers to store data values

/* multi
line
comment */

var num1 = 34;
var num2 = 56;
//console.log(num1 + num2);
var f=avg(num1,num2);
console.log(f);

// 4. Data types in Javascript
var i=45+55.6;
console.log(i);
var str="This is a string";
var str2="This is also a string";

// Objects
var marks={
    Harry : 95,
    Rahul : 92,
    Prajjwaldeep : 99.98
}
//console.log(marks);

// Booleans
var a=true;
var b=false;
console.log(a, b);

var und=undefined;
//console.log(und);

var n=null;
//console.log(n);

/*
At a very high level, there are two types of data types in Javascript

1. Primitive data types : undefinied, null, number, string, boolean, Symbol
2. Reference data types : Arrays and objects
*/

var arr=[1,2,3,"String",4,5];