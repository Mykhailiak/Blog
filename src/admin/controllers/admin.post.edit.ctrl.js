import admin from './../admin';


admin.controller('AdminPostEditCtrl', ($scope, $state, $stateParams, Posts) => {
	$scope.title = 'Post edit tpl';

	$scope.postPromise = Posts.get({id: $stateParams.id}).$promise.then((post) => {
		console.log(post);
		$scope.post = post;
	}).catch((err) => {
		console.error('Post error: ', err);
	});

	$scope.editPost = (post) => {
		Posts.update({id: $stateParams.id}, post).$promise.then((post) => {
			console.info('Update success');
			$state.go('admin.posts');
		}).catch((err) => {
			console.error('Post update', err);
		});
	};
});