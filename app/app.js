(function() {
	'use strict';

	angular.module('Memory', [
		'ui.router',
		'factory.board',
		'factory.emoji',
		'components.newgame',
		'components.game',
		])
	.config(function($urlRouterProvider) {
		$urlRouterProvider.otherwise('/new');
	});
})();