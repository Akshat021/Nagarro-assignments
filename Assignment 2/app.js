
var x = 1;
console.log(x);
function a(){
    x=10;
    console.log(x);
}

a();

/* 
1
10
*/

// -----------------------------------

let x = 10;
console.log(x);
function a(){
    x=100;
    console.log(x);
}
a();
x=1000;

/* 
10
100
*/

// -----------------------------------

const x = 100;
console.log(x);
function a(){
    x=10;
    console.log(x);
}
a();

/* 
typeError
*/

// -----------------------------------

function a(){
    console.log(x);
}
a();
var x=2

/* 
undefined
*/

// -----------------------------------

let x;
function b(){
    console.log(x);
}
b();
x=2;

/* 
undefined
*/

// -----------------------------------

function a(){
    console.log(x);
}
a();
let x=2 

/* 
ReferenceError
*/

// -----------------------------------

var a=1;
let b=2;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);

/* 
10
20
30
2
*/

// ----------------------------------
 

function x(){
    var a =7;
    function y(){
        console.log(a);
    }
    return y;
}
var z =  x();
console.log(z);
z();


/* 
function y(){
    console.log(a);
}
7
*/
 
// ----------------------------------


function x(){
    for(var i=0;i<6;i++){
        setTimeout(()=>{
            console.log(i);
        },1000*i)
    }
}
x();

/* 
6
6
6
6
6
6

but if 
function x(){
    for(let i=0;i<6;i++){
        setTimeout(()=>{
            console.log(i);
        },1000*i)
    }
}
x();
output will be :-
0
1
2
3
4
5
*/

// ----------------------------------


function x(){
    for(var i=0;i<6;i++){
        function close(i){
                setTimeout(function(){
                    console.log(i);
                },1000*i)
        }   
        close(i);
        console.log("interview");
    }
}
x();
/* 
interview
interview
interview
interview
interview
interview
0
1
2
3
4
5
*/

// -----------------------------------

const person = {
    name:"nagarro",
    age:100,
    isAutherised: false,
    isUnicorn:true,
    bestDomain:"analytics",
    services:{
        iname : "none",
        iage : 384
    }
}

// question1: make copy of the object and manipulate values in the new copied object

// This is assigning address of person in copy // const copy = person
// 1nd way (shallow copy) using spread operator  // const copy = {...person}   
// 2nd way (shallow copy) using rest operator  // const {...copy} = person  
// 3rd way (shallow copy) using Object.assign() method // const copy = Object.assign({}, person);
/* 4st way (deep copy) good old method */ const copy = JSON.parse(JSON.stringify(person)); 

copy.services.iname = "yes"
console.log(person);

// question2: print all the properties using appropriate for loop 
/* 1st  */ 
// for(a in copy){     // iterates over keys
//     console.log(a + " -> " + copy[a]);
// }

/* 2nd */
// for (const key of Object.keys(copy)) {
//     console.log(key + " -> " + copy[key])
// }

/* 3rd  */
// console.log(Object.entries(copy));  -> array of arrays
// for([key, val] of Object.entries(copy)){
//     console.log(key + " -> " + val);
// }

/* 4th */
Object.keys(copy).forEach((key) => {
    console.log(key + " -> " + copy[key]);
})



// theory questions you should also prepare
// 1. what is GEC (global execution context)? -- mcp and cep
// 2. single threaded meaning? 
// 3. what is hoisting?
// 4. call back queue
// 5. let and const hoisted hote hai?? and kahan hote hai? (dead temporal zone mei hote hai) -->  read about dead temporal zone
// 6. block scope and global scope
// 7. closure?
// 8. event loop
// 9. asynchronous 
// 10. for each loop