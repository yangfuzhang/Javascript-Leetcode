let multiply = function(num1, num2) {
	if(num1 === '0' || num2 === '0') {
		return '0'
	}

	let res = []

	for(let i = 0; i < num1.length; i++) {
		let tmp1 = +num1[num1.length - 1 - i]

		for(let j = 0; j < num2.length; j++) {
			let tmp2 = +num2[num2.length - 1 - j]

			let pos = res[i+j] ? res[i+j] + tmp1 * tmp2 : tmp1 * tmp2

			res[i+j] = pos % 10

			pos >= 10 && (res[i+j+1] = res[i+j+1] ? res[i+j+1] + Math.floor(pos/10) : Math.floor(pos/10))
		}
	}

	return res.reverse().join("")
}