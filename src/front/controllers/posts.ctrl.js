import app from './../application';


app.controller('PostsCtrl', ($scope, Posts) => {
	$scope.postsPromise = Posts.query().$promise.then((data) => {
		$scope.posts = data;
	}).catch((err) => {
		console.error(err);
	});

	$scope.postOptions = {
		orderKey: 'date_post',
		reverse: true
	};

	$scope.search = {};

});