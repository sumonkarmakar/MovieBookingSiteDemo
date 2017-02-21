console.log("loading showmapping controller");
angular.module('ShowMappingCtrl',[]).controller('ShowMappingController',function($scope,$http){

	console.log("Entered showmapping controller");
	var refresh = function(){
		console.log('refresh()');
		$http.get('/show/getShow').success(function(response){
			console.log("Show Successfully");
			$scope.showList=response;
			console.log($scope.showList);
		});
	};

	refresh();
});