import app from './../application';

import homeTpl from './../../themes/templates/home.tpl.jade';
import signUpTpl from './../../themes/templates/signup.tpl.jade';
import signInTpl from './../../themes/templates/signin.tpl.jade';
import accountTpl from './../../themes/templates/accout.tpl.jade';
import postTpl from './../../themes/templates/post.tpl.jade';
import appTpl from './../../themes/templates/application.tpl.jade';
import mapTpl from './../../themes/templates/map.tpl.jade';
import usersTpl from './../../themes/templates/users.tpl.jade';
import postsTpl from './../../themes/templates/posts.tpl.jade';


app.config(($stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('root', {
			url: '/',
			controller: 'MainCtrl',
			template: appTpl,
			abstract: true
		})
		.state('root.home', {
			url: '',
			controller: 'HomeCtrl',
			template: homeTpl
		})
		.state('root.signUp', {
			url: 'signUp',
			controller: 'SignUpCtrl',
			template: signUpTpl
		})
		.state('root.signIn', {
			url: 'signIn',
			controller: 'SignInCtrl',
			template: signInTpl
		})
		.state('root.users', {
			url: 'user',
			controller: 'UsersCtrl',
			template: usersTpl
		})
		.state('root.posts', {
			url: 'posts',
			controller: 'PostsCtrl',
			template: postsTpl
		})
		.state('root.account', {
			url: 'account/:id',
			controller: 'AccountCtrl',
			template: accountTpl
		})
		.state('root.post', {
			url: 'post/:id',
			controller: 'PostCtrl',
			template: postTpl
		})
		.state('root.map', {
			url: 'map',
			controller: 'MapCtrl',
			template: mapTpl
		})
});