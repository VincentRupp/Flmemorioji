//This component should:
	// Provide a hard-coded list of game sizes (display vs internal)
	// Provide a path /new
	// direct to /game/:size on click

(function() {
	angular.module('components.newgame', [])
	.controller('NewgameController', ['$scope', '$state', function($scope, $state) {
		$scope.sizeList = [
			{size: 'tiny', name: 'Tiny'},
			{size: 'xs', name: 'X-Small'},
			{size: 'sm', name: 'Small'},
			{size: 'md', name: 'Medium'},
			{size: 'xm', name: 'X-Medium'},
			{size: 'lg', name: 'Large'},
			{size: 'xl', name: 'X-Large'},
			{size: 'hg', name: 'Huge'},
			{size: 'omg', name: 'OMG'}
		];
		$scope.startGame = function(size) {
			$state.go("game", {size: size});
		}
	}])
	.config(function($stateProvider) {
		$stateProvider
			.state('new', {
				url: '/new',
				templateUrl: 'components/newgame/newgame.html',
				controller: 'NewgameController'
			});
	});
})();