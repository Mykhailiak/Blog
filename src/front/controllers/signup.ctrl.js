import app from './../application';


app.controller('SignUpCtrl', ($scope, Users, $state, roles) => {

	$scope.createUser = (newUser, status) => {
		if(status) {
			Users.save({
				name: newUser.name,
				email: newUser.email,
				password: newUser.password,
				role: roles.user;
			}).$promise.then((res) => {
				console.log(res);
			}).catch((err) => {
				console.error(err);
			});
		}
	};
});