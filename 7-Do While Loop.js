console.log("Numbers between 1-100 that are divisible by 3.");
let counter = 1;
do {
	if (counter % 3 == 0) {
		console.log(counter);
	}
	counter++;
} while (counter <= 100);