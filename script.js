function decimalToBinary(num) {

	let binary= num;
	while (num > 0) {
	   if (num & 1) {
	      binary = "1" + binary;
	   } else {
	      binary = "0" + binary;
	   }
	   num = num >> 1;
	}

	return binary;
}

window.decimalToBinary = decimalToBinary;
