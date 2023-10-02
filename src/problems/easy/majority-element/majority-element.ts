// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

export const majorityElement = (nums: number[]): number => {
	let candidate = 0, count = 0
	for(let num of nums) {
		if(count === 0) {
			candidate = Number(num)
		}
		count += Number(num) === candidate ? 1 : -1
	}
	return candidate
}