import app from './../application';


app.controller('CommentCtrl', ($scope, Comments) => {
	$scope.statusEdits = {
		view: 'view',
		edit: 'edit'
	};

	$scope.editStatus = $scope.statusEdits.view;

	$scope.editToggle = (value) => {
		return $scope.editStatus = $scope.editStatus === $scope.statusEdits.view ? $scope.statusEdits.edit : $scope.statusEdits.view;
	};

	$scope.editCommentData = {
		title: $scope.comment.name_comment,
		text: $scope.comment.text_comment
	};

	$scope.removeComment = (id) => {
		Comments.delete({id: id}).$promise.then((comment) => {
			$scope.$emit('commentDelete', {
				comment
			});
		}).catch((err) => {
			console.error(err);
		});
	};

	$scope.editComment = (data, status) => {
		if(status) {
			Comments.update({id: data.id}, {
				comment_name: data.title,
				comment_text: data.text
			}).$promise.then((data) => {
				$scope.comment = {
					comment_name: data.comment_name,
					comment_text: data.comment_text
				}
				$scope.editStatus = 'view';
			}).catch((err) => {
				console.error(err);
			});
		}
	};
});