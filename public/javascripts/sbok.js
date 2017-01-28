angular.module('sbok', []);

var ctrOrgIntro = function($scope, $http) {
	$http.get('/api/org_intro').
		then(function(response){
			$scope.data = response.data
		});
};

angular
	.module('sbok')
	.controller('ctrOrgIntro',ctrOrgIntro);
	