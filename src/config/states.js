import app from './../application';

import homeTpl from './../themes/templates/home.jade';

app.config(($stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			controller: 'MainCtrl',
			template: homeTpl()
		})
});