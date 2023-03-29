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
console.log(`${count}`); //using for long string with dynamic data
console.log(String(count));
console.log('' + count);
console.log(count.toString());

// string to number
console.log(userName, +userName);
console.log(Number(userName));
console.log(parseInt(userName));
// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

// Task 4

let a = 1;
let b = 2;
let c = "белых медведей";

console.log(String(a) + String(b)+ c);

let resultTask = `${a}${b} ${c}` 
console.log(resultTask);

// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

// Task 5
let  firstWord = "доступ";
let  secondWord = "морпех";
let  thirddWord= "наледь";
let  fourthWord= "попрек";
let  fifthWord= "рубило";

let lengthWords = fifthWord + secondWord + thirddWord + fourthWord + fifthWord;

console.log(lengthWords.length); //it's possible, but

let resultTask5 = (fifthWord + secondWord + thirddWord + fourthWord + fifthWord).length;

console.log(resultTask5); //this one better
 
// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

// Task 6

let requestName = "Enter your name:";
let requestAge = "Enter your age:";

let resultTask6 = `Enter your name: Enter your age:`;
 alert(resultTask6);


console.log(requestName, requestAge);

// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------


// Task 7

let first =4;
let second =3;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

// Task 8

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = (codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);

console.log(cipher);
// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------