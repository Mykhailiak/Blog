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
			}, (res) => {
				if(res.code === 200) {
					$state.go('home');
				}
			});
		}
	}
});