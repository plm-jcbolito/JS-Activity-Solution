const personalInfo = {
	name: "Joshua",
	age: 21,
	university: "Pamantasan ng Lungsod ng Maynila"
};

for (const key in personalInfo) {
	console.log(`${key.toUpperCase()}: ${personalInfo[key]}`);
}