function arrayDiff(a, b) {
	if (a === undefined || a.length === 0) {
		//  Initial check if 'a' array is undefined/empty.
		return [];
	} else if (b === undefined || b.length === 0) {
		// Check for 'b' array.
		return a;
	} else {
		// Checking for duplicate value.
		function compare(a1, a2) {
			return a1 === a2;
		}
		// Adds unique values to new array.
		function removeSame(b1, b2) {
			// Empty array to contain out output unique characters.
			var outputArr = [];
			// Comparison check run on each 'a' array element.
			b1.forEach((a1) => {
				var exists = false;
				b2.forEach((a2) => {
					// Running comparison check, exists ='true' on duplicate found.
					if (compare(a1, a2)) {
						exists = true;
					}
				});
				if (!exists) {
					// If unique value, push to outputArr array.
					outputArr.push(a1);
				}
			});
			return outputArr;
		}
	}
	return removeSame(a, b);
}
