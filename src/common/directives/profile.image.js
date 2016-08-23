import module from './../module';


module.directive('profileImage', ($http, defaultPhotoUrl) => {
	return {
		restrict: 'A',
		link(scope, element, attr) {
			if(angular.isDefined(attr['ngSrc']) && !!attr['ngSrc']) {
				attr.$observe('ngSrc', (src) => {
					$http.get(src).then(() => {
						console.info('Profile: Photo exist');
					}).catch((err) => {
						console.warn('Profile: Photo doesn\'t exist');
						element.attr('src', defaultPhotoUrl);
					});
				});
			} else {
				element.attr('src', defaultPhotoUrl);
			}
		}
	}
});