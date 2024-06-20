#!/usr/bin/node

const arg1 = parseFloat(process.argv[2]);

if (!isNaN(arg1)) {
  console.log(`My number: ${parseInt(arg1)}`);
} else {
  console.log('No argument');
}
