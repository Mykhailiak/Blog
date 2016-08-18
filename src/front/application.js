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
	'permission',
	'permission.ui',
	'ngImgCrop'
	]).run(($rootScope, PermRoleStore, PermStateAuthorization, AuthService) => {
		$rootScope.authUser = {
			user_role: 'ROLE_USER'
		};

		PermRoleStore.defineManyRoles({
			AUTHORIZED : (roleName, transitionProperties) => {
				return AuthService.isAuthenticated();
			},
			ROLE_USER: (roleName, transitionProperties) => {
				return $rootScope.authUser.user_role === roleName;
			},
			ROLE_ADMIN: (roleName, transitionProperties) => {
				return $rootScope.authUser.user_role === roleName;
			}
		});
	});