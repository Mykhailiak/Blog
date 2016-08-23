import app from './../application';


app.controller('SignUpCtrl', ($scope, Users, $state, roles) => {

	$scope.createUser = (newUser, status) => {
		if(status) {
			Users.save({
				user_name: newUser.name,
				user_email: newUser.email,
				user_password: newUser.password,
				role: roles.user
			}).$promise.then((res) => {
				console.info('User create', res);
			}).catch((err) => {
				console.error('User error', err);
			});
		}
	};
});