alert("Please do not make noise in class");
console.log("I am 18 years old");
console.log("Hi! I am Saina Shrestha");
console.log(document.getElementById("paragraph").innerHTML);
console.log(typeof document);
document.getElementById("paragraph").innerHTML="<h1>Hello</h1>";
document.getElementById("paragraph").style.cssText="color:purple; background:green";
//document.getElementById("paragraph").style.color="purple";
//document.getElementById("paragraph").style.backgroundColor="yellow";
const age = 18;
//age=12;
var age1 = 18;
age1=13;
let age2 = 18;
age2=14;
console.log(typeof age);
console.log(typeof age1);
console.log(typeof age2);
//var name;declararation
var name="Saina"; //initialiazation and declaration
//console.log(name);
console.log(typeof name);
console.log(prompt("Enter a name: "));
document.getElementById("message").innerHTML="Hello"+ " "+"My name is:"+" "+name+" "+ "I am"+ age+" "+"years old"+"!";