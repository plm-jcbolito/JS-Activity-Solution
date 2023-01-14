function daysOfMonth(month) {
	switch (month) {
		case 'January':
		case 'March':
		case 'May':
		case 'July':
		case 'August':
		case 'October':
		case 'December':
			console.log(`${month} has 31 Days.`);
			break;
		case 'April':
		case 'June':
		case 'September':
		case 'November':
			console.log(`${month} has 30 Days.`);
			break;
		case 'February':
			console.log(`${month} has 28/29 Days.`);
			break;
		default:
			console.log('Invalid Input!');
	}
}

daysOfMonth('January');
daysOfMonth('June');
daysOfMonth('February');

