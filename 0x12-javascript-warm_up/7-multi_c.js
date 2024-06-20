#!/usr/bin/node

const nTimes = parseInt(process.argv[2]);

if (!isNaN(nTimes)) {
  if (nTimes > 0) {
    for (let i = 0; i < nTimes; i++) {
      console.log('C is fun');
    }
  } else {
    console.log('Missing Number of occurrences');
  }
} else {
  console.log('Missing Number of occurrences');
}
