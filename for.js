// left-half diamond
for (let i = 1; i <= 5; i++) {
  let rows = " ".repeat(5 - i);
  console.log(rows + "*".repeat(i));
}
for (let i = 4; i >= 1; i--) {
  let rows = " ".repeat(5 - i);
  console.log(rows + "*".repeat(i));
}
console.log("  ");

// diamond
for (let i = 1; i <= 5; i++) {
  let rows = " ".repeat(5 - i);
  console.log(rows + "*".repeat(i * 2 - 1));
}
for (let i = 4; i >= 1; i--) {
  let rows = " ".repeat(5 - i);
  console.log(rows + "*".repeat(i * 2 - 1));
}
console.log("  ");

// right-half glass
let i = 7;
console.log("*".repeat(i));
for (i = 1; i <= 7; i++) {
  let rows = " ".repeat(7 - 1);
  console.log(rows + "*".repeat(1));
}
console.log("  ");

// left-half glass
let y = 7;
console.log("*".repeat(y));
for (y = 1; y <= 7; y++) {
  let rows = " ".repeat(7 - 1);
  console.log("*".repeat(1) + rows);
}
console.log("  ");

//Random Numbers
console.log("Random Numbers");
// let x = Math.random() * 49;
// console.log(x);
let rNumArray = [];

for (let i = 0; i < 6; i++) {
  let rNum;
  rNum = Math.floor(Math.random() * 49 + 1);
  rNumArray.push(rNum);
}
console.log(rNumArray);
