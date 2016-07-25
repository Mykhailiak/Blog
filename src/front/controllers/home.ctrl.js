import app from './../application';

app.controller('HomeCtrl', ($scope, Users, Posts) => {
	$scope.usersPromise = Users.query().$promise.then((data) => {
		$scope.users = data;
	}, (err) => {
		console.error(err);
	});

	$scope.postsPromise = Posts.query().$promise.then((data) => {
		$scope.posts = data;
	}, (err) => {
		console.error(err);
	});
});