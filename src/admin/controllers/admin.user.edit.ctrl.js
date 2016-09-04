import admin from './../admin';


admin.controller('AdminUserEditCtrl', ($scope, $state, $stateParams, Users, roles) => {
	$scope.title = 'Hello from ctrl';
	$scope.userPromise = Users.get({id: $stateParams.id}).$promise.then((user) => {
		$scope.user = user;
	}).catch((err) => {
		console.error('Users get', err);
	});

	$scope.roles = Object.keys(roles);

	$scope.save = (user) => {
		Users.update({id: $stateParams.id}, user).$promise((user) => {
			$state.go('admin.users');
		}).catch((err) => {
			console.error('User update error:', err);
		});
	};
});