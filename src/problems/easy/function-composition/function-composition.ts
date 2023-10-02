type F = (x: number) => number;
export const compose = (functions: F[]): F => {
	return function(x) {
		for(let i = functions.length - 1; i >= 0; i--) {
			x = functions[i](x)
		}
		return x
	}
}

export const compose2 = (functions: F[]): F => {
	return function(x) {
		return functions.reduceRight((acum, cur) => cur(acum), x)
	}
}