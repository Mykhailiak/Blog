import app from './../application';


app.controller('UsersCtrl', ($scope, Users) => {
	$scope.usersPromise = Users.query().$promise.then((data) => {
		$scope.users = data;
	}, (err) => {
		console.error(err);
	});

	$scope.search = {
		name: '',
		role: '',
		email: ''
	};

});