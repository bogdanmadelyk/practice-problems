import {timeLimit} from './promise-time-limit.ts';

describe('Promise time limit tests', () => {
	test('rejected with time case', async () => {
		const time = 50, timeoutTime = 100;
		const fn = async (n: number) => {
			await new Promise(res => setTimeout(res, timeoutTime));
			return n * n;
		}
		const limited = timeLimit(fn, time)
		const start = performance.now()
		let result;
		try {
			const res = await limited(5)
			result = {"resolved": res, "time": Math.floor(performance.now() - start)};
		} catch (err) {
			result = {"rejected": err, "time": Math.floor(performance.now() - start)};
		}
		expect(result.rejected).toBe('Time Limit Exceeded')
		expect(result.time).toBeLessThan(timeoutTime)
	})
	test('rejected with error case', async () => {
		const errorName = "error";
		const fn = async () => {
			throw errorName;
		}
		const limited = timeLimit(fn, 50)
		let result;
		try {
			const res = await limited()
			result = {"resolved": res, "time": 0};
		} catch (err) {
			result = {"rejected": err, "time": 0};
		}
		expect(result.rejected).toBe(errorName)
		expect(result.time).toBe(0)
	})
	test('resolved case', async () => {
		const time = 150, timeoutTime = 100;
		const fn = async (n: number) => {
			await new Promise(res => setTimeout(res, timeoutTime));
			return n * n;
		}
		const limited = timeLimit(fn, time)
		const start = performance.now()
		let result;
		try {
			const res = await limited(5)
			result = {"resolved": res, "time": Math.floor(performance.now() - start)};
		} catch (err) {
			result = {"rejected": err, "time": Math.floor(performance.now() - start)};
		}
		expect(result.resolved).toBe(25)
		expect(result.time).toBeLessThan(time)
	})
})