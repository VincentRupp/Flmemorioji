describe("component.game", function() {
	var scope;
	var testBoard = 
		{tiles: 	[
							{pos: 0, emoji: 'em-heart_eyes_cat', visible: false, matched: false},
							{pos: 1, emoji: 'em-wolf', visible: false, matched: false},
							{pos: 2, emoji: 'em-ghost', visible: false, matched: false},
							{pos: 3, emoji: 'em-heart_eyes_cat', visible: false, matched: false},
							{pos: 4, emoji: 'em-wolf', visible: false, matched: false},
							{pos: 5, emoji: 'em-ghost', visible: false, matched: false}
							],
		width: Math.floor(98/2)+'%',
		matches: 3};

	beforeEach(angular.mock.module('ui.router'));
	beforeEach(angular.mock.module('components.game'));


	beforeEach(inject(function($rootScope, _$controller_) {
		scope = $rootScope.$new();
		$controller = _$controller_;
		GameController = $controller('GameController', { resolvedSize: 'xs' });
	}));

	var testTile1 = {pos: 0, emoji: 'em-heart_eyes_cat', matched: false};
	var testTile2 = {pos: 0, emoji: 'em-ghost', matched: false};
	var testActiveTiles = [{pos: 5, emoji: 'em-heart_eyes_cat', matched: false}];

	// Verify the controller exists
	it('should be defined', function() {
		expect(GameController).toBeDefined();
	});
	it('should have a clickTile method', function() {
		expect(GameController.clickTile).toBeDefined();
	});
	it('should have a checkMatch method that returns false if the tiles do not match', function() {
		expect(GameController.checkMatch).toBeDefined();
		expect(GameController.checkMatch(testTile1, testTile2)).toEqual(false);
	});
	it('should have a checkMatch method that returns true when the tiles match', function() {
		expect(GameController.checkMatch(testTile1, testActiveTiles[0])).toEqual(true);
	});
	it('should have markVisible and markInvisible methods', function() {
		expect(GameController.markVisible).toBeDefined();
		expect(GameController.markInvisible).toBeDefined();
		expect(GameController.markVisible(0,testBoard)).toEqual(true);
		// Check to be sure that change persists once the function is over (it should)
		expect(testBoard.tiles[0].visible).toEqual(true);
		// Check that the function returns false if passed a position not on the board
		// There's really no way this could happen, but still
		expect(GameController.markVisible(109,testBoard)).toEqual(false);
		expect(GameController.markInvisible(0,testBoard)).toEqual(true);
		expect(GameController.markInvisible(109,testBoard)).toEqual(false);
	});

	it('should have a method to check for game over', function() {
		expect(GameController.checkGameOver).toBeDefined();
		expect(GameController.checkGameOver(3, testBoard)).toEqual(true);
		expect(GameController.checkGameOver(2, testBoard)).toEqual(false);
	});

	it('should do more when the second tile is clicked', function() {
		spyOn(GameController, "markVisible").and.callThrough();
		spyOn(GameController, "checkMatch").and.callThrough();
		// console.log(GameController.clickNum);
		GameController.clickNum = 0;
		GameController.clickTile(testTile1);
		expect(GameController.markVisible).toHaveBeenCalled();
		expect(GameController.checkMatch).not.toHaveBeenCalled();
	})

})