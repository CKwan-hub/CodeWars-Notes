function arrayDiff(a, b) {
	if (a === undefined || a.length === 0) {
		return [];
	} else if (b === undefined || b.length === 0) {
		return a;
	} else {
		function compare(o1, o2) {
			return o1 === o2;
		}
		function remove(a1, a2) {
			var arr = [];
			a1.forEach((o1) => {
				var found = false;
				a2.forEach((o2) => {
					if (compare(o1, o2)) {
						found = true;
					}
				});
				if (!found) {
					console.log(o1);
					arr.push(o1);
				}
			});
			return arr;
		}
	}
	return remove(a, b);
}
