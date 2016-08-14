import app from './../application';


app.controller('SignInCtrl', ($scope, $rootScope, $http, backEndUrl, socialSignUrl) => {
	$scope.socialUrl = socialSignUrl;

	$scope.authUser = (user, status) => {
		if(status) {
			$http.post(`${backEndUrl}/authorization`, {
				user_name: user.name,
				user_email: user.email,
				user_password: user.password
			}).then((data) => {
				$rootScope.authUser = data;
				localStorage.setItem('apiKey', data.apiKey);
			}).catch((err) => {
				console.error(err);
			});
		}
	};
});