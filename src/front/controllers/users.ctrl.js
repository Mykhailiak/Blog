import app from './../application';


app.controller('UsersCtrl', ($scope, Users) => {
	$scope.usersPromise = Users.query().$promise.then((users) => {
		$scope.totalItems = users.length;
	}).catch((err) => {
		console.error(err);
	});

	$scope.userOptions = {
		orderKey: 'user_create_date',
		reverse: true
	};

	$scope.setReverse = (value) => {
		$scope.userOptions.reverse = !value;
	};

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