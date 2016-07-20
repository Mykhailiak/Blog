import app from './../application';


app.controller('AccountCtrl', ($scope, $stateParams, Users) => {
	Users.get({id: $stateParams.id}).$promise.then((user) => {
		$scope.user = user;
	}, (err) => {
		console.error(err);
	});
	Users.query().$promise.then((data) => {
		$scope.users = data;
	}, (err) => {
		console.error(err);
	});
});