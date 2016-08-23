import app from './../application';


app.controller('PostEditCtrl', ($scope, $state, $stateParams, Posts) => {
	$scope.title = 'Post Edit state';

	$scope.postEditPromise = Posts.get({id: $stateParams.id}).$promise.then((post) => {
		$scope.post = {
			title: post.name_post,
			text: post.text_post,
			tags: post.post_tags
		};
	}).catch((err) => {
		console.error('Get post', err);
	});

	$scope.editPost = (data, status) => {
		if(status) {
			Posts.update({id: $stateParams.id}, {
				post_name: data.title,
				post_text: data.text,
				post_tags: data.tags
			}).$promise.then((post) => {
				$state.go('^.view');
			}).catch((err) => {
				console.error('Edit post', err);
			});
		}
	};
});