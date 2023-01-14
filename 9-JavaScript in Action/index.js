function getDigit(digit) {
	if (currentOperation == null) {
		if (display.textContent.includes("=")) {
			num1 = digit;
		} else {
			num1 += digit;
		}
		display.textContent = num1;
	} else {
		num2 += digit;
		display.textContent = num1 + " " + currentOperation + " " + num2;
	}
}

function getOperation(operation) {
	if (currentOperation == null) {
		currentOperation = operation;
		document.getElementById(currentOperation).classList.add("button-active");
	} else if (currentOperation == operation) {
		document.getElementById(currentOperation).classList.remove("button-active");
		currentOperation = null;
	} else {
		document.getElementById(currentOperation).classList.remove("button-active");
		document.getElementById(operation).classList.add("button-active");
		currentOperation = operation;
	}
}

function getResult() {
	let n1 = parseInt(num1);
	let n2 = parseInt(num2);
	let result;

	switch (currentOperation) {
		case '+':
			result = n1 + n2;
			break;
		case '-':
			result = n1 - n2;
			break;
		case '*':
			result = n1 * n2;
			break;
		case '/':
			result = n1 / n2;
			break;
		default:
			break;
	}

	display.innerHTML = "<i>= " + result + "</i>";
	document.getElementById(currentOperation).classList.remove("button-active");
	currentOperation = null;
	num1 = result;
	num2 = "";
}

function clearDisplay() {
	num1 = "";
	num2 = "";

	if (currentOperation != null) {
		document.getElementById(currentOperation).classList.remove("button-active");
		currentOperation = null;
	}
	display.textContent = 0;
}

function deleteDigit() {
	if (currentOperation == null) {
		num1 = num1.slice(0, num1.length - 1);
		if (num1.length == 0) display.textContent = 0;
		else display.textContent = num1;
	} else {
		num2 = num2.slice(0, num2.length - 1);
		if (num2.length == 0) display.textContent = num1;
		else display.textContent = num1 + " " + currentOperation + " " + num2;
	}
}

let num1 = "";
let num2 = "";
let currentOperation;
const display = document.getElementById("display");
let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
	buttons.item(i).addEventListener("click", function (event) {
		let key = event.target.id;
		switch (key) {
			case '0': case '1': case '2': case '3': case '4':
			case '5': case '6': case '7': case '8': case '9':
				getDigit(key);
				break;
			case '+': case '-': case '*': case '/':
				getOperation(key);
				break;
			case 'compute':
				getResult();
				break;
			case 'clear':
				clearDisplay();
				break;
			case 'Backspace':
				deleteDigit();
				break;
			default:
				break;
		}
	});
}

// Solution
document.addEventListener('keydown', function (event) {
	let pressedKey = event.key;
	console.log(event);
	switch (pressedKey) {
		case '0': case '1': case '2': case '3': case '4':
		case '5': case '6': case '7': case '8': case '9':
			getDigit(pressedKey);
			break;
		case '+': case '-': case '*': case '/':
			getOperation(pressedKey);
			break;
		case 'Enter':
			getResult();
			break;
		case 'Backspace':
			deleteDigit();
			break;
	}
});