import app from './../application';


app.controller('AccountCtrl', ($scope, $stateParams, Users, Posts) => {
	$scope.accountPromise = Users.get({id: $stateParams.id}).$promise.then((user) => {
		$scope.user = user;
		console.log(user);
	}).catch((err) => {
		console.error(err);
	});
	$scope.usersPromise = Users.query().$promise.then((data) => {
		$scope.users = data;
	}).catch((err) => {
		console.error(err);
	});

	$scope.newPost = {};

	$scope.createPost = (post) => {
		Posts.save({
			post_name: post.title,
			post_text: post.text,
			post_tags: post.tags
		}).$promise.then((post) => {
			$scope.user.posts.push(post);
		}).catch((err) => {
			console.error(err);
		});
	};

});