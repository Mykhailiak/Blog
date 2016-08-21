import app from './../application';


app.controller('MainCtrl', ($scope, $translate, $state, amMoment, backEndUrl, $rootScope, AuthService) => {
	$scope.langs = ['uk', 'en'];

	$scope.activeLang = $scope.langs[0];
	amMoment.changeLocale($scope.activeLang);

	$scope.updateLang = (lang) => {
		$translate.use(lang);
		amMoment.changeLocale(lang);
	};

	$scope.$on('logout', (e, args) => {
		$state.go('root.home', {}, {
			reload: true
		});
	});

	$scope.signOut = (id) => {
		if(angular.isDefined(id)) {
			AuthService.logout(id);
		}
	};
});