import app from './../application';


app.controller('SignUpCtrl', ($scope, Users, roles, $state) => {
	$scope.rolesList = roles;

	$scope.createUser = (newUser, status) => {
		if(status) {
			Users.save({
				name: newUser.name,
				email: newUser.email,
				password: newUser.password,
				role: newUser.role
			}).$promise.then((res) => {
				console.log(res);
			}, (err) => {
				console.log(err);
			});
		}
	}
});