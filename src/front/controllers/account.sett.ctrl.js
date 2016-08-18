import app from './../application';


app.controller('AccountSettCtrl', ($scope, Users, $state, $stateParams, Upload, domainUrl) => {

	$scope.accountSettingsPromise = Users.get({id: $stateParams.id}).$promise.then((user) => {
		$scope.settings = {
			name: user.user_name,
			email: user.user_mail,
			password: user.user_password,
			photo: user.user_photo
		}
	});

	$scope.updatePhotoAva = (id, lastAvatar, newAvatar, croppedData) => {
		Upload.upload({
			url: `${domainUrl}/upload_avatar/${id}`,
			data: {
				file: newAvatar,
				croppedFile: Upload.dataUrltoBlob(croppedData, newAvatar.name)
			}
		}).then((res) => {
			console.info('Photo load success');
		}, (res) => {
			if(res.status > 0) console.error(`Error: ${res.status}`, res.data);
		}, (evt) => {
			return newAvatar.progress = parseInt(100.0 * evt.loaded / evt.total);
		});
	};

	$scope.updateUser = (data, status) => {
		if(status) {
			Users.update({id: $stateParams.id}, {
				user_name: data.name,
				user_email: data.email,
				user_password: data.password
			}).$promise.then((user) => {
				$rootScope.authUser = user;
				$state.go('^.home');
			}).catch((err) => {
				console.error(err);
			});
		}
	};
});