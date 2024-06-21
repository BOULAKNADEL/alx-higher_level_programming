#!/usr/bin/node

function factorial (arg) {
  if (isNaN(arg) || arg === 0) {
    return 1;
  } else {
    return arg * factorial(arg - 1);
  }
}

const arg = parseInt(process.argv[2]);
const factNumber = factorial(arg);
console.log(factNumber);
