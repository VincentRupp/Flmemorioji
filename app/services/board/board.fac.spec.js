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
		width: 99/2,
		height: 75/3};

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
	it('should have a method that returns the correct boardSize for the size', function() {
		boardSize = boardFactory.findBoardSize('xs');
		expect(boardSize.matches).toEqual(3);
		expect(boardSize.rows).toEqual(3);
		expect(boardSize.cols).toEqual(2);
	});
	it('should have a method that returns a valid board', function() {
		var i;
		var assignedEmoji = 0;
		expect(boardFactory.generateBoard).toBeDefined();
		board = boardFactory.generateBoard('xs');
		expect(board.width).toEqual(testBoard.width);
		expect(board.height).toEqual(testBoard.height);
		expect(board.tiles.length).toEqual(testBoard.tiles.length);

		//check that every tile has a valid emoji assigned to it
		for (i=0;i<board.tiles.length;i++) {
			x = board.tiles[i].emoji;
			if (x != '' && x != null) {assignedEmoji++;}
		}
		expect(assignedEmoji).toEqual(testBoard.tiles.length);
	});
})