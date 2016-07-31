import app from './../application';


app.controller('PostsCtrl', ($scope, Posts) => {
	$scope.postsPromise = Posts.query().$promise.then((data) => {
		$scope.posts = data;
	}).catch((err) => {
		console.error(err);
	});

	$scope.tags = '';

	$scope.search = {
		title: '',
		text: '',
		author: '',
		created: '',
	};


	$scope.$watch('tags', (newVal, oldVal) => {
		$scope.search.tags = $scope.tags.split(/[\s,]+/);
	});


});