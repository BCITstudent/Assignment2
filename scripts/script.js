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
// let input;
// do{
// let input = prompt ("What is your name?");
// console.log(Number(input));
// }
// while(!isNaN(Number(input)));
// alert("Hello " + input);

// let fruits=["Apple", "Banana"];
// let pushResult = fruits.push("Orange");
// console.log(pushResult);

// fruits.pop();
// console.log(fruits);

// fruits.unshift("Mango");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// console.log(fruits.indexOf("Apple"))

let fruits =["Apple", "Banana"];
fruits.push("Orange");
let arr = [1,2,3,4,5,6,7,8,9,10]
for (let item of arr)
{
    console.log(2 ** item);
}

const person = {
    name:['Bob', 'Smith'],
    age:32,
    gender: 'male',
    interests: ['music', 'skiing']
};
console.log(`My name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.hobbies[0]} and ${person.hobbies[1]`}):

for (let key in person)
{
    console.log(key);
    console.log(person[key]);
}