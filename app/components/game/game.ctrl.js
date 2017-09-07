(function() {
	angular.module('components.game', ['factory.board'])
	.controller('GameController', function(boardFactory, resolvedSize, $window, $timeout, $state) {
		// console.log('Resolved size: ');
		// console.log(resolvedSize);
		// console.log('$scope: ');
		// console.log($scope);
		// console.log('State Params: ' + $stateParams);
		// console.log('State Params.size: ' + $stateParams.size)
		var vm = this;
		vm.board = boardFactory.generateBoard(resolvedSize);
		vm.clickNum = 0;
		vm.wh = $window.innerHeight;
		this.title ='Some title';
		vm.activeTiles = [];
		vm.matchesFound = 0;

		// Tests two tiles to see if their emoji match
		vm.checkMatch = function(tile1, tile2) {
			if (tile1.emoji === tile2.emoji && tile1.pos != tile2.pos) { return true;	}
			else { return false; }
		};

		// Marks a tile as visible
		// Inputs: a tile's position and the game board
		// output: true if successful, false if position not found on board
		vm.markVisible = function(pos, board) {
			x = board.tiles.find(function(tile) {
				if (tile.pos === pos) {tile.visible = true; return tile;}
			});
			return (typeof x != 'undefined');
		};

		// Marks a tile as invisible
		vm.markInvisible = function(pos, board) {
			x = board.tiles.find(function(tile) {
				if (tile.pos === pos) {tile.visible = false; return tile;}
			});
			return (typeof x != 'undefined');
		};

		// Marks a tile as matched
		vm.markMatched = function(pos, board) {
			x = board.tiles.find(function(tile) {
				if (tile.pos === pos) {tile.matched = true; return tile;}
			});
			return (typeof x != 'undefined');
		};

		// Returns true if the player has found all the matches
		vm.checkGameOver = function(matchesFound, board) {
			if (matchesFound === board.matches) {return true}
			else {return false}
		};

	

// When a tile is clicked:
	// 0. if it's the one already clicked, do nothing
	// 1. mark the tile visible
	// 2. add the tile to activeTiles
	// 3. increment clickNum
	// 4. if clickNum === 2
		// 4a. check for a match() and if so:
			// 4aa. increment matchesFound, update tiles to matched: true, check for game over
		// 4b. else
			// 4ba. pause momentarily (transition)
			// 4bb. mark both invisible
		// 4c. either way: empty activeTiles, reset clickNum to 0
	// 5. else clickNum === 1, in which case nothing needs to happen
		vm.clickTile = function(tile) {
			if (tile.visible) {return; }
			if (vm.clickNum === 1 && tile === vm.activeTiles[0]) { return; }
			vm.markVisible(tile.pos, vm.board);
			// console.log('Tile ' + tile.pos + ' is visible? ' + tile.visible + '. is matched? ' + tile.matched);
			vm.activeTiles.push(tile);
			vm.clickNum++;
			// console.log('ClickNum: ' + vm.clickNum);

			if (vm.clickNum===2) {
				if (vm.checkMatch(vm.activeTiles[0],vm.activeTiles[1])) {
					vm.matchesFound++;
					vm.checkGameOver(vm.matchesFound, vm.board);
					vm.markMatched(vm.activeTiles[0].pos, vm.board);
					vm.markMatched(vm.activeTiles[1].pos, vm.board);
					activeTiles = [];
				} else {
					$timeout(vm.MarkIn)
					// $timeout(function() {
					// 	vm.markInvisible(vm.activeTiles[0].pos, vm.board)
					// },1000);
					// $timeout(function() {
					// 	vm.markInvisible(vm.activeTiles[1].pos, vm.board)
					// },1000);
					$timeout(vm.markInvisible, 1000, true, vm.activeTiles[1].pos, vm.board);
					$timeout(vm.markInvisible, 1000, true, vm.activeTiles[0].pos, vm.board);
					// .then(vm.markInvisible(vm.activeTiles[1].pos, vm.board));
				}
				vm.clickNum = 0;
				vm.activeTiles = [];
			}
		};

		vm.newSameGame = function() {
			$state.reload();
		};
	})
	.config(function($stateProvider) {
		$stateProvider
			.state('game', {
				url: '/game/:size',
				templateUrl: 'components/game/game.html',
				controller: 'GameController as vm',
				resolve: {
					resolvedSize: ['$stateParams', function($stateParams) {
						return $stateParams.size;
						// return 'xs';
					}]
				}
			});
	});
})();