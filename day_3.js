// let n = parseInt(prompt("Enter a number: "));

// if(n > 0){
//     console.log("Positive");
// }
// else if( n < 0 ){
//     console.log("negative")
// }
// else{
//     console.log("Zero");
// }
//console.log(checkNumber(2));



// function checkNumber(n){
//     if(n > 0){
//         console.log("Positive");
//     }
//     else if( n < 0 ){
//         console.log("negative")
//     }
//     else{
//         console.log("Zero");
//     }
    
// }

// checkNumber(2);

  

// function checkPerson(age){
//     if( age >= 18){
//         console.log("Eligible");

//     }
//     else{
//         console.log("Not Eligible");
//     }
// }
// let number=18;
// checkPerson(Number);


// function largestNumber( a , b ,c){
//     if( a > b  && a > c){
//         console.log(a);
//     }
//     else if( b >=a && b >= c){
//         console.log(b);
//     }
//     else{
//         console.log(c);
//     }
// }
// let a=2;
// let b=3;
// let c=4;
// largestNumber(a,b,c);





// function weekDay(Day) {
//     switch( Day){
//         case 0:
//             console.log( "Sunday");
//             break;
//           case 1:
//             console.log( "Monday");
//             break;
//           case 2:
//             console.log( "Tuesday");
//             break;
//           case 3:
//             console.log( "Wednesday");
//             break;
//           case 4:
//             console.log( "Thursday");
//             break;
//           case 5:
//             console.log( "Friday");
//             break;
//           case 6:
//            return ("Saturday")
//     } 
// }
// let day =6;
// weekDay(day);



// function checkGrade(mark){
//     switch(true){
//         case mark >= 90 :
//             console.log("A");
//             break;
        
//         case mark >= 80 :
//             console.log("B");
//             break;

//             case mark >= 60 :
//                 console.log("C");
//                 break;

//             case mark >= 50 :
//                 console.log("D");
//                 break;

//             default:
//                 console.log("F")
//                 break;
//     }
// }

// checkGrade(50);



// function checkEven(n){
//     return (n % 2 == 0) ? "Even" : "Odd";
// }
// console.log(checkEven(2));



// function checkLeap(year) {   
    // one condition
//     if (year % 4 === 0 && year % 100 != 0) {
//         return "Leap year.";
//     }
       //second condition & third condition
//     if (year % 4 === 0 && year % 100 != 0 && year % 400 === 0) {
//         return "Leap year.";
//     }

//     if (year % 4 === 0 && year % 100 != 0 && year % 400 != 0) {
//         return "Not leap year.";
//     }

//     else {
//         return "Not leap year.";
//     }
// }

// console.log(checkLeap(2004));


// function checkLeap(year) {
//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// checkLeap(2004);

function checkLeap(year) {
    // Return true if the year is divisible by 4 , 400 but not divisible by 100 
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(checkLeap(2004));
