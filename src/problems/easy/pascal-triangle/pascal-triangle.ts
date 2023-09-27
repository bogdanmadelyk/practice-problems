// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers.

export const pascalTriangle = (numRows: number): number[][] => {
	let result:number[][] = []
	for(let i = 0; i < numRows; i++) {
		result.push([])
		for (let j = 0; j < i+1; j++) {
			if(j === i || j === 0) {
				result[i][j] = 1
			}
			else {
				result[i][j] = result[i-1][j-1] + result[i-1][j]
			}
		}
	}
	return result
};