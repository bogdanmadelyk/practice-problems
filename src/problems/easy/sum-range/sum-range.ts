type numsType = number[]

export class NumArray {
	nums: numsType = []
	constructor(nums: numsType) {
		this.nums = nums
	}
	sumRange(left: number, right: number): number {
		let result = 0
		for(let i = left; i <= right; i++) {
			result += this.nums[i]
		}
		return result
	}
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */