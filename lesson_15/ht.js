// Task 1

let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

// Task 2

let secInMin = 60;
let minInHour = 60;
let hoursInDay = 24;
let DaysInYear = 365;
let age = 25;

let myAgeInSeconds = (age * DaysInYear * hoursInDay * minInHour * secInMin);
console.log(myAgeInSeconds);

// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

// Task 3

let count = 42;
let userName = '42';

// number to string
console.log(`${count}`)
console.log(String(count))
console.log('' + count)
console.log(count.toString())

// string to number
console.log(userName, +userName)
console.log(Number(userName))
console.log(parseInt(userName))
// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

// Task 4

let a = 1;
let b = 2;
let c = "белых медведей";

console.log(String(a) + String(b), c);

// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

// Task 5
let  firstWord = "доступ";
let  secondWord = "морпех";
let  thirddWord= "наледь";
let  fourthWord= "попрек";
let  fifthWord= "рубило";

let lengthWords = fifthWord + secondWord + thirddWord + fourthWord + fifthWord;

console.log(lengthWords.length)
 
// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

// Task 6

let requestName = "Enter your name:";
let requestAge = "Enter your age:";

console.log(requestName, requestAge);
// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------