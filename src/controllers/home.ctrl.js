import app from './../application';

app.controller('MainCtrl', ($scope, Users, Posts) => {
	Users.query().$promise.then((data) => {
		$scope.users = data;
	}, (err) => {
		console.error(err);
	});

	Posts.query().$promise.then((data) => {
		$scope.posts = data;
	}, (err) => {
		console.error(err);
	});
});