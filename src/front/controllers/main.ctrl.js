import app from './../application';


app.controller('MainCtrl', ($scope, $translate, amMoment, backEndUrl, $rootScope) => {
	$scope.langs = ['uk', 'en'];

	$scope.activeLang = $scope.langs[0];
	amMoment.changeLocale($scope.activeLang);

	$scope.updateLang = (lang) => {
		$translate.use(lang);
		amMoment.changeLocale(lang);
	};

	$scope.signOut = (user) => {
		if(angular.isDefined(user)) {
			$http.get(`${backEndUrl}/user_out/${user.id}`).then((data) => {
				console.log(data);	// for uncertain answers
				$rootScope.authUser = null;
			}).catch((err) => {
				console.error(err);
			});
		}
	};

});