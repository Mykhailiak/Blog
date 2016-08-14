import app from './../application';


app.controller('AccountCtrl', ($scope, $state, $stateParams, Users, Posts, Upload, backEndUrl) => {
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
		}).$promise.then((data) => {
			post.image.upload = Upload.upload({
				url: `${backEndUrl}/upload_file/${data.id}`,
				data: {
					file: post.image
				}
			});

			post.image.upload.then((response) => {
				console.log(response.data);
			});
		}).then((post) => {
			$scope.user.posts.push(post);
			$scope.$broadcast('formPristine');
		}).catch((err) => {
			console.error(err);
		});
	};

	$scope.deleteUser = (id) => {
		Users.delete({id: id}).$promise.then((data) => {
			$state.go('root.home');
		}).catch((err) => {
			console.log(err);
		});
	};

	$scope.$on('deletePost', function(e, deleted) {
		$scope.user.posts.splice($scope.user.posts.findIndex((post) => post.id === deleted.id), 1);
	});
});