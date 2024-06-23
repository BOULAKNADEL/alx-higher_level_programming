#!/usr/bin/node

function secondBiggest (args, length) {
  let max1;
  let max2;

  if (length <= 3) {
    return 0;
  }

  if (args[2] > args[3]) {
    max1 = args[2];
    max2 = args[3];
  } else {
    max1 = args[3];
    max2 = args[2];
  }

  for (let i = 2; i < length; i++) {
    if (args[i] > max1) {
      max2 = max1;
      max1 = args[i];
    } else if (args[i] > max2 && args[i] < max1) {
      max2 = args[i];
    }
  }
  return max2;
}

const args = process.argv;
const length = args.length;
const begSec = secondBiggest(args, length);
console.log(begSec);
