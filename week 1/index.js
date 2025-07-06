/*
//greet a person, knowing their first and last name
let fname = "Abhijeet";
let lname = " Mathur";
console.log("Hello" + fname + lname +". Wish you a good day :)")
*/

/*
//greet a person based on their gender
let fname = " Ananaya";
let lname = " Pandey";
let gender = "M"; 
let salutation = "Mr.";
if(gender == "F"){
    salutation = "Ms.";
}
console.log("Hello "+ salutation + fname + lname + ". Wish you a good day :)");
*/

/*
//WAP to count 0-100 and print the even numbers
for(let i= 0; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}
*/

/*
//WAP to print all even no in array
let arr= [1 ,2, 3,4, 5,6, 7,8, 9, 10];
for(let i=0;i<arr.length; i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
}
*/

/*
//WAP to print the biggest no from an array
let arr= [10, 1321,132,345 ,3,2342 ,4562,2423];
let grtest = arr[0];
for(let i=0;i<arr.length; i++){
    if(arr[i]> grtest){
        grtest = arr[i];
    }
}
console.log(grtest);
*/

/*
//WAP to print all male first names from an array of objects
let obj =
    [{
        fName: "Abhijeet",
        lName: "Mathur",
        gender: "Male"
    }, {
        fName: "Ananya",
        lName: "Pandey",
        gender: "Male"
    }, {
        fName: "Rohan",
        lName: "Sharma",
        gender: "Male"
    }]
    for(let i=0; i<obj.length; i++){
        if(obj[i]["gender"] == "Male"){
            console.log(obj[i]["fName"] + " " + obj[i]["lName"])
        }
    }
*/

/*
//WAP to rev elements of arr
function swap(arr, i ,j){
    let temp= arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
for(let i=0; i<arr.length/2; i++){
    swap(arr, i, arr.length-1-i);
}
console.log(arr);

//func for sum
function sum(a,b, callback){
    callback(a+b);
} 
function displayResult(data){
    console.log("Result is: " + data);
}

function displayResultPassive(data){
    console.log("Sum's Result is: " + data);
}

sum(10, 20, displayResultPassive);

function calculate(a , b, type){
    console.log(type(a, b));
}
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}  
function greet(){
    console.log("Hello, welcome to the calculator!");
} 
setInterval(greet, 1000);
calculate(100, 20, divide);
*/
