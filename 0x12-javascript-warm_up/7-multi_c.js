#!/usr/bin/node

const nTimes = parseInt(process.argv[2]);

if (!isNaN(nTimes)) {
  if (nTimes > 0) {
    for (let i = 0; i < nTimes; i++) {
	  process.stdout.write('C is fun\n');
    }
  } else {
    console.log('Missing Number of occurrences');
  }
} else {
  console.log('Missing Number of occurrences');
}
