import app from './../application';


app.controller('UsersCtrl', ($scope, Users) => {
	$scope.usersPromise = Users.query().$promise.then((data) => {
		$scope.users = data;
	}).catch((err) => {
		console.error(err);
	});

	$scope.userOptions = {
		orderKey: 'user_create_date',
		reverse: true
	};

	$scope.setReverse = (value) => {
		$scope.userOptions.reverse = !value;
	};

	$scope.search = {};

});