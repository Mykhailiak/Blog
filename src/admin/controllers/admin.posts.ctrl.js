import admin from './../admin';


admin.controller('AdminPostsCtrl', ($scope, Posts) => {
	$scope.postsPromise = Posts.query().$promise.then((posts) => {
		$scope.posts = posts;
	}).catch((err) => {
		console.error('Posts: ', err);
	});
});