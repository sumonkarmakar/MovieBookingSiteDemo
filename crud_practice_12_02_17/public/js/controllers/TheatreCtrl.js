console.log("TheatreController Loading");
angular.module('TheatreCtrl',[]).controller('TheatreController',function($scope,$http){
    console.log("Entered TheatreController");
	// calling refresh function
	var refresh = function(){
		console.log('refresh()');
		$http.get('/theatre/getTheatre').success(function(response){
			console.log("Read Successfull");
			$scope.theatreList = response;
			console.log($scope.theatreList);		
		});
	};
	refresh();

	$scope.deleteTheatre = function(theatre){
		console.log("Reached delete");
		$http.delete('/theatre/deleteTheatre/' + theatre._id).success(function(response){
			console.log(response);
		});
		refresh();
	};
});