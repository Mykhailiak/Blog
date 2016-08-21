import module from './../module';

import loginFormTpl from './../../themes/templates/directives/login.form.tpl.jade';


module.directive('loginForm', () => {
	return {
		restrict: 'E',
		scope: true,
		template: loginFormTpl,
		controller: 'LoginFormCtrl'
	}
});