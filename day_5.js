//.........Function.......//

//Function Declaration

// function checkEven(n){
//     if(n % 2 === 0){
//         console.log("Even");
//     }
//     else{
//         console.log("Odd");
//     }
// }
// checkEven(6);


// function squareNum(n){
//     return n*n;
   
// }
// console.log(squareNum(5));


//.......Function Expression ...........//

// function maxNum(n, m){
//     if(n > m){
//         console.log(n);
//     }
//     else{
//         console.log(m);
//     }
// }
// maxNum(5 , 6);

// console.log(Math.max(5, 3, 6));

// const array1 = [5, 3, 6];

// console.log(Math.max(...array1));


///.....Concatenate .........///

// function addString(firstName ,lastName){
//     let fullName = firstName + " " + lastName;
//     console.log(fullName);
// }
// let firstName = "Rama";
// let lastName = "Kumari";
// addString(firstName , lastName);

// function addString(firstName ,lastName){
//     let fullName = `${firstName} ${lastName}`;
//     console.log(fullName);
// }
// let firstName = "Rama";
// let lastName = "Kumari";
// addString(firstName , lastName);

//// using in Array/////////

// function addString(arr){
//     let fullSentence =arr.join(" "); 
//     console.log(fullSentence);
// }
// let arr = ["my" , "best" ,"friend","Pravesh","and","Rama"];
// addString(arr);


/// Arrow function//////////

// const sum = (n ,m) =>{
//     return n+m;
// }
// let n1 = 50;
// let n2 = 50;
// console.log(sum(n1,n2));

// let add = (a, b) => a + b;

// let n1 = 25;
// let n2 = 25;
// let sum = add(n1, n2);
// console.log(sum);

// const check = () => {
//     if (word.includes('world')) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let word = 'Hello, world!';
// console.log(check(word));


// const product = (n1=6 ,n2=3) =>{
//     let ans = n1 * n2;
//     console.log(ans);
// }
// product();
// console.log(product(5 , 6));


// function porduct(x = 5) {
//     return x * x ;
// }
// console.log(porduct());


// function greet(name , age) {
//     console.log(`${name} ${age}`);
//   }
  
//   greet("Rama" , 24); 


// const greet = (name , age)=>{
//     console.log(`${name} ${age}`);
//   }
  
//   greet("Rama" , 24); 



// const greet = (age)=>{
//     console.log(`Rama ji , ${age}`);
//   }
  
//   greet(24); 



// function nums(callback) {
//     // simulate fetching data from a server
//     setTimeout(() => {
//       const data = [1, 2, 3, 4, 5 , 6 , 7 , 8 ,9];
//       callback(data);
//     }, 1000);
//   }
  
//   nums((data) => {
//     console.log(data);
//   });


// function callbackFunction(){
//     console.log('Ritesh');
// }

// // higher order function
// function higherOrderFunction(func){
//     console.log('Rama')
//     func()
// }

// higherOrderFunction(callbackFunction);


// const calculate =  function (num) {
//     const ans = [];
//     for(let i = 0; i< num.length; i++){
//         ans.push(2 * num[i]);
//     }
//     return ans;
// }
// const num = [1, 2, 3 ,5];
// console.log(calculate(num));