import app from './../application';


app.controller('UsersCtrl', ($scope, Users) => {
	$scope.usersPromise = Users.query().$promise.then((data) => {
		$scope.users = data;
		console.log($scope.users);
	}, (err) => {
		console.error(err);
	});

	console.log('hello')
});