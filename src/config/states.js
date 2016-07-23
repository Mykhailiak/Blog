import app from './../application';

import homeTpl from './../themes/templates/home.tpl.jade';
import signUpTpl from './../themes/templates/signup.tpl.jade';
import signInTpl from './../themes/templates/signin.tpl.jade';
import accountTpl from './../themes/templates/accout.tpl.jade';
import postTpl from './../themes/templates/post.tpl.jade';
import appTpl from './../themes/templates/application.tpl.jade';
import mapTpl from './../themes/templates/map.tpl.jade';


app.config(($stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('root', {
			url: '/',
			controller: 'MainCtrl',
			template: appTpl(),
			redirectTo: 'root.home'
		})
		.state('root.home', {
			url: 'home',
			controller: 'HomeCtrl',
			template: homeTpl()
		})
		.state('root.signUp', {
			url: 'signUp',
			controller: 'SignUpCtrl',
			template: signUpTpl()
		})
		.state('root.signIn', {
			url: 'signIn',
			controller: 'SignInCtrl',
			template: signInTpl()
		})
		.state('root.account', {
			url: 'accout/:id',
			controller: 'AccountCtrl',
			template: accountTpl()
		})
		.state('root.post', {
			url: 'post/:id',
			controller: 'PostCtrl',
			template: postTpl()
		})
		.state('root.map', {
			url: 'map',
			controller: 'MapCtrl',
			template: mapTpl()
		})
});