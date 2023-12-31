// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

export const containsDuplicate = (nums: number[]): boolean => {
	let map = new Map()
	for (let i = 0; i < nums.length; i++) {
		if(map.has(nums[i])) {
			return true
		}
		else {
			map.set(nums[i], true)
		}
	}
	return false;
};

export const containsDuplicate2 = (nums: number[]): boolean => {
	let map = new Map()
	nums.forEach(item => map.set(item, true))
	return map.size !== nums.length;
};