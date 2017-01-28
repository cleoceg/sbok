angular.module('sbokOrg', ['ngSanitize']);

var ctrOrgIntro = function($scope, $http) {
	$http.get('/api/org_intro').
		then(function(response){
			$scope.data = response.data
		});
};

var ctrOrgRoles = function($scope, $http) {
	$http.get('/api/org_roles').
		then(function(response){
			$scope.data = response.data
		});
};

var ctrOrgProject = function($scope, $http) {
	$http.get('/api/org_project').
		then(function(response){
			$scope.data = response.data
		});
};

var ctrOrgOwner = function($scope, $http) {
	$http.get('/api/org_owner').
		then(function(response){
			$scope.data = response.data
		});
};

var ctrOrgMaster = function($scope, $http) {
	$http.get('/api/org_master').
		then(function(response){
			$scope.data = response.data
		});
};

var ctrOrgTeam = function($scope, $http) {
	$http.get('/api/org_team').
		then(function(response){
			$scope.data = response.data
		});
};

var ctrOrgFolio = function($scope, $http) {
	$http.get('/api/org_portfolio').
		then(function(response){
			$scope.data = response.data
		});
};

var ctrOrgSummary = function($scope, $http) {
	$http.get('/api/org_sum').
		then(function(response){
			$scope.data = response.data
		});
};

var ctrOrgVs = function($scope, $http) {
	$http.get('/api/org_vs').
		then(function(response){
			$scope.data = response.data
		});
};

var ctrOrgTheories = function($scope, $http) {
	$http.get('/api/org_theories').
		then(function(response){
			$scope.data = response.data
		});
};

angular
	.module('sbokOrg')
	.controller('ctrOrgRoles',ctrOrgRoles)
	.controller('ctrOrgProject',ctrOrgProject)
	.controller('ctrOrgOwner',ctrOrgOwner)
	.controller('ctrOrgMaster',ctrOrgMaster)
	.controller('ctrOrgTeam',ctrOrgTeam)
	.controller('ctrOrgFolio',ctrOrgFolio)
	.controller('ctrOrgSummary',ctrOrgSummary)
	.controller('ctrOrgVs',ctrOrgVs)
	.controller('ctrOrgTheories',ctrOrgTheories)
	.controller('ctrOrgIntro',ctrOrgIntro);
	