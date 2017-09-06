(function() {
	'use strict';

	angular.module('Memory', [
		'ui.router',
		'factory.board',
		'factory.emoji',
		'components.newgame',
		])
	.config(function($urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
	});
})();