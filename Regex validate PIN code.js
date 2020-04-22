function validatePIN(pin) {
	const regex = /^[\d]{6}$|^[\d]{4}$/;
	return regex.test(pin);
}
