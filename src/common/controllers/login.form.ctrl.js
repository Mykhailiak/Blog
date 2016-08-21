import module from './../module';


module.controller('LoginFormCtrl', ($scope, socialSignUrl, AuthService) => {
	$scope.socialUrl = socialSignUrl;

	$scope.authUser = (user, status) => {
		if(status) {
			AuthService.login({
				user_name: user.name,
				user_email: user.email,
				user_password: user.password
			});
		}
	};
});