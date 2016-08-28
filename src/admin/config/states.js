import admin from './../admin';


import adminTpl from './../../themes/templates/admin/admin.tpl.jade';
import adminWellcomeTpl from './../../themes/templates/admin/admin.wellcome.tpl.jade';

admin.config(($stateProvider, $urlRouterProvider) => {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('admin', {
			url: '/',
			controller: 'AdminCtrl',
			template: adminTpl,
			abstract: true
		})
		.state('admin.welcome', {
			url: '',
			controller: 'AdminWellcomeCtrl',
			template: adminWellcomeTpl,
		})
});