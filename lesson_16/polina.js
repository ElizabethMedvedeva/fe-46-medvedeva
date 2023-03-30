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
