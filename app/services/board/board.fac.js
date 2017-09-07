//This factory returns a game board based on a game size

// matches				#total			#rows x cols		#size
// 2							4						2x2							tiny
// 3							6						3x2							xs
// 4							8						4x2							sm
// 6							12					4x2							md
// 8							16					4x4							xm
// 12							24					6x4							lg
// 15							30					6x5							xl
// 28							56					8x7							hg
// 50							100					10x10						omg


//a sample game board looks like:
// var testBoard = 
// 		{tiles: 	[
// 							{pos: 0, emoji: {unicode: , name:''}, visible: false},
// 							{pos: 1, emoji: {unicode:, name:''}, visible: false},
// 							{pos: 2, emoji: {unicode:, name:''}, visible: false},
// 							{pos: 3, emoji: {unicode: , name:'}, visible: false},
// 							{pos: 4, emoji: {unicode:, name:''}, visible: false},
// 							{pos: 5, emoji: {unicode:, name:''}, visible: false}
// 							],
// 		width: 99/3,
//		height: 70/2,
//		matches: 3};

(function() {
	angular.module('factory.board', ['factory.emoji'])
	.factory('boardFactory', function(emojiFactory) {
		var vm = this;
		var o = {};

		var boardSizes = [
		{size: 'tiny', 	matches: 2,  rows: 2, cols: 2},
		{size: 'xs', 		matches: 3,  rows: 3, cols: 2},
		{size: 'sm',		matches: 4,  rows: 4, cols: 2},
		{size: 'md', 		matches: 6,  rows: 4, cols: 3},
		{size: 'xm',		matches: 8,  rows: 4, cols: 4},
		{size: 'lg', 		matches: 12, rows: 6, cols: 4},
		{size: 'xl',		matches: 15, rows: 6, cols: 5},
		{size: 'hg',		matches: 28, rows: 8, cols: 7},
		{size: 'omg',		matches: 50, rows:10, cols:10}		
		];

		o.findBoardSize = function(size) {
			return boardSizes.find(function(boardSize) {
				return boardSize.size === size;
			})
		};

		o.generateBoard = function(size) {
			var i = 0;
			var board = {};
			var tiles = [];
			var boardSize;
			boardSize = o.findBoardSize(size);

			//Get all the emoji that will be used
			emojiList = emojiFactory.get(boardSize.matches);

			//Add those to the array again so there's two of each
			emojiList = emojiList.concat(emojiList);
			//randomize that list
			emojiList = emojiFactory.randomize(emojiList);
			tileCount = boardSize.matches*2;
			for (i=0;i<tileCount;i++) {
				newTile = {pos: i, emoji: emojiList[i], visible: false, matched: false};
				tiles.push(newTile);
			}
			board.tiles = tiles;
			board.width = 99/boardSize.cols;
			board.height = 75/boardSize.rows;
			board.matches = boardSize.matches;
			return board;
		};

		return o;
	})

})();