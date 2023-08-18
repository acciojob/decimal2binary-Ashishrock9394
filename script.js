function decimalToBinary(num) {

	let binary=0;
	while (num > 0) {
		let rem = num%2;
		binary = binary*10 + rem;
		num = num/2;
	}

	return binary;
}

window.decimalToBinary = decimalToBinary;
