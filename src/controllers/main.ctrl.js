import app from './../application';


app.controller('MainCtrl', ($scope, $translate) => {
	$scope.langs = ['ua', 'en'];

	$scope.activeLang = $translate.use()

	$scope.updateLang = (lang) => {
		$translate.use(lang);
	};

});