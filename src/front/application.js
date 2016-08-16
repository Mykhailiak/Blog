
import angular from 'angular';

import './../common';

export default angular.module('app', [
	'ui.router',
	'app.resources',
	'cgBusy',
	'ui.bootstrap',
	'ngMessages',
	'pascalprecht.translate',
	'uiGmapgoogle-maps',
	'ngMaterial',
	'ngFileUpload',
	'angularMoment',
	'permission'
	]).run(($rootScope, PermRoleStore) => {
		$rootScope.authUser = {
			user_role: 'ROLE_ADMIN'
		};
		PermRoleStore.defineRole('ROLE_USER', (roleName, transitionProperties) => {
			$rootScope.authUser.user_role === roleName;
		});
	});