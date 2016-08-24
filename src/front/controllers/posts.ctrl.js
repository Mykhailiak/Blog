import app from './../application';


app.controller('PostsCtrl', ($scope, $http, Posts, backEndUrl) => {
	$scope.postOptions = {
		orderKey: 'date_post',
		reverse: true
	};

	// Pagination

	// Get total items - requires amendments
	$http.get(`${backEndUrl}/length`).then((length) => {
		$scope.totalItems = parseFloat(length.data.posts);
	}).catch((err) => {
		console.error('Get legnth of data', err);
	});


	$scope.paginationSettings = {
		currentPage: 1,
		perPage: 5,
		offset() {
			return this.perPage * (this.currentPage - 1);
		},
		paginationChange() {
			$scope.postsPromise = Posts.partialGet({limit: this.perPage, offset: this.offset()}).$promise.then((posts) => {
				$scope.posts = posts;
			}).catch((err) => {
				console.error(err);
			});
		}
	};


	$scope.paginationSettings.paginationChange();
});