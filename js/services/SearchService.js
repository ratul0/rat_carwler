app.service('SearchService', ['$http','$location', function($http,$location){
	var service = {};

	service.getContent = function (site) {
		
		//return $http.get('http://api.openweathermap.org/data/2.5/find?q=Dhaka&units=metric');
		//http://boilerpipe-web.appspot.com/extract?url=http%3A%2F%2Fbangla.bdnews24.com%2Fsport%2Farticle1012228.bdnews&extractor=ArticleExtractor&output=json&extractImages=
		//return $http.get("http://boilerpipe-web.appspot.com/extract?url="+site.name+"&extractor=ArticleExtractor&output=json&extractImages=");
		return $http.post('http://localhost:3000/content', site);
	};

	service.getWords = function (site) {
		
		
		return $http.post('http://localhost:3000/words', site);
	};

	service.getLines = function (site) {
		
		
		return $http.post('http://localhost:3000/lines', site);
	};
	

	return service;
}]);