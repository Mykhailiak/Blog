import app from './../application';

import homeTpl from './../themes/templates/home.tpl.jade';
import signUpTpl from './../themes/templates/signup.tpl.jade'

app.config(($stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			controller: 'MainCtrl',
			template: homeTpl()
		})
		.state('signUp', {
			url: '/signUp',
			controller: 'SignUpCtrl',
			template: signUpTpl()
		})
});