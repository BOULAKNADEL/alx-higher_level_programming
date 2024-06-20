#!/usr/bin/node

const inputs = process.argv;

if (inputs.length === 2) {
  console.log('No argument');
} else if (inputs.length === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
