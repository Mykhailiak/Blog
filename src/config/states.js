import app from './../application';

import homeTpl from './../themes/templates/home.tpl.jade';
import signUpTpl from './../themes/templates/signup.tpl.jade';
import signInTpl from './../themes/templates/signin.tpl.jade';
import accountTpl from './../themes/templates/accout.tpl.jade';
import postTpl from './../themes/templates/post.tpl.jade';


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
		.state('signIn', {
			url: '/signIn',
			controller: 'SignInCtrl',
			template: signInTpl()
		})
		.state('account', {
			url: '/accout/:id',
			controller: 'AccountCtrl',
			template: accountTpl()
		})
		.state('post', {
			url: '/post/:id',
			controller: 'PostCtrl',
			template: postTpl()
		})
});