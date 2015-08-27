app.controller('SearchCtrl', ['$scope','$rootScope','NotifyService','SearchService','SiteName', function($scope,$rootScope,NotifyService,SearchService,SiteName){
	$scope.siteName = SiteName;

	$scope.doSubmit = function (site) {
		SearchService.getContent(site)
			.success(function (response) {

				$scope.data = response;
					//console.log(response.content);
					
					
					NotifyService.success('Success');
				
			})
			.error(function(response) {
	    		console.log(response);
	    		NotifyService.error('No Link Found.');
	    	});
		//console.log(SearchService.getReport(city));

		
	};
}]);