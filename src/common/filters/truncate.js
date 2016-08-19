import module from './module';


module.filter('truncate', ($filter) => {
	return (str, length) => {
		if(angular.isNumber(length) && angular.isString(str)) {
			if(str.length > length) {
				return `${$filter('limitTo')(str, length)}...`;
			}
		}
		return str;
	};
});