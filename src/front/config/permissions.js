import app from './../application';


app.run(($rootScope, PermRoleStore, PermPermissionStore, PermStateAuthorization, AuthService) => {
	$rootScope.authUser = {
		user_role: 'ROLE_USER',
		id: 53
	};

	$rootScope.$on('$stateChangePermissionDenied', (e, toState, toParams, options) => {
		console.warn('Change state: Permission denied');
	});

	PermPermissionStore.definePermission('canEditAccount', (permissionName, transitionProperties) => {
		return $rootScope.authUser.id === parseInt(transitionProperties.fromParams.id);
	});

	PermPermissionStore.definePermission('canEditPost', (permissionName, transitionProperties) => {
		return $rootScope.authUser.posts.indexOf(transitionProperties.toParams.id) !== -1;
	});

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