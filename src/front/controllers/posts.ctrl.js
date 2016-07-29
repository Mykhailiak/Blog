import app from './../application';


app.controller('PostsCtrl', ($scope, Posts) => {
	$scope.postsPromise = Posts.query().$promise.then((data) => {
		$scope.posts = data;
	}, (err) => {
		console.err(err);
	});
});