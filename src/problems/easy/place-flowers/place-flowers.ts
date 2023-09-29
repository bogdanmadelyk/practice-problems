export const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
	let count = 0
	for(let i = 0; i < flowerbed.length; i++) {
		if(flowerbed[i] === 0) {
			if(i > 0 && i < flowerbed.length - 1) {
				if(flowerbed[i-1] === 0 && flowerbed[i+1] === 0) {
					count++
					flowerbed[i] = 1;
				}
			}
			else if((i === 0 && flowerbed[i+1] === 0) || (i === flowerbed.length - 1 && flowerbed[i-1] === 0)) {
				count++
				flowerbed[i] = 1;
			}
		}
	}
	return count >= n
}