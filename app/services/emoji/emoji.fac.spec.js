describe("do I know what I'm doing?", function () {
	it('has a dummy spec to test 2 + 2', function() {
		expect(2+2).toEqual(4);
	});
});


describe('Emoji Factory', function() {
	var Users;
	var EmojiFactory;

	beforeEach(angular.mock.module('factory.emoji'));

	beforeEach(inject(function(_emojiFactory_) {
		emojiFactory = _emojiFactory_;
	}));

	it('should be defined', function() {
		expect(emojiFactory).toBeDefined();
	});
	it('should have a method to get a certain number of emoji', function() {
		x = emojiFactory.get(4);
		expect(x.length).toEqual(4);
	});
	it('should have a method to randomize', function() {
		expect(emojiFactory.randomize).toBeDefined();
		x = [
			{id: 1, name: 'em-heart_eyes_cat'},
			{id: 2, name: 'em-kissing-cat'},
			{id: 3, name: 'em-joy-cat'},
			{id: 4, name: 'em-cat'},
			{id: 5, name: 'em-crying_cat_face'}];
		y = emojiFactory.randomize(x);
		expect(x[0].id).not.toEqual(1);
	});


});