import {uniqueEmailAddresses} from './unique-email-addresses.ts';

describe('Unique email addresses tests', () => {
	test('case 1',() => {
		expect(uniqueEmailAddresses(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])).toBe(2)
	})
	test('case 2',() => {
		expect(uniqueEmailAddresses(["a@leetcode.com","b@leetcode.com","c@leetcode.com"])).toBe(3)
	})
})