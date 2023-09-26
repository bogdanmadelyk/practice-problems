// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.

export const replaceElements = (arr: number[]): number[] => {
	if(!arr.length) {
		return arr;
	}
	let max = arr[arr.length - 1]
	arr[arr.length - 1] = -1
	for(let i = arr.length - 2; i >= 0; i--) {
		const current = arr[i]
		arr[i] = max
		if(current > max) {
			max = current
		}
	}
	return arr;
};