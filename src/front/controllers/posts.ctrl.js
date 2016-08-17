import app from './../application';


app.controller('PostsCtrl', ($scope, Posts) => {
	$scope.postOptions = {
		orderKey: 'date_post',
		reverse: true
	};

	// Pagination

	Posts.query().$promise.then((posts) => {
		$scope.totalItems = posts.length;
	}).catch((err) => {
		console.error(err);
	});


	$scope.paginationSettings = {
		currentPage: 1,
		perPage: 5,
		offset() {
			return this.perPage * (this.currentPage - 1);
		},
		paginationChange() {
			Posts.partialGet({limit: this.perPage, offset: this.offset()}).$promise.then((posts) => {
				$scope.posts = posts;
			}).catch((err) => {
				console.error(err);
			});
		}
	};


	$scope.paginationSettings.paginationChange();
});