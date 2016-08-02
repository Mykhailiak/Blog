import app from './../application';


app.controller('MainCtrl', ($scope, $translate) => {
	$scope.langs = ['ua', 'en'];

	$scope.activeLang = $scope.langs[0];

	$scope.updateLang = (lang) => {
		$translate.use(lang);
	};

});