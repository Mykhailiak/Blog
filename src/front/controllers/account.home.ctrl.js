import app from './../application';


app.controller('AccountHomeCtrl', ($scope, Users) => {
	$scope.usersPromise = Users.query().$promise.then((data) => {
		$scope.users = data;
	}).catch((err) => {
		console.error(err);
	});
});