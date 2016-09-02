import admin from './../admin';


admin.controller('AdminPostsCtrl', ($scope, Posts) => {
	$scope.postsPromise = Posts.query().$promise.then((posts) => {
		$scope.posts = posts;
	}).catch((err) => {
		console.error('Posts: ', err);
	});

	$scope.deletePost = (post, id) => {
		Posts.delete({id: id}).$promise.then((data) => {
			$scope.posts.splice($scope.posts.indexOf(post), 1);
		}).catch((err) => {
			console.error('Delete post', err);
		});
	};
});