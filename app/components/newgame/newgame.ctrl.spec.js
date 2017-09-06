describe('components.newgame', function() {
	var $controller, scope, NewgameController;

	beforeEach(angular.mock.module('ui.router'));
	beforeEach(angular.mock.module('components.newgame'));

	beforeEach(inject(function($rootScope, _$controller_) {
		$controller = _$controller_;
		scope = $rootScope.$new();
		NewgameController = $controller('NewgameController', {$scope: scope});
	}));

	it('should be defined', function() {
		expect(NewgameController).toBeDefined();
	});
});