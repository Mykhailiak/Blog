import app from './../application';


app.controller('UsersCtrl', ($scope, $http, Users, backEndUrl) => {

	$scope.userOptions = {
		orderKey: 'user_create_date',
		reverse: true
	};

	$scope.setReverse = (value) => {
		$scope.userOptions.reverse = !value;
	};

	// Pagination

	$http.get(`${backEndUrl}/length`).then((length) => {
		$scope.totalItems = parseFloat(length.data.users);
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
			$scope.usersPromise = Users.partialGet({limit: this.perPage, offset: this.offset()}).$promise.then((users) => {
				$scope.users = users;
			}).catch((err) => {
				console.error(err);
			});
		}
	};

	$scope.paginationSettings.paginationChange();
});