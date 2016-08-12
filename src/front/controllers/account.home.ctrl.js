import app from './../application';


app.controller('AccountHomeCtrl', ($scope, Users) => {
	$scope.usersPromise = Users.query().$promise.then((data) => {
		$scope.users = data;
	}).catch((err) => {
		console.error(err);
	});

	$scope.postOptions = {
		orderKey: 'date_post',
		reverse: true
	};

	$scope.userOptions = {
		limit: 5,
		orderKey: 'user_create_date',
		reverse: true
	};

	$scope.search = {};

	$scope.$on('formPristine', (e, args) => {
		$scope.newPost = {};
		$scope.writePost.$setPristine();
	});
});