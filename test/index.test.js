var bankersRounding = require('../index.js');

test('bankersRounding(2.5)', () => {
	expect(bankersRounding(2.5)).toBe(2);
});

test('bankersRounding(3.5)', () => {
	expect(bankersRounding(3.5)).toBe(4);
});

test('bankersRounding(0.025, 2)', () => {
	expect(bankersRounding(0.025, 2)).toBe(0.02);
});

test('bankersRounding(0.035, 2)', () => {
	expect(bankersRounding(0.035, 2)).toBe(0.04);
});