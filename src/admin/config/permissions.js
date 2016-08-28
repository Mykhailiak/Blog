import admin from './../admin';


admin.run(($rootScope, PermRoleStore, PermPermissionStore) => {
	$rootScope.$on('$stateChangePermissionDenied', (e, toState, toParams, options) => {
		console.warn('Change state: Permission denied');
	});

	PermRoleStore.defineManyRoles({
		AUTHORIZED : (roleName, transitionProperties) => {
			return AuthService.isAdmin(sessionStorage.getItem(user.id));
		});
});