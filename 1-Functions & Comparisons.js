function evenOdd(num) {
	if (typeof (num) != 'number') {
		console.log(`${num} is not a number`);
	} else if (num % 2 == 0) {
		console.log(`${num} is an even number.`);
	} else {
		console.log(`${num} is an odd number.`);
	}
}