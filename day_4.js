// ..........For Loop ..........
// function printNumber(n){
//     for(let i=1; i<=n; i++){
//         console.log(i);
//     }
// }
// printNumber(10);


// function multiplication(n){
//     for(let i=1; i<=n; i++){
//         console.log(i*5);
//     }
// }
// multiplication(10);


//............While Loop ...............

// function calculateSum(n){
//     let i=1, sum=0;
//     while(i <= n){
//          sum += i;
//          i++;
//     }
//     console.log(sum);
// }

// calculateSum(10);



// function printNum(n){
//     while( n > 0){
//         console.log(n);
//         n--;
//     }
// }

// printNum(10);


//........Do ....While Loop .........
// function printNum(n){
//      n=1;
//     do {
//         console.log(n);
//         n++;
//     } while (n <= 5)
// }

// printNum(5);

//.......Nested Loops.........

// function printStar(rows){
//     for (let i = 1; i <= rows; i++) {
//         let pattern = '';
//         for (let j = 1; j <= i; j++) {
//             pattern += '* ';
//         }
//         console.log(pattern);
//     }
// }

// printStar(5);


// function conti(n){
//     for (let i = 1; i <= n; i++) {
//         // skip the iteration if i is 5
//         if (i === 5) {
//             continue;
//         }
//         console.log(i);
//     }
// }
// conti(10);



function conti(n){
    for (let i = 1; i <= n; i++) {
        // skip the iteration if i is 5
        if (i === 5) {
            break;
        }
        console.log(i);
    }
}
conti(10);








