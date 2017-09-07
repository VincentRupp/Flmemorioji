describe('components.newgame', function() {
	var $controller, scope, NewgameController;

	beforeEach(angular.mock.module('ui.router'));
	beforeEach(angular.mock.module('components.newgame'));


	beforeEach(inject(function($rootScope, _$controller_, _$q_, _$httpBackend_) {
		$controller = _$controller_;
		scope = $rootScope.$new();
		$q = _$q_;
		$httpBackend = _$httpBackend_;
		NewgameController = $controller('NewgameController', {$scope: scope});
	}));

	it('should be defined', function() {
		expect(NewgameController).toBeDefined();
	});
	it('should have a scope variable named sizeList', function() {
		expect(scope.sizeList).toBeDefined();
		expect(scope.sizeList.length).toEqual(9);
	});
	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
	it('should have a function that goes to /game/:size', function() {
		//Pending
		// $httpBackend.expect('GET', "/game/xs").respond(200, {mocked: "response"});
		// scope.startGame('xs', function () {return true}, function () {return false});
		// // $httpBackend.flush();
	});
});