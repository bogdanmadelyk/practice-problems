export const mergeSortedArray = (nums1: number[], m: number, nums2: number[], n: number): void => {
	let p1 = m - 1, p2 = n - 1, length = nums1.length
	while (p2 >= 0) {
		if(nums2[p2] >= nums1[p1] || p1 === -1) {
			nums1.splice(p1 + 1, 0, nums2[p2])
			p2--
		}
		else {
			p1--
		}
	}
	nums1.length = length
};