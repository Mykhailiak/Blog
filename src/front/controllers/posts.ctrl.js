import app from './../application';


app.controller('PostsCtrl', ($scope, Posts) => {
	$scope.postsPromise = Posts.query().$promise.then((data) => {
		$scope.posts = data;
	}).catch((err) => {
		console.error(err);
	});

	$scope.search = {
		name_post: '',
		text_post: '',
		author_post: '',
		date_post: '',
		tag: {
			tagname: ''
		}
	};

});