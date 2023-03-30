// Task 1

let a = "true";
let b = false;
let c = 17;
let d = undefined;
let e = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
//---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

//Task 2

let height = 15;
let width = 20;

if (height > width) {
  console.log(height);
} else {
  console.log(width);
}

//---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

//Task 3

for (let f = 1; f <= 20; f++) {
  if (f % 3 === 0) {
    console.log(f);
  }
}
//---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

//Task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

console.log(key && documents && pen && (apple || orange));
//---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

// Task 5

let number = prompt("Enter your number");
if (number % 3 === 0 && number % 5 === 0) {
  alert("FizBuz");
} else if (number % 3 === 0) {
  alert("Buz");
} else if (number % 5 === 0) {
  alert("Fiz");
}

//---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

// Task 6
let age = prompt("Enter your age");

if (age >= 16 && age <= 18) {
  alert("You can smoke a cigarette, just don't tell your mom ");
} else if (age <= 18) {
  alert("Drink Coca-Cola");
} else if (age >= 18) {
  alert("Let's drink beer");
}
//---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

// Task 7

const direction = prompt("Enter the name of the side of the world you wanna visit:");

switch (direction) {
  case "юг":
    console.log("на юг пойдешь счастье найдешь");
    break;
  case "север":
    console.log("на север пойдешь много денег найдешь");
    break;
  case "запад":
    console.log("на запад пойдешь верного друга найдешь");
    break;
  case "восток":
    console.log("на восток пойдешь разработчиком станешь");
    break;
  default:
    console.log("Something go wrong! Let's try again.");
    break;
}

//---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

//Task Advanced 1

let userName = "пОлИнА нАбЕрЕжНаЯ";
let partOfUserName = userName.toLowerCase().split(" ");
let newUserName = "";
for (part of partOfUserName) {
  part[0].toUpperCase();
  let newPart = part[0].toUpperCase() + part.slice(1) + ' ';
  newUserName += newPart;
}
const greeting = `Привет, ${newUserName}`;
alert(greeting);


//---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

//Task Advanced 2

let userNumber = prompt('Enter you number:');
let minusNumber = prompt('How much to subtract?');
let plusNumber = prompt('How much to add?')
let multiplyNumber = prompt('How much to multiply?');
let divideNumber = prompt('How much to divide?');
let result = (((userNumber - minusNumber) + plusNumber) * multiplyNumber) / divideNumber;
alert (`(((${userNumber} - ${minusNumber}) + ${plusNumber}) * ${multiplyNumber}) / ${divideNumber} = ${result}`);

//---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

//Task Advanced 3

let str = "";
for (let i = 1; i <= 6; i++) {
    str += "#";
    console.log(str);
}

//---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----