app.config(['$routeProvider','$httpProvider',function($routeProvider,$httpProvider) {
	$routeProvider
		.when('/',{
			templateUrl : 'partials/pages/home.html',
			controller : 'SearchCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});

		/*$httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];*/
}]);