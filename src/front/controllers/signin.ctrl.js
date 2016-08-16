import app from './../application';


app.controller('SignInCtrl', ($scope, socialSignUrl, AuthService) => {
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