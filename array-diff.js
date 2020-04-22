// solution for array.diff kata
// initial attempt only compares singular duplicate value
// FIXME - remove all instances of duplicates for output array.
//      Current only removes one instance
// TODO - implement a[i] == b[j] approach for comparison
function arrayDiff(a, b) {
	if (a === undefined || a.length === 0) {
		return [];
	} else if (a.length) {
		for (i = 0; i < a.length; i++ && a.length) {
			index = a.indexOf(b[i]);
			if (index > -1) {
				console.log('index', index);
				a.splice(index, 1);
				console.log('in if statement');
				console.log(a);
				return a;
			} else {
				return a;
			}
		}
	}
}
