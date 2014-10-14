describe('Javabuzz', function() {
var javabuzz;

describe('knows when a number is', function() {

	it('divisible by three', function() {
		javabuzz = new Javabuzz();
		expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
	});

	it('divisible by five', function() {
		javabuzz = new Javabuzz();
		expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
	});

	it('divisible by fifteen', function () {
		javabuzz = new Javabuzz();
		expect(javabuzz.isDivisibleByFifteen(15)).toEqual(true);
	});

});

describe('knows when a number is NOT', function() {

	it('divisible by three', function() {
		javabuzz = new Javabuzz();
		expect(javabuzz.isDivisibleByThree(1)).toBe(false);
	});

	it('divisibile by five', function() {
		javabuzz = new Javabuzz();
		expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);

	});

	it('divisible by fifteen', function() {
		javabuzz = new Javabuzz();
		expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
	});
});

});