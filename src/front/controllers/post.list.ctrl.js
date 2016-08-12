import app from './../application';


app.controller('PostListCtrl', ($scope, Posts, $state) => {
	$scope.deletePost = (id) => {
		Posts.delete({id: id}).$promise.then((post) => {
			$scope.$emit('deletePost', {
				post
			});
		}).catch((err) => {
			console.log(err);
		});
	};
});