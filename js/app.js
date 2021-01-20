let myNumber = 45;
if (typeof myNumber !== 'number') {
  console.log('This is not a number');
} else if (Number.isInteger(myNumber/3)&&Number.isInteger(myNumber/5)) {
  console.log('GenBuzz');
} else if (Number.isInteger(myNumber/3)) {
  console.log('Gen');
} else if (Number.isInteger(myNumber/5)) {
    console.log('Buzz');
} else {
  console.log(`${myNumber}`);
}
  
let item = 'jeans';
switch (item) {
  case 'shoes':
    console.log('Shoes- $50');
    break;
  case 'jeans':
    console.log('Jeans- $25');
    break;
  case 'hat':
    console.log('Hat- $12');
    break;
  case 'socks':
    console.log('Socks- $22');
    break;
  default:
    console.log('Invalid item');
    break;
}

let min =50;
let max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


