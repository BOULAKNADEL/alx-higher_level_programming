#!/usr/bin/node

const n_times = parseInt(process.argv[2]);

if (!isNaN(n_times)) {
  if (n_times > 0) {
    for (let i = 0; i < n_times; i++) {
	  console.log('C is fun');
	}
  } else {
    console.log('Missing Number of occurrences');
  }
} else {
  console.log('Missing Number of occurrences');
}
