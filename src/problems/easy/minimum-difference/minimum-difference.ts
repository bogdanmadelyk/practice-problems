// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.
// Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.
// Return the minimum possible difference.

export const minimumDifference = (nums: number[], k: number): number => {
	const sortedNums = nums.sort((a, b) => b - a)
	let start = 0, end = k - 1, minDiff = Infinity
	while (end < sortedNums.length) {
		const diff = sortedNums[start] - sortedNums[end]
		if(diff < minDiff) {
			minDiff = diff
		}
		start++
		end++
	}
	return minDiff
}