import app from './../application';


app.controller('AccountSettCtrl', ($scope, Users, $state, $stateParams) => {

	$scope.accountSettingsPromise = Users.get({id: $stateParams.id}).$promise.then((user) => {
		$scope.settings = {
			name: user.username,
			email: user.email,
			password: user.password
		}
	});

	$scope.updateUser = (data, status) => {
		if(status) {
			Users.update({id: $stateParams.id}, {
				user_name: data.name,
				user_email: data.email,
				user_password: data.password
			}).$promise.then((user) => {
				$rootScope.authUser = user;
				$state.go('^.home');
			}).catch((err) => {
				console.error(err);
			});
		}
	};
});