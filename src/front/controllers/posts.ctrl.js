import app from './../application';


app.controller('PostsCtrl', ($scope, Posts) => {
	$scope.postsPromise = Posts.query().$promise.then((data) => {
		$scope.posts = data;
	}).catch((err) => {
		console.error(err);
	});

	// $scope.tags = '';

	$scope.search = {
		name_post: '',
		text_post: '',
		author_post: '',
		date_post: ''
	};


	// $scope.$watch('tags', (newVal, oldVal) => {
	// 	$scope.search.tags = $scope.tags.split(/[\s,]+/);
	// });


});