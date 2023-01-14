const givenArray = [1, 0, -29, "Hello", -6, 20, 0, "World"];
for (const element of givenArray) {
	if (typeof (element) == 'number') {
		if (element > 0) {
			console.log(`${element} is a positive number.`);
		} else if (element < 0) {
			console.log(`${element} is a negative number.`);
		} else {
			console.log(`${element} is zero.`);
		}
	} else {
		console.log(`${element} is not a number.`);
	}
}