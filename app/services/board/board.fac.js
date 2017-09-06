//This factory returns a game board based on a game size

// matches				#total			#rows x cols		#size
// 2							4						2x2							tiny
// 3							6						2x3							xs
// 4							8						2x4							sm
// 6							12					3x4							md
// 8							16					4x4							xm
// 12							24					4x6							lg
// 15							30					5x6							xl
// 28							56					7x8							hg
// 50							100					10x10						omg

(function() {
	angular.module('factory.board', ['factory.emoji'])
	.factory('boardFactory', function() {
		var vm = this;
		var o = {};

		var boardSizes = [
		{size: 'tiny', 	matches: 2,  rows: 2, cols: 2},
		{size: 'xs', 		matches: 3,  rows: 2, cols: 3},
		{size: 'sm',		matches: 4,  rows: 2, cols: 4},
		{size: 'md', 		matches: 6,  rows: 3, cols: 4},
		{size: 'xm',		matches: 8,  rows: 4, cols: 4},
		{size: 'lg', 		matches: 12, rows: 4, cols: 6},
		{size: 'xl',		matches: 15, rows: 5, cols: 6},
		{size: 'hg',		matches: 28, rows: 7, cols: 8},
		{size: 'omg',		matches: 50, rows:10, cols:10}		
		];

		o.findBoardSize = function(size) {
			return boardSizes.find(function(boardSize) {
				return boardSize.size === size;
			})
		}

		o.generateBoard = function(size) {
			var i = 0;
			var board = {};
			var tiles = [];
			var boardSize = o.findBoardSize(size);
			emojiList = emojiFactory.get(boardSize.matches);
			emojiList = emojiFactory.randomize(emojiList);
			tileCount = boardSize.matches*2;
			for (i=0;i<tileCount;i++) {
				newTile = {pos: i, emoji: emojiList[i], matched: false};
				tiles.push(newTile);
			}
			board.tiles = tiles;
			board.width = Math.floor((98/boardSize.cols))+'%';
			return board;
		};

		return o;
	})

})();