angular.module('sbokPrin', ['ngSanitize']);

var ctrGen = function($scope, $http, url) {
	$http.get(url).
		then(function(response){
			$scope.data = response.data
		});
};

var ctrPrinIntro = function($scope, $http) { ctrGen($scope, $http, '/api/prin_intro'); };
var ctrPrinEpc = function($scope, $http) { ctrGen($scope, $http, '/api/prin_epc'); };
var ctrPrinSelforg = function($scope, $http) { ctrGen($scope, $http, '/api/prin_selforg'); };

/*var ctrPrinIntro = function($scope, $http) {
	$http.get('/api/prin_intro').
		then(function(response){
			$scope.data = response.data
		});
};*/

angular
	.module('sbokPrin')
	.controller('ctrPrinEpc',ctrPrinEpc)
	.controller('ctrPrinSelforg',ctrPrinSelforg)
	.controller('ctrPrinIntro',ctrPrinIntro);
	