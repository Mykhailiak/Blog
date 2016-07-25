import app from './../application';


app.controller('PostCtrl', ($scope, Posts, $stateParams, $state) => {
	$scope.postsPromise = Posts.get({id: $stateParams.id}).$promise.then((data) => {
		$scope.post = data;
	}, (err) => {
		console.error(err);
	});
});