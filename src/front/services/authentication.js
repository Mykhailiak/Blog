import app from './../application';


app.factory('AuthService', ($rootScope, $http, backEndUrl, domainUrl) => {
	return {
		login(credentials) {
			return $http.post(`${domainUrl}/authorization`, credentials)
				.then((data) => {
					$rootScope.authUser = data;
					localStorage.setItem('apiKey', data.apiKey);

					return data;
				})
				.catch((err) => {
					console.error(err);
				});
		},
		isAuthenticated() {
			return !!$rootScope.authUser
		},
		isAuthorized(authorizedRoles) {
			if(!angular.isArray(authorizedRoles)) {
				authorizedRoles = [authorizedRoles];
			}
			return (this.isAuthenticated() && authorizedRoles.indexOf($rootScope.authUser.user_role) !== -1);
		}
	}
});