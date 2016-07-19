import app from './../application';


app.controller('PostCtrl', ($scope, Posts, $stateParams, $state) => {
	Posts.get({id: $stateParams.id}).$promise.then((data) => {
		$scope.post = data;
	}, (err) => {
		console.error(err);
	});
});