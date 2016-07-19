import app from './../application';

app.controller('MainCtrl', ($scope, Users) => {
	Users.query().$promise.then((data) => {
		$scope.users = data;
	}, (err) => {
		console.error(err);
	});
});