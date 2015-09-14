app.config(['$routeProvider','$httpProvider',function($routeProvider,$httpProvider) {
	$routeProvider
		.when('/',{
			templateUrl : 'partials/pages/home.html',
			controller : 'SearchCtrl'
		})
		.when('/words',{
			templateUrl : 'partials/pages/words.html',
			controller : 'SearchCtrl'
		})
		.when('/lines',{
			templateUrl : 'partials/pages/lines.html',
			controller : 'SearchCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});

		/*$httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];*/
}]);