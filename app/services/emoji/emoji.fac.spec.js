describe("do I know what I'm doing?", function () {
	it('has a dummy spec to test 2 + 2', function() {
		expect(2+2).toEqual(4);
	});
});


describe('Emoji Factory', function() {
	var Users;
	var EmojiFactory;

	beforeEach(angular.mock.module('factory.emoji'));

	// beforeEach(angular.mock.module('api.users'));

	beforeEach(inject(function(_emojiFactory_) {
		emojiFactory = _emojiFactory_;
	}));

	// beforeEach(inject(function(_EmojiFactory_){
	// 	EmojiFactory = _EmojiFactory_;
	// }));
	
	it('should exist', function() {
		expect(emojiFactory).toBeDefined();
	});
	it('should have a method to get a certain number of unrandomized emoji', function() {
		x = emojiFactory.get(4);
		expect(x.length).toEqual(4);
		expect(x[0].id).toEqual(1);
	});
	it('should have a method to randomize', function() {
		expect(emojiFactory.randomize).toBeDefined();
		x = emojiFactory.get(5);
		y = emojiFactory.randomize(x);
		expect(x[0].id).not.toEqual(1);
	});


});