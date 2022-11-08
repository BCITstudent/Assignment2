// for (let i = o; i < 1000000; i++){
//     console.log(i);
// }

// for(let i = 0; i <= 10; i++) {
//     console.log(Math.pow(2 **i))
// }
// let i = 0
// while (i <= 10)
// {
//     console.log(Math.pow(2 **i))
//     i++;
// }
let input;
do{
let input = prompt ("What is your name?");
console.log(Number(input));
}
while(!isNaN(Number(input)));
alert("Hello " + input);