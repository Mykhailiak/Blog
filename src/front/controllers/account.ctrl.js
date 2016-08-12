import app from './../application';


app.controller('AccountCtrl', ($scope, $stateParams, Users, Posts) => {
	$scope.accountPromise = Users.get({id: $stateParams.id}).$promise.then((user) => {
		$scope.user = user;
		console.log(user);
	}).catch((err) => {
		console.error(err);
	});

	$scope.createPost = (post) => {
		$scope.newPostPromise = Posts.save({
			post_name: post.title,
			post_text: post.text,
			post_tags: post.tags
		}).$promise.then((post) => {
			$scope.user.posts.push(post);
			$scope.$broadcast('formPristine');
		}).catch((err) => {
			console.error(err);
		});
	};

	$scope.$on('deletePost', function(e, deleted) {
		$scope.user.posts.splice($scope.user.posts.findIndex((post) => post.id === deleted.id), 1);
	});
});