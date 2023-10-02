// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

export const maxProfit = (prices: number[]): number => {
	let minPriceValue = Number.MAX_SAFE_INTEGER
	let maxProfitValue = 0

	for(let i = 0; i < prices.length; i++) {
		if(prices[i] < minPriceValue) {
			minPriceValue = prices[i]
		}
		if(prices[i] - minPriceValue > maxProfitValue) {
			maxProfitValue = prices[i] - minPriceValue
		}
	}

	return maxProfitValue
}