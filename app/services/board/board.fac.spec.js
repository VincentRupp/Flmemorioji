describe('factory.board', function() {
	var testSize = 'md';

	var testBoard = 
		{tiles: 	[
							{pos: 0, emoji: 'em-heart_eyes_cat', matched: false},
							{pos: 1, emoji: 'em-wolf', matched: false},
							{pos: 2, emoji: 'em-ghost', matched: false},
							{pos: 3, emoji: 'em-heart_eyes_cat', matched: false},
							{pos: 4, emoji: 'em-wolf', matched: false},
							{pos: 5, emoji: 'em-ghost', matched: false}
							],
		width: Math.floor(98/3)+'%'};

	beforeEach(angular.mock.module('factory.emoji'));
	beforeEach(angular.mock.module('factory.board'));

	beforeEach(inject(function(_emojiFactory_, _boardFactory_) {
		emojiFactory = _emojiFactory_;
		boardFactory = _boardFactory_;
		// TilesController = $controller('TilesController', {});
	}));


	it('should be defined', function() {
		expect(boardFactory).toBeDefined();
	});
	it('should have a method that returns the correct board for the size', function() {
		board = boardFactory.findBoardSize('xs');
		expect(board.matches).toEqual(3);
		expect(board.rows).toEqual(2);
		expect(board.cols).toEqual(3);
	});
	it('should have a method that returns a valid board', function() {
		expect(boardFactory.generateBoard).toBeDefined();
		board = boardFactory.generateBoard('xs');
		expect(board.width).toEqual(testBoard.width);
		expect(board.tiles.length).toEqual(testBoard.tiles.length);
	});
})