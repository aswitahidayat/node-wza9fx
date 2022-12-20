// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numb = [];
function generateRandom() {
  console.log('==');
  let zero = numb.filter(function (el) {
    return el.val == 0;
  });
  a = Math.floor(Math.random() * zero.length);
  console.log(a);
  console.log(zero[a]);
  var index = numb.indexOf(zero[a]);
  if (index > -1) {
    numb.splice(a, 1);
  }
  // console.log(zero);
  console.log('??');
  return a;
}

function notZero() {}

readline.question('Input Number:', (size) => {
  this.size = size;

  // let a = generateRandom(1, parseInt(size));
  for (let i = 1; i <= size; i++) {
    numb.push({ cor: i, val: 0 });
  }

  generateRandom();
  generateRandom();
  console.log(numb);

  readline.close();
});
