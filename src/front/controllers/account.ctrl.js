import app from './../application';


app.controller('AccountCtrl', ($scope, $stateParams, Users) => {
	Users.get({id: $stateParams.id}).$promise.then((user) => {
		$scope.user = user;
	}).catch((err) => {
		console.error(err);
	});
	$scope.usersPromise = Users.query().$promise.then((data) => {
		$scope.users = data;
	}).catch((err) => {
		console.error(err);
	});
});