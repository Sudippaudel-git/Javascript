
Complete Javascript Concepts... 
  1) Single Line Comment.
// console.log( "I like pizza");
// console.log("It really good");
// window.alert("I really love pizza");
  2) MultiLine Comment.

// */ 
// /*

  3. Variable
// a variable is a container for storing data
// a variable behaves as if it was the value that contains
// > two steps :
// - Declaration (var,let,const);
// - Assignment(* assignment operator)
// */
// let age=21; //number
// age=age+1;
// console.log( "you are ",age," years old");
// let firstname="Sudeep";  //String
// console.log("hello",firstname);

3.1   Scope of variable 
// // Variable scope=where a variable is accessible 
// let=variable are limited to block scope{};
// var=variables are limited to function();
// for(let i=1;i<=3;i++){
//    console.log(i);
// }
// // console.log(i);// Because let is limited within a block section:
// // for(var i=5;i<102;i++){
// //    console.log("You re a better than yesterday!");
// }
// console.log(i);
doSomething();
function doSomething(){
   for(var i=0;i<102;i++){
      console.log("You re a better than yesterday!");
   }
 
} 
// // console.log(i);
// global variable= is declared outside any function
// // (if global, var will change browser's window properties)
var name="sudip";/// display in  browser's properties
// let name="sudip"; doesn't display in browsers





4. Operator
// // Operator
// // arithematic operator is a combination of ... operands (values, variable etc.)
// //operator (+ - / * %)
// let students=20;
// // students=students+1;
// // console.log(students);
// students=students%3;
//  console.log(students);
// /*

  4.1 Precedence of Operator
    
// operator precedence
// 1. parenthesis()
// 2.exponents
// 3. Multiplication and division

// 4. addition and subtraction 
// */

    Example 4.1.1
      
// let result=1+2*(3+4);
// console.log(result);
// let print=(1*8)+3-4+(5*1);
// console.log(print);
// // document.getElementById("p1").innerHTML="Hello"+firstname;
Operator Concepts
// Ternary Operator = shortcut for if else statement:
/*
1. A condition with?
2.expression if true:
3. expression if false:
condition? expIftrue:expIffalse;
*/
let adult=checkAge(21);
console.log(adult);
function checkAge(age){
   // if(age>=45){
   //    return true;
   // }
   // else{
   //    return false;
   // }
   // or simply
   return age>=18? true:false;
}
checkWinner(true);
function checkWinner(win){
   win? console.log("You win!!"):console.log("you lose");
}

      
5)  how to accept user input 
  
// // easy way with windows prompt ,- difficult way HTML textbox.
  
//  let username=window.prompt("What's your name?");
//  console.log(username);
/*
 let username;
 document.getElementById("mybutton").onclick=function(){
    username=document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML="hello";
 }
 */
/*


6. ) ---- Type conversion=change the datatype of ta value to another (string,number,boolean)
*/
/*let age=window.prompt("how old are you");
age=Number(age);
age+=1;
console.log("Happy birthday! You are",age,"years old");
*/
/*
let x;
let y;
let z;
x=Number("3.45");
y=String (3.14);
z=Boolean("pizza");
console.log(x, typeof x);
console.log(x, typeof y);
console.log(z, typeof z);
*/

// const=a varibale t4

// const PI=3.14156;
// let radius;
// let circumference;
// radius=window.prompt("Enter the radius of  a circle");
// radius=Number(radius);
// //pi=520;// it will generate the error as constant variabe value cannot be changed.
// circumference=2*PI*radius;
// console.log("The circumference is ",circumference);
// document.getElementById("submitButton").onclick=function(){


//     a=document.getElementById("aTextBox").value;
//      a=Number(a);
//      b=document.getElementById("bTextBox").value;
//      b=Number(b);
//      c=Math.sqrt(
//     Math.pow(a,2)+Math.pow(b,2));
//     document.getElementById("cLabel").innerHTML="Side C:" +c;
//      }

7... Looping
//  1.for loop::::
for(let i=0;i<=20;i++){
   if(i==12){
      break;
   }
   console.log(i);
}


// 8......       Nested loops=Loop inside  another loops
// for( let i=0;i<5;i++){
//    for( let j=1;j<5;j++){
//       console.log();
//    }
//    console.log("the output of j is ",i);
// }
/*
let symbol=window.prompt("Enter a symbol to use");
let rows=window.prompt("Enter # of rows");
let columns=window.prompt("Enter # of columns");

for(let i=1;i<=rows;i+=1){
   for(let j=1;j<=columns;j+=1){
   document.getElementById("myRectangle").innerHTML +=symbol;

   }
   document.getElementById("myRectangle").innerHTML +="<br>"
}
*/


 ............ Function Concepts   

// Function => Define a code once and use it many times:
// console.log("Happy sudip");
// console.log("Ram");
// console.log("messi");
// console.log("Messi is my man");
// console.log("Vamos Argentina");
// happyBirthday();
// happyBirthday();
// happyBirthday();




startProgram();
function startProgram(){
   let userName="sudip";
   let age=21;


happyBirthday(userName,age);
}
function happyBirthday(userName,age){
   console.log("Happy sudip");
console.log("Ram");
console.log("messi");
console.log("Messi is my man");
console.log("Vamos Argentina ",userName,age);
}

// Function return= return a value back to the function where you invoked a function
// let area;
// let width;
// let height;
// width=window.prompt("Enter width");
// height=window.prompt("Enter height");
// area=getArea(width,height);
// console.log ("The area is ",area);
// function getArea(width,height){
//    let result=width*height;
//    console.log("The result is area",result);
//    return result;
// }





  ****  Template Literal Concepts:::

//Template literals= `${}` we can use instead of literals

// let userName="Sudip";
//  let weight=5;
//  let total=89;
// let text=
// `Hello ${userName};,<br>
// You have ${ weight}  kg  weight in your body`;
//    //  console.log(text);
//  document.getElementById("myLabel").innerHTML =text;
//  const name='Sudip';
//  const message='Hi'+ !  +'\n';
//  const another=
//  `Hi ${2+
// 3}
//  thank you for your mailing!
//  Regards 
//  Sudip`;


  
Practice it....
//  // format currency
//  let myNum=123645666;
//  //  /*"hi-IN"*/  hindi number format
// // myNum=myNum.toLocaleString("de-DE");
// // myNum=myNum.toLocaleString("en-Us",{style: "currency",currency: "USD"});
// // myNum=myNum.toLocaleString("sudip-IN",{style: "currency",currency: "INR"});
// // myNum=myNum.toLocaleString("de-DE",{style: "currency",currency: "EUR"});
// // myNum=myNum.toLocaleString(undefined,{style:"percentage"});
// //  console.log(myNum);
// myNum=myNum.toLocaleString(undefined,{style: "unit",unit:"Celcius"});

 10............Math Functions 
const answer= Math.floor(Math.random()*10+1);
let guesses=0;
document.getElementById("submit").onclick=function(){
 let guess= document.getElementById("guessField").value
 guesses+=1;
 if(guess==answer){
   alert(`${answer} is the #. It took you ${guesses}  guesses ` )
 }
 else if( guess<answer){
   alert("Too small");

 }
 else{
   alert ("to large");
 }
}
