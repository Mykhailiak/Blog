import module from './../module';


module.factory('AuthService', ($rootScope, $http, backEndUrl, domainUrl) => {
	return {
		login(credentials) {
			return $http.post(`${domainUrl}/authorization`, credentials)
				.then((data) => {
					$rootScope.authUser = data;
					localStorage.setItem('apiKey', data.apiKey);
					sessionStorage.setItem('user', data);

					return data;
				})
				.catch((err) => {
					console.error(err);
				});
		},
		logout(id) {
			$http.get(`${backEndUrl}/user_out/${id}`)
				.then((data) => {
					console.info('Success logout');
					localStorage.removeItem('apiKey');
					$rootScope.authUser = null;
					$rootScope.$broadcast('logout', {
						data
					});
				})
				.catch((err) => {
					console.error('Logout error: ', err);
				});
		},
		isAdmin(id) {
			return $http.get(`${backEndUrl}/checkStatus/${id}`).then((res) => {
				return res;
			});
		},
		isAuthenticated() {
			return !!$rootScope.authUser;
		},
		isAuthorized(authorizedRoles) {
			if(!angular.isArray(authorizedRoles)) {
				authorizedRoles = [authorizedRoles];
			}
			return (this.isAuthenticated() && authorizedRoles.indexOf($rootScope.authUser.user_role) !== -1);
		}
	}
});
