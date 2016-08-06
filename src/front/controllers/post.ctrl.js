import app from './../application';


app.controller('PostCtrl', ($scope, Posts, Comments, $stateParams, $state) => {
	$scope.postsPromise = Posts.get({id: $stateParams.id}).$promise.then((data) => {
		$scope.post = data;
		console.log(data);
	}).catch((err) => {
		console.error(err);
	});

	$scope.comment = {};

	$scope.postComment = (data) => {
		let newComment = {
			post_for_comment: $scope.post.id,
			comment_name: data.title,
			comment_text: data.text
		};

		Comments.save(newComment).then((comment) => {
			$scope.post.comment.push(comment);
		}).catch((err) => {
			console.error(err);
		});
	};
});